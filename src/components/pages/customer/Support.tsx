import { useState } from 'react'
import { Button } from '../../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import {
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'

const supportPhone = '+63 2 8888 1234'
const supportEmail = 'support@diverge.com'

const faqItems = [
  {
    question: 'How do I restart my modem/router?',
    answer:
      'Unplug your modem or router from power for 30 seconds, then reconnect it. Allow 2-3 minutes for the connection lights to stabilize before testing your internet again.',
  },
  {
    question: 'How can I view my current bill?',
    answer:
      'Open Billing from your account menu to see your current charges, payment due date, and recent payment history.',
  },
  {
    question: 'What payment methods are available?',
    answer:
      'You can pay using the methods listed on your Billing page, including available e-wallet and bank transfer options.',
  },
   {
    question: 'What should I do if I have no internet connection?',
    answer:
      'First, check if your modem or router is powered on and if the lights are functioning correctly. If the issue persists, try restarting your devices.',
  },
   {
    question: 'Why is my internet connection slow?',
    answer:
      'Your internet speed may be affected by several factors, including the number of devices connected to your network, the distance from your router, and the plan you have subscribed to.',
  },
   {
    question: 'How can I pay my internet bill?',
    answer:
      'Click Pay Now on your billing page and select your preferred payment method. Follow the instructions to complete the payment.',
  },
   {
    question: 'How long does it take for my payment to reflect?',
    answer:
      'Most online payments are reflected shortly after successful processing. If your payment does not appear after the expected processing period, contact support.',
  },
]

function Support() {
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(supportPhone)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `tel:${supportPhone.replaceAll(' ', '')}`
    }
  }

  return (
    <main className="w-full min-w-0 px-4 py-5 text-left font-ubuntu text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col">

        <section aria-labelledby="support-title">
          <div className="mb-4 px-1">
            <h1 id="support-title" className="text-xl font-medium tracking-wide sm:text-2xl">
              Contact Support
            </h1>
            <p className="mt-1 font-ubuntu-mono text-s text-white/60">We're here to help!</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="gap-3 rounded-lg border-white/10 bg-white/5 py-4 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:gap-4 sm:py-5">
              <CardContent className="flex min-h-40 flex-col items-center justify-center px-5 py-4 text-center">
                <MessageCircle className="mb-2 h-9 w-9 text-[#3ACF98]" strokeWidth={1.8} />
                <h2 className="text-lg font-medium">Live Chat</h2>
                <p className="font-ubuntu-mono text-xs text-white/65">Chat with a support agent now</p>
                <Button
                  type="button"
                  className="mt-4 min-w-28 rounded-lg border border-[#DE0961]/40 bg-[#DE0961]/15 font-ubuntu-mono text-xs font-normal text-white shadow-glassy-jeri transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DE0961]/60 hover:bg-[#DE0961]/35 hover:text-white hover:shadow-[0_0_12px_rgba(222,9,97,0.2)] active:translate-y-0"
                  onClick={() => { window.location.href = `mailto:${supportEmail}?subject=Live%20Chat%20Request` }}
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="gap-3 rounded-lg border-white/10 bg-white/5 py-4 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:gap-4 sm:py-5">
              <CardContent className="flex min-h-40 flex-col items-center justify-center px-5 py-4 text-center">
                <Phone className="mb-2 h-9 w-9 fill-[#3ACF98] text-[#3ACF98]" strokeWidth={1.8} />
                <h2 className="text-lg font-medium">Call Us</h2>
                <p className="font-ubuntu-mono text-xs text-white/65">{supportPhone}</p>
                <Button
                  type="button"
                  className="mt-4 min-w-28 rounded-lg border border-[#DE0961]/40 bg-[#DE0961]/15 font-ubuntu-mono text-xs font-normal text-white shadow-glassy-jeri transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DE0961]/60 hover:bg-[#DE0961]/35 hover:text-white hover:shadow-[0_0_12px_rgba(222,9,97,0.2)] active:translate-y-0"
                  onClick={copyPhoneNumber}
                >
                  {copied ? 'Copied!' : 'Copy Number'}
                </Button>
              </CardContent>
            </Card>

            <Card className="gap-3 rounded-lg border-white/10 bg-white/5 py-4 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79] sm:gap-4 sm:py-5">
              <CardContent className="flex min-h-40 flex-col items-center justify-center px-5 py-4 text-center">
                <Mail className="mb-2 h-9 w-9 text-[#3ACF98]" strokeWidth={1.8} />
                <h2 className="text-lg font-medium">Email</h2>
                <p className="font-ubuntu-mono text-xs text-white/65">{supportEmail}</p>
                <Button
                  type="button"
                  className="mt-4 min-w-28 rounded-lg border border-[#DE0961]/40 bg-[#DE0961]/15 font-ubuntu-mono text-xs font-normal text-white shadow-glassy-jeri transition-all duration-200 hover:-translate-y-0.5 hover:border-[#DE0961]/60 hover:bg-[#DE0961]/35 hover:text-white hover:shadow-[0_0_12px_rgba(222,9,97,0.2)] active:translate-y-0"
                  onClick={() => { window.location.href = `mailto:${supportEmail}` }}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          aria-labelledby="faq-title"
          className="mt-4"
        >
          <Card className="gap-0 overflow-hidden rounded-lg border-white/10 bg-white/5 py-0 text-white shadow-glassy-jeri ring-0 [--glassy-color:79_79_79]">
            <CardHeader className="border-b border-white/15 px-4 py-3 sm:px-5">
              <CardTitle id="faq-title" className="font-ubuntu-mono text-sm font-medium uppercase tracking-[0.1em] text-white/65">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 px-3 py-3 sm:px-4">
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] shadow-glassy-jeri transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left font-ubuntu-mono text-sm outline-none transition-colors duration-200 hover:text-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70 sm:px-4"
                    aria-expanded={openFaq === item.question}
                    onClick={() => setOpenFaq((current) => current === item.question ? null : item.question)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-white/50 transition-transform duration-300 ease-in-out ${openFaq === item.question ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    aria-hidden={openFaq !== item.question}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openFaq === item.question ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="border-t border-white/10 px-3 py-3 font-ubuntu-mono text-xs leading-5 text-white sm:px-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

export default Support
