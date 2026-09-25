
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"


function EditPlan() {
  return (
    <Dialog >
      <form>
        <DialogTrigger className='px-2 w-full py-0 rounded-4xl bg-blue-900/30 mr-5 h-10 shadow-glassy-jeri cursor-pointer'>Edit</DialogTrigger>
        <DialogContent className="sm:max-w-xl bg-[#121212] ring-0 text-white shadow-glassy-jeri">
          <DialogHeader>
            <DialogTitle>Edit Plan</DialogTitle>
            <DialogDescription className="opacity-20">
              Create your profile plan. Click save when you&apos;re
              done.
            </DialogDescription>
            <Separator className="bg-white/20 mb-0" />
            <h1 className="opacity-20">{"SPEED & TECHINICAL"}</h1>
          </DialogHeader>
          <FieldGroup>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 gap-x-20">
              <Field>
                <Label htmlFor="plan_name" className="font-ubuntu-mono font-thin">PLAN NAME</Label>
                <Input id="plan_name" name="name"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>
              <Field>
                <Label htmlFor="plan_name" className="font-ubuntu-mono font-thin">TYPE</Label>
                <Input id="plan_type" name="type"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>
              <Field>
                <Label htmlFor="plan_price" className="font-ubuntu-mono font-thin">{"MONTLY PRICE (₱)"}</Label>
                <Input id="plan_price" name="price"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>
              <Field>
                <Label htmlFor="plan_status" className="font-ubuntu-mono font-thin">STATUS</Label>
                <Input id="plan_status" name="name"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>

            </div>
            <Field>
              <Label htmlFor="plan_desc" className="font-ubuntu-mono font-thin">DESCRIPTION</Label>
              <Input id="plan_desc" name="desc"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
            </Field>
          </FieldGroup>
          <Separator className="bg-white/20 mb-0" />
          <h1 className="opacity-20">{"SPEED & TECHINICAL"}</h1>
          <FieldGroup>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 gap-x-20">
              <Field>
                <Label htmlFor="plan_ds" className="font-ubuntu-mono font-thin">{"DOWNLOAD SPEED (MBPS)"}</Label>
                <Input id="plan_ds" name="ds"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>
              <Field>
                <Label htmlFor="plan_us" className="font-ubuntu-mono font-thin">{"UPLOAD SPEED (MBPS)"}</Label>
                <Input id="plan_us" name="us"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>
              <Field>
                <Label htmlFor="plan_sla" className="font-ubuntu-mono font-thin">SLA UPTIME</Label>
                <Input id="plan_sla" name="sla"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>
              <Field>
                <Label htmlFor="plan_name" className="font-ubuntu-mono font-thin">{"CONTRACT (MONTHS)"}</Label>
                <Input id="plan_months" name="months"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
              </Field>

            </div>
          </FieldGroup>
          <Separator className="bg-white/20 mb-0" />
          <h1 className="opacity-20">FEATURES</h1>

          <FieldGroup>
            <Field>
              <Label htmlFor="plan_features" className="font-ubuntu-mono font-thin">ONE FEATURE PER LINE</Label>
              <Textarea id="plan_features" name="features"  className="focus-visible:ring-pink-900 border-none bg-neutral-700" />
            </Field>

          </FieldGroup>

          <DialogFooter className="border-none grid grid-cols-2 gap-x-20 ">
            <DialogClose render={<Button className="cursor-pointer bg-rose-400/30 rounded-4xl shadow-glassy-jeri">Cancel</Button>} />
            <Button type="submit"className="cursor-pointer bg-emerald-500/20 rounded-4xl shadow-glassy-jeri">Save Plan</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>



  )

}
export default EditPlan
