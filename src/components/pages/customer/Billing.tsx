
import { Badge } from "../../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import PayNowModal from "../../modals/PayNowModal"
import {
  buildPaymentHistory,
  getStoredCustomerBillingInvoices,
  persistCustomerBillingInvoices,
  resolveInvoiceStatus,
} from "../../data/billingData"
import { useEffect, useMemo, useState } from "react"
import type { Invoice } from "../../types/invoice"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001"

function getCurrentCustomerEmail() {
  try {
    const rawUser = localStorage.getItem("diverge_user")
    if (!rawUser) {
      return ""
    }

    const user = JSON.parse(rawUser) as { email?: string }
    return user.email ?? ""
  } catch {
    return ""
  }
}

function buildNextMonthlyInvoice(baseInvoice: Invoice): Invoice {
  const nextDueDate = new Date(baseInvoice.dueDate)
  nextDueDate.setMonth(nextDueDate.getMonth() + 1)

  const month = String(nextDueDate.getMonth() + 1).padStart(2, "0")
  const day = String(nextDueDate.getDate()).padStart(2, "0")

  return {
    invoiceID: `INV-${nextDueDate.getFullYear()}-${month}-${day}`,
    account: baseInvoice.account,
    email: baseInvoice.email,
    contact: baseInvoice.contact,
    plan: baseInvoice.plan,
    amount: baseInvoice.amount,
    dueDate: nextDueDate.toISOString().slice(0, 10),
    paymentMethod: "-",
    status: "Pending",
  }
}

function announceBillingRefresh() {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem("diverge-billing-refresh", String(Date.now()))
  window.dispatchEvent(new Event("billing-updated"))
}

