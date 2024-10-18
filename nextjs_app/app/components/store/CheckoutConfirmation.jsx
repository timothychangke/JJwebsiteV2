'use client';
import { Button } from '@/components/ui/button';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';

const CheckoutConfirmation = (props) => {
  const items = props.cart;

  return (
    <Dialog>
      <DialogTrigger className='w-min mx-auto'>
        <Button className="mt-3 bg-dull-violet border-white border hover:bg-white/5 justify-self-center">Checkout</Button>
      </DialogTrigger>

      <DialogContent className="bg-dark-violet border-violet max-w-96">
        <DialogHeader className="space-y-5">
          <DialogTitle className="text-white text-center">Confirm Your Order</DialogTitle>
          <DialogDescription className="text-white text-center max-w-80 mx-auto">Please check and confirm your order details before proceeding to payment</DialogDescription>
          <div className='flex mx-auto space-x-2'>
            <DialogClose asChild>
              <Button variant="destructive" className="border border-white">Back</Button>
            </DialogClose>
            <Button className="bg-dark-green hover:bg-extra-dark-green border border-white">Confirm</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default CheckoutConfirmation;
