import { useState } from "react"
import { ArrowLeft, Check, CreditCard } from "lucide-react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

type PaymentMethod = "GCASH" | "MAYA" | "CARD"
type PaymentStep = "method" | "confirmation" | "success" | "error"

type PayNowModalProps = {
  accountNumber: string
  billingPeriod: string
  dueDate: string
  amount: string
  planName: string
  invoiceId?: string
  onPaymentSuccess?: (details: { invoiceId?: string; amount: string; method: PaymentMethod }) => Promise<{ paymentReference: string }>
}

const paymentMethods: { value: PaymentMethod; label: string; className: string }[] = [
  { value: "GCASH", label: "GCash", className: "bg-[#0754d8] text-white" },
  { value: "MAYA", label: "Maya", className: "bg-black text-[#42e6ad]" },
  { value: "CARD", label: "Visa / Mastercard", className: "bg-[#f3f3ef] text-[#25234f]" },
]

function PayNowModal({ accountNumber, billingPeriod, dueDate, amount, planName, invoiceId, onPaymentSuccess }: PayNowModalProps) {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<PaymentStep>("method")
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("GCASH")
  const [errorMessage, setErrorMessage] = useState("")
  const [paymentReference, setPaymentReference] = useState("")

  const closeModal = () => {
    setOpen(false)
  }

  const openModal = () => {
    setStep("method")
    setErrorMessage("")
    setPaymentReference("")
    setOpen(true)
  }

  const confirmPayment = async () => {
    if (!onPaymentSuccess) {
      setErrorMessage("The demo settlement action is unavailable.")
      setStep("error")
      return
    }

    try {
      const result = await onPaymentSuccess({
        invoiceId,
        amount,
        method: paymentMethod,
      })
      setPaymentReference(result.paymentReference)
      setStep("success")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to start payment.")
      setStep("error")
    }
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => nextOpen ? setOpen(true) : closeModal()}>
      <Button
        className="mt-4 h-8 rounded-[2vw] border border-white/10 bg-[#3ACF98]/15 px-3 font-ubuntu text-xs text-[#3ACF98] shadow-glassy-jeri transition-transform duration-200 hover-glass-rim hover:-translate-y-0.5 active:translate-y-0 hover:bg-[#3ACF98]/35"
        onClick={openModal}
      >
        <CreditCard aria-hidden="true" />
        Pay {amount} now
      </Button>
      <DialogContent
        showCloseButton={false}
        className="border-white/10 bg-[#121212]/95 p-0 font-ubuntu text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:max-w-xl"
      >
        {step === "method" && (
          <>
            <DialogHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
              <DialogTitle className="text-lg font-medium">Pay Now</DialogTitle>
              <DialogDescription className="sr-only">Review bill details and select a payment method.</DialogDescription>
            </DialogHeader>
            <div className="space-y-5 px-5 pb-2 sm:px-6">
              <section aria-labelledby="bill-details-title">
                <h2 id="bill-details-title" className="mb-2 font-ubuntu-mono text-[10px] font-medium uppercase tracking-wider text-[#3ACF98]/70">Bill details</h2>
                <dl className="space-y-1 pl-2 font-ubuntu-mono text-xs text-white/85">
                  <div className="flex gap-2"><dt className="text-white/55">Account Number:</dt><dd>{accountNumber}</dd></div>
                  <div className="flex gap-2"><dt className="text-white/55">Billing Period:</dt><dd>{billingPeriod}</dd></div>
                  <div className="flex gap-2"><dt className="text-white/55">Plan:</dt><dd>{planName}</dd></div>
                  <div className="flex gap-2"><dt className="text-white/55">Due Date:</dt><dd>{dueDate}</dd></div>
                  <div className="flex gap-2"><dt className="text-white/55">Amount Due:</dt><dd className="font-semibold">{amount}</dd></div>
                </dl>
              </section>

              <section aria-labelledby="payment-method-title">
                <h2 id="payment-method-title" className="mb-3 font-ubuntu-mono text-[10px] font-medium uppercase tracking-wider text-[#3ACF98]/70">Payment method</h2>
                <p className="mb-3 text-xs text-amber-200/80">Demo only. This records the invoice as settled locally; no external payment or money transfer occurs.</p>
                <RadioGroup
                  aria-labelledby="payment-method-title"
                  value={paymentMethod}
                  onValueChange={(value) => {
                    if (value) setPaymentMethod(value as PaymentMethod)
                  }}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                >
                  {paymentMethods.map((method) => (
                    <label key={method.value} className="cursor-pointer">
                      <RadioGroupItem value={method.value} className="sr-only" />
                      <span className={`flex h-16 items-center justify-center rounded-lg border px-3 text-base font-semibold shadow-glassy-jeri transition ${method.className} ${paymentMethod === method.value ? "border-[#3ACF98] ring-2 ring-[#3ACF98]/40" : "border-white/10 opacity-80 hover:opacity-100"}`}>
                        {method.label}
                      </span>
                    </label>
                  ))}
                </RadioGroup>
              </section>
            </div>
            <DialogFooter className="grid grid-cols-2 gap-3 border-0 bg-transparent px-5 pb-5 sm:flex-row sm:justify-between sm:px-6 sm:pb-6">
              <Button variant="outline" className="h-9 rounded-[2vw] border-[#DE0961]/40 bg-[#DE0961]/15 font-ubuntu-mono text-[#DE0961] shadow-glassy-jeri hover-glass-rim hover:bg-[#DE0961]/35" onClick={closeModal}>Cancel</Button>
              <Button className="h-9 rounded-md border border-white/10 bg-[#3ACF98]/15 font-ubuntu-mono text-[#3ACF98] shadow-glassy-jeri hover-glass-rim hover:bg-[#3ACF98]/35" onClick={() => setStep("confirmation")}>Review Demo Settlement</Button>
            </DialogFooter>
          </>
        )}

        {step === "confirmation" && (
          <>
            <DialogHeader className="flex-row items-start justify-between px-5 pt-5 sm:px-6 sm:pt-6">
              <DialogTitle className="font-ubuntu-mono text-sm font-medium uppercase tracking-wider text-white/65">Confirmation Payment</DialogTitle>
              <Button variant="ghost" size="sm" className="-mt-2 -mr-2 rounded-[2vw] font-ubuntu-mono text-[#3ACF98] shadow-glassy-jeri hover-glass-rim" onClick={() => setStep("method")}>
                <ArrowLeft aria-hidden="true" />
                Back
              </Button>
              <DialogDescription className="sr-only">Confirm the bill and selected payment method.</DialogDescription>
            </DialogHeader>
            <div className="space-y-6 px-5 py-3 font-ubuntu-mono text-xs sm:px-6">
              <p className="leading-relaxed text-white/90">
                You are about to pay <strong className="text-white">{amount}</strong> for your <strong className="text-white">{billingPeriod}</strong> Diverge bill.
              </p>
              <p className="text-white/80">Selected method: <strong className="text-white">{paymentMethods.find((method) => method.value === paymentMethod)?.label}</strong></p>
              <p className="text-amber-200/80">No third-party provider is contacted and no funds are moved.</p>
            </div>
            <DialogFooter className="grid grid-cols-2 gap-3 border-0 bg-transparent px-5 pb-5 sm:flex-row sm:justify-between sm:px-6 sm:pb-6">
              <Button variant="outline" className="h-9 rounded-[2vw] border-[#DE0961]/40 bg-[#DE0961]/15 font-ubuntu-mono text-[#DE0961] shadow-glassy-jeri hover-glass-rim hover:bg-[#DE0961]/35" onClick={closeModal}>Cancel</Button>
              <Button className="h-9 rounded-md border border-white/10 bg-[#3ACF98]/15 font-ubuntu-mono text-[#3ACF98] shadow-glassy-jeri hover-glass-rim hover:bg-[#3ACF98]/35" onClick={confirmPayment}>Record Demo Settlement</Button>
            </DialogFooter>
          </>
        )}

        {step === "success" && (
          <>
            <DialogHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
              <DialogTitle className="flex items-center gap-2 font-ubuntu-mono text-sm font-medium text-[#3ACF98]">
                Demo settlement recorded <Check aria-hidden="true" className="size-4" />
              </DialogTitle>
              <DialogDescription className="sr-only">payment has been completed.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 px-5 py-2 font-ubuntu-mono text-xs sm:px-6">
              <p className="text-[#3ACF98]">Invoice {invoiceId} was marked settled in the internal demo ledger.</p>
              <dl className="space-y-1 text-white/85">
                <div className="flex flex-wrap gap-2"><dt className="text-white/55">Reference:</dt><dd>{paymentReference}</dd></div>
                <div className="flex flex-wrap gap-2"><dt className="text-white/55">Date:</dt><dd>{new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</dd></div>
              </dl>
              <p className="text-xs text-amber-200/80">No funds were moved. This is not a receipt for an external payment.</p>
            </div>
            <DialogFooter className="border-0 bg-transparent px-5 pb-5 sm:px-6 sm:pb-6">
              <Button className="h-9 rounded-[2vw] border border-white/10 bg-[#3ACF98]/15 font-ubuntu-mono text-[#3ACF98] shadow-glassy-jeri hover-glass-rim" onClick={closeModal}>Done</Button>
            </DialogFooter>
          </>
        )}

        {step === "error" && (
          <>
            <DialogHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
              <DialogTitle className="text-sm font-medium text-[#DE0961]">Payment unavailable</DialogTitle>
              <DialogDescription>{errorMessage}</DialogDescription>
            </DialogHeader>
            <DialogFooter className="border-0 bg-transparent px-5 pb-5 sm:px-6 sm:pb-6">
              <Button variant="outline" className="h-9 border-white/15 bg-white/5 text-white" onClick={closeModal}>Close</Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default PayNowModal