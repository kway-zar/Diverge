import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { MyAccount as AccountSummary } from '@/components/types/myAccount'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4001'

function MyAccount() {
  const navigate = useNavigate()
  const [account, setAccount] = useState<AccountSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('diverge_token')

    if (!token) {
      navigate('/login')
      return
    }

    async function loadCustomerProfile() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/customers/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          throw new Error('Unable to load customer profile')
        }

        const payload = await response.json()
        const customer = payload?.data

        const nextAccount: AccountSummary = {
          accountID: customer?.accountId ?? customer?.id ?? 'N/A',
          name: customer?.name ?? 'Customer',
          location: customer?.area ?? 'Unknown location',
          balance: Number(customer?.balance ?? 0),
          currentPlan: customer?.plan?.name ?? 'No plan assigned',
          downloadSpeed: Number(customer?.plan?.speed?.match(/\d+/)?.[0] ?? 0),
          uploadSpeed: Number(customer?.plan?.speed?.match(/\d+/)?.[0] ?? 0) / 2,
          nextBilling: customer?.since ? new Date(customer.since).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }) : 'TBD',
          planType: (customer?.type ? customer.type.charAt(0).toUpperCase() + customer.type.slice(1).toLowerCase() : 'Residential') as AccountSummary['planType'],
          planCost: Number(customer?.plan?.cost ?? 0) / 100,
          planStatus: (customer?.status ? customer.status.charAt(0).toUpperCase() + customer.status.slice(1).toLowerCase() : 'Active') as AccountSummary['planStatus'],
        }

        setAccount(nextAccount)
      } catch (loadError) {
        console.error(loadError)
        setError('Unable to load your profile right now.')
      } finally {
        setLoading(false)
      }
    }

    void loadCustomerProfile()
  }, [navigate])

  if (loading) {
    return <div className="p-8 text-white">Loading your account...</div>
  }

  if (error || !account) {
    return <div className="p-8 text-red-300">{error || 'No customer profile found.'}</div>
  }

  return (
    <div className="text-left w-full flex flex-col gap-4">
      <Card className="flex-1 mr-4 ring-0 shadow-glassy-jeri bg-white/5">
        <CardContent className="w-full flex flex-row ml-4 pb-2">
          <span className="w-full flex flex-row gap-x-5">
            <div className="w-24 h-24 rounded-full bg-white"></div>
            <span className="w-[80%] grid grid-cols-1">
              <p className='opacity-60 tracking-widest font-thin'>Good Evening, </p>
              <h1 className="text-2xl">{account.name}</h1>
              <p className='opacity-60 tracking-widest font-thin'>{"Account No." + account.accountID + "•" + account.location}</p>
            </span>
            <span className='w-50'>
              <span className="font-ubuntu-mono flex flex-row items-center gap-4 text-emerald-500 text-emerald-50">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <p>Connection Active</p>
              </span>
            </span>
          </span>
        </CardContent>
      </Card>
      <span className="flex flex-row max-sm:flex-col max-sm:gap-4">
        <Card className="w-[60%] font-ubuntu-mono mr-4 ring-0 shadow-glassy-jeri bg-white/5 max-sm:w-full max-sm:mr-0">
          <CardHeader className="flex flex-row place-content-between mx-5 text-2xl">
            <p>Current Plan</p>
            <div className='p-2 text-base bg-linear-to-b from-emerald-500/40 from-0% to-emerald-500/10 ring-emerald-500 ring-1 rounded-md px-5 text-emerald-500'>{account.planStatus}</div>
          </CardHeader>
          <CardContent className="ml-5 flex flex-col gap-4">
            <div className="flex flex-row w-full place-content-between">
              <span className="flex flex-col gap-2 text-4xl">
                <h1>{account.currentPlan}</h1>
                <p className='text-base opacity-40'>{account.planType}</p>
              </span>
              <span className="flex flex-col gap-2 text-4xl text-end">
                <h1>₱{account.planCost}</h1>
                <p className='text-base opacity-40'>{"/month"}</p>
              </span>
            </div>
            <div className='grid grid-cols-3 gap-x-4'>

              <div className="flex flex-col font-ubuntu-mono justify-center items-center shadow-glassy-jeri py-2 rounded-2xl bg-zinc-300/20">
                <p className="text-2xl text-emerald-400">{account.downloadSpeed} Mbps</p>
                <p className='text-base opacity-40'>Download</p>
              </div>
              <div className="flex flex-col font-ubuntu-mono justify-center items-center shadow-glassy-jeri py-2 rounded-2xl bg-zinc-300/20">
                <p className="text-2xl text-emerald-400">{account.uploadSpeed} Mbps</p>
                <p className='text-base opacity-40'>Upload</p>
              </div>
              <div className="flex flex-col font-ubuntu-mono justify-center items-center shadow-glassy-jeri py-2 rounded-2xl bg-zinc-300/20">
                <p className="text-2xl text-emerald-400">{account.nextBilling}</p>
                <p className='text-base opacity-40'>Billing</p>
              </div>

            </div>
          </CardContent>
        </Card>
        <Card className="flex-1 mr-4 ring-0 shadow-glassy-jeri bg-white/5 gap-0 max-sm:w-full max-sm:mr-0">
          <CardHeader className='text-2xl font-ubuntu-mono'>Balance</CardHeader>
          <CardContent className="flex flex-col font-ubuntu-mono justify-center items-center">
            <p className='text-base opacity-40'>Outstanding</p>
            <p className="text-5xl">₱{account.balance}</p>
            <p className='text-base text-emerald-400 '>Paid ✓</p>
            <Button className='w-full mx-5 shadow-glassy-jeri rounded-4xl text-xl py-5 cursor-pointer bg-blue-500/20'>Pay Now</Button>

          </CardContent>
        </Card>

      </span>
      <Card className="flex-1 mr-4 ring-0 h-full shadow-glassy-jeri bg-white/5 gap-0">
        <CardHeader className='text-2xl font-ubuntu-mono'>Internet Consumption</CardHeader>
        <CardContent>
          {
            //TODO: add chartsjs??
          }

        </CardContent>
        <CardFooter className="border-none mt-auto opacity-40">
          <p>Avg Consumption: 100Mpbs</p>
        </CardFooter>
      </Card>
    </div>

  )
}

export default MyAccount
