
import { Badge } from "../../ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card"
import PayNowModal from "../../modals/PayNowModal"
import {paymentHistory} from "../../data/paymentHistory"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"


function Billing() {
  return (
    <div className="w-full min-w-0 px-4 py-6 text-left font-ubuntu text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <h1 className="text-xl font-medium tracking-wide sm:text-2xl">Billing &amp; Payments</h1>

        <Card className="gap-4 rounded-lg border-white/10 bg-white/5 py-4 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:gap-5 sm:py-5">
          <CardHeader className="px-4 sm:px-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-ubuntu-mono text-[10px] uppercase tracking-[0.12em] text-white/50">Current bill</p>
                <CardTitle className="mt-1 text-xl font-semibold sm:text-2xl">September 2026</CardTitle>
              </div>
              <Badge variant="outline" className="h-6 rounded-md border-[#3ACF98]/30 bg-[#3ACF98]/10 font-ubuntu-mono text-xs text-[#3ACF98]">
                Due Oct 15
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-5">
            <dl className="grid grid-cols-2 gap-2 font-ubuntu-mono md:grid-cols-4">
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Plan</dt>
                <dd className="mt-1 text-sm font-medium sm:text-base">Diverge Netflix</dd>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Monthly rate</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">₱1,499</dd>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Other charges</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">₱0.00</dd>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/5 p-2 shadow-glassy-jeri">
                <dt className="text-xs text-white/65">Total due</dt>
                <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">₱1,499</dd>
              </div>
            </dl>
            <PayNowModal
              accountNumber="00001"
              billingPeriod="September 2026"
              dueDate="October 1, 2026"
              amount="₱1,499.00"
              planName="Diverge Netflix"
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
                <dt>Diverge Netflix Subscription</dt>
                <dd className="shrink-0 tabular-nums">₱1,499</dd>
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
                <dd className="shrink-0 tabular-nums">₱1,499</dd>
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