function Billing() {
  const customerEmail = getCurrentCustomerEmail()
  const [invoices, setInvoices] = useState<Invoice[]>(() => getStoredCustomerBillingInvoices(customerEmail))

  useEffect(() => {
    let isMounted = true
    const token = localStorage.getItem("diverge_token")
    const email = getCurrentCustomerEmail()

    async function loadCustomerBilling() {
      if (!token) {
        setInvoices(getStoredCustomerBillingInvoices(email))
        return
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/customers/me/billing`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error(`Unable to load billing: ${response.status}`)
        }

        const payload = await response.json()
        const nextInvoices = Array.isArray(payload?.data)
          ? payload.data
              .filter((invoice: any) => !email || (invoice.email ?? "").toLowerCase() === email.toLowerCase())
              .map((invoice: any) => {
                const rawStatus = invoice.status === "Paid" ? "Paid" : invoice.status === "Overdue" ? "Overdue" : "Pending";

                return {
                  invoiceID: invoice.invoiceID,
                  account: invoice.account,
                  email: invoice.email,
                  contact: invoice.contact,
                  plan: invoice.plan,
                  amount: invoice.amount,
                  dueDate: invoice.dueDate,
                  paymentMethod: invoice.paymentMethod ?? "-",
                  status: resolveInvoiceStatus(rawStatus, invoice.dueDate),
                };
              })
          : getStoredCustomerBillingInvoices(email)

        if (isMounted) {
          setInvoices(nextInvoices)
          persistCustomerBillingInvoices(nextInvoices)
        }
      } catch {
        if (isMounted) {
          const fallback = getStoredCustomerBillingInvoices(email)
          setInvoices(fallback.length > 0 ? fallback.slice(0, 1) : fallback)
        }
      }
    }

    void loadCustomerBilling()

    return () => {
      isMounted = false
    }
  }, [])

  const currentBill = useMemo(
    () => invoices.find((invoice) => invoice.status !== "Paid") ?? invoices[0],
    [invoices],
  )
  const paymentHistory = useMemo(() => buildPaymentHistory(invoices), [invoices])

  if (!currentBill) {
    return null
  }

  return (
    <div className="w-full min-w-0 px-4 py-6 text-left font-ubuntu text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <h1 className="text-xl font-medium tracking-wide sm:text-2xl">Billing &amp; Payments</h1>

        <Card className="gap-4 rounded-lg border-white/10 bg-white/5 py-4 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:gap-5 sm:py-5">
          <CardHeader className="px-4 sm:px-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-ubuntu-mono text-[10px] uppercase tracking-[0.12em] text-white/50">Current bill</p>
                <CardTitle className="mt-1 text-xl font-semibold sm:text-2xl">
                  {new Date(currentBill.dueDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </CardTitle>
              </div>
              <Badge variant="outline" className="h-6 rounded-md border-[#3ACF98]/30 bg-[#3ACF98]/10 font-ubuntu-mono text-xs text-[#3ACF98]">
                Due {currentBill.dueDate}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-5">
            <dl className="grid grid-cols-2 gap-2 font-ubuntu-mono md:grid-cols-4">
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Plan</dt>
                <dd className="mt-1 text-sm font-medium sm:text-base">{currentBill.plan}</dd>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Monthly rate</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">{currentBill.amount}</dd>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Other charges</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">₱0.00</dd>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Total due</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">{currentBill.amount}</dd>
              </div>
            </dl>
            <PayNowModal
              accountNumber={currentBill.invoiceID}
              invoiceId={currentBill.invoiceID}
              billingPeriod={new Date(currentBill.dueDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              dueDate={currentBill.dueDate}
              amount={`${currentBill.amount}.00`}
              planName={currentBill.plan}
              onPaymentSuccess={async ({ invoiceId, method }) => {
                const token = localStorage.getItem("diverge_token")

                const nextInvoices: Invoice[] = invoices.map((invoice): Invoice =>
                  invoice.invoiceID === invoiceId
                    ? { ...invoice, status: "Paid", paymentMethod: method }
                    : invoice,
                )

                setInvoices(nextInvoices)
                persistCustomerBillingInvoices(nextInvoices)

                if (!token || !invoiceId) {
                  const created = buildNextMonthlyInvoice(currentBill)
                  const generated: Invoice[] = [...nextInvoices, created]
                  setInvoices(generated)
                  persistCustomerBillingInvoices(generated)
                  announceBillingRefresh()
                  return
                }

                try {
                  const response = await fetch(`${API_BASE_URL}/api/customers/me/billing/pay`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ invoiceId, paymentMethod: method }),
                  })

                  if (!response.ok) {
                    throw new Error("Unable to process payment")
                  }

                  const payload = await response.json()
                  const refreshed: Invoice[] = Array.isArray(payload?.data)
                    ? payload.data.map((invoice: any) => ({
                        invoiceID: invoice.invoiceID,
                        account: invoice.account,
                        email: invoice.email,
                        contact: invoice.contact,
                        plan: invoice.plan,
                        amount: invoice.amount,
                        dueDate: invoice.dueDate,
                        paymentMethod: invoice.paymentMethod ?? "-",
                        status: resolveInvoiceStatus(invoice.status === "Paid" ? "Paid" : invoice.status === "Overdue" ? "Overdue" : "Pending", invoice.dueDate),
                      }))
                    : nextInvoices

                  setInvoices(refreshed)
                  persistCustomerBillingInvoices(refreshed)
                  announceBillingRefresh()
                } catch {
                  const created = buildNextMonthlyInvoice(currentBill)
                  const generatedInvoices: Invoice[] = [...nextInvoices, created]
                  setInvoices(generatedInvoices)
                  persistCustomerBillingInvoices(generatedInvoices)
                  announceBillingRefresh()
                }
              }}
            />
          </CardContent>
        </Card>

        <Card className="gap-0 overflow-hidden rounded-lg border-white/10 bg-white/5 py-0 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79]">
          <CardHeader className="border-b border-white/15 px-4 py-2.5 sm:px-5">
            <CardTitle className="font-ubuntu-mono text-xs font-medium uppercase tracking-[0.1em] text-white/55">Cost breakdown</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <dl className="divide-y divide-white/10 font-ubuntu-mono text-sm">
              <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
                <dt>{currentBill.plan} Subscription</dt>
                <dd className="shrink-0 tabular-nums">{currentBill.amount}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
                <div>
                  <dt className="text-white/80">Equipment rental (modem/router)</dt>
                  <dd className="text-[10px] text-white/45">Included</dd>
                </div>
                <dd className="shrink-0 tabular-nums">₱0.00</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
                <div>
                  <dt className="text-white/80">Installation fee</dt>
                  <dd className="text-[10px] text-white/45">Waived</dd>
                </div>
                <dd className="shrink-0 tabular-nums">₱0.00</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
                <div>
                  <dt className="text-white/80">VAT (12%)</dt>
                  <dd className="text-[10px] text-white/45">Included in rate</dd>
                </div>
                <dd className="shrink-0 self-start tabular-nums">₱160.61</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 py-2 font-medium sm:px-5">
                <dt>Total</dt>
                <dd className="shrink-0 tabular-nums">{currentBill.amount}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card className="gap-0 overflow-hidden rounded-lg border-white/10 bg-white/5 py-0 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79]">
          <CardHeader className="border-b border-white/15 px-4 py-3 sm:px-5">
            <CardTitle className="font-ubuntu text-sm font-medium">Payment history</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <Table className="min-w-[680px] font-ubuntu-mono text-xs">
              <TableHeader className="bg-white/[0.04]">
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="h-8 px-4 text-[10px] font-medium uppercase tracking-wider text-white/60 sm:px-5">Invoice</TableHead>
                  <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Billing period</TableHead>
                  <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Amount</TableHead>
                  <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Due date</TableHead>
                  <TableHead className="h-8 text-[10px] font-medium uppercase tracking-wider text-white/60">Method</TableHead>
                  <TableHead className="h-8 pr-4 text-[10px] font-medium uppercase tracking-wider text-white/60 sm:pr-5">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.invoice} className="border-white/10 hover:bg-white/[0.04]">
                    <TableCell className="px-4 py-2 font-medium text-[#3ACF98] sm:px-5">{payment.invoice}</TableCell>
                    <TableCell className="max-w-[150px] truncate py-2 text-white/80">{payment.period}</TableCell>
                    <TableCell className="max-w-[110px] truncate py-2 tabular-nums">{payment.amount}</TableCell>
                    <TableCell className="max-w-[150px] truncate py-2 text-white/80">{payment.due}</TableCell>
                    <TableCell className="max-w-[120px] truncate py-2 text-white/80">{payment.method}</TableCell>
                    <TableCell className="py-2 pr-4 sm:pr-5">
                      <Badge
                        variant="outline"
                        className={payment.status === "Paid"
                          ? "h-5 rounded-full border-[#3ACF98]/30 bg-[#3ACF98]/10 px-2 text-[10px] text-[#3ACF98]"
                          : "h-5 rounded-full border-white/20 bg-white/[0.06] px-2 text-[10px] text-white/70"}
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Billing