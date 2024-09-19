'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import CheckoutConfirmation from "./CheckoutConfirmation";

const Cart = (props) => {
  let { cart, setCart, cartOpen, setCartOpen } = props;
  const { toast } = useToast();
  const [connections, setConnections] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  let cartTotal = 0;
  cart.forEach((item, index) => {
    cartTotal += item.price * connections[index];
  });

  useEffect(() => {
    let array = [];
    cart.forEach((item) => {
      array.push(item.connections);
    });
    setConnections(array);
  }, [cart]);

  useEffect(() => {
    cartTotal = 0;
    cart.forEach((item) => {
      cartTotal += item.price * item.connections;
    });
  }, [connections]);
  
  function addConnection(gameIndex) {
    setConnections(connections.map((connect, index) => {
      if (index === gameIndex) {
        return connect+1;
      } else {
        return connect;
      }
    }));
  }

  function minusConnection(gameIndex) {
    setConnections(connections.map((connect, index) => {
      if (index === gameIndex) {
        return connect-1;
      } else {
        return connect;
      }
    }));
  }

  function removeFromCart(itemIndex) {
    setCart(cart => cart.filter((item, index) => index !== itemIndex));
  }

  function applyCoupon() {
    if(coupon == "discount") {
      setDiscount(10);

      return toast({
        title: `Discount applied!`,
      });
    }
    else {
      return toast({
        title: `Please enter a valid discount code.`,
      });
    }
  }

  return (
    <Dialog open={cartOpen} onOpenChange={setCartOpen}>
      <DialogTrigger className='relative hover:bg-transparent p-0'>
        <Image alt="Shopping Cart" className='' src={"/images/Store/Cart.png"} width={40} height={30}></Image>
        <span className='absolute top-0 right-0 px-0.5 min-w-5 h-5 leading-[20px] bg-dark-violet rounded-full text-white text-xs text-center'>{cart.length}</span>
      </DialogTrigger>

      <DialogContent className="bg-dull-violet border-0 text-white max-w-[768px] max-h-screen overflow-y-auto">
        <DialogHeader className="mt-3">
          <DialogTitle className="text-2xl">My Program</DialogTitle>
        </DialogHeader>
        <Table className='bg-white rounded-md w-full'>
          <TableHeader className="table-fixed table w-full">
            <TableRow className="leading-tight">
              <TableHead className="py-2 text-extra-dark-violet text-center pl-4 pr-2 w-10">No</TableHead>
              <TableHead className="py-2 text-extra-dark-violet px-2">Game Name</TableHead>
              <TableHead className="py-2 text-extra-dark-violet text-center px-0 w-36">No. of Connections</TableHead>
              <TableHead className="py-2 text-extra-dark-violet text-right px-2 w-24">Unit Price</TableHead>
              <TableHead className="py-2 text-extra-dark-violet text-right px-2 w-28">Sub Total</TableHead>
              <TableHead className="py-2 text-extra-dark-violet text-center px-2 w-20">Quick Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="block max-h-60 min-h-20 overflow-y-auto w-full">
            {cart.length == 0 && (
              <TableRow className="hover:bg-transparent">
                <TableCell className="text-stone">Your cart is empty.</TableCell>
              </TableRow>
            )}
            {cart.map((item, index) => (
              <TableRow key={index} className="table-fixed table w-full hover:bg-violet/10 text-extra-dark-violet">
                <TableCell className="font-medium text-center w-10 py-2 pl-4 pr-2">{index+1}</TableCell>
                <TableCell className="py-2 px-2">
                  <div className="flex space-x-2">
                    {item.imgSrc && <Image src={`/images/Games/${item.imgSrc}`} alt={item.name + " icon"} width={25} height={25} />}
                    <span className='truncate'>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="py-2 px-0 w-36">
                  <div className="flex justify-between items-center">
                    <Button variant="ghost" className="w-6 h-6 p-0 mr-2 text-white rounded-full border-2 border-violet hover:border-extra-dark-violet bg-violet/80 hover:bg-violet hover:text-white" onClick={() => minusConnection(index)}>-</Button>
                    <span>{connections[index]}</span>
                    <Button variant="ghost" className="w-6 h-6 p-0 ml-2 text-white rounded-full border-2 border-violet hover:border-extra-dark-violet bg-violet/80 hover:bg-violet hover:text-white" onClick={() => addConnection(index)}>+</Button>
                  </div>
                </TableCell>
                <TableCell className="text-right py-2 px-2 w-24">${item.price} SGD</TableCell>
                <TableCell className="text-right py-2 px-2 w-28">${item.price * connections[index]} SGD</TableCell>
                <TableCell className="text-center py-2 px-2 w-20">
                  <Button variant="ghost" className="hover:bg-white/20" onClick={() => removeFromCart(index)}>
                    <Image src={`/images/Cart/Delete.png`} alt={"Delete item icon"} width={20} height={25} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="table-fixed table w-full bg-extra-dark-violet/30">
            <TableRow className="hover:bg-light-violet/50">
              <TableCell colSpan={5} className="text-right text-extra-dark-violet">Grand Total:</TableCell>
              <TableCell className="text-right text-extra-dark-violet">${cartTotal} SGD</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <section className='flex justify-between mt-3 mb-8'>
          <div className='flex space-x-3'>
            <Input placeholder="Coupon code*" className="bg-white text-extra-dark-violet placeholder:text-extra-dark-violet/80 w-48" onChange={(e) => setCoupon(e.target.value)}></Input>
            <Button className="bg-dull-violet border-white border hover:bg-white/5" onClick={() => applyCoupon()}>Apply</Button>
          </div>
          <Table>
            <TableBody>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="p-0 text-right">Discount:</TableCell>
                <TableCell className="p-0 text-right w-40">${discount} SGD</TableCell>
              </TableRow>
              <TableRow className="border-none hover:bg-transparent">
                <TableCell className="p-0 text-right font-bold">Final Total:</TableCell>
                <TableCell className="p-0 text-right font-bold w-40">${(cartTotal - discount) > 0 ? cartTotal - discount : 0} SGD</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <DialogHeader>
          <DialogTitle>Frequently Bought Together</DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-4 gap-2 bg-violet p-2 rounded-sm text-dark-violet text-sm'>
          <div className='bg-beige rounded-sm py-9 text-center'>Game here</div>
          <div className='bg-beige rounded-sm py-9 text-center'>Game here</div>
          <div className='bg-beige rounded-sm py-9 text-center'>Game here</div>
          <div className='bg-beige rounded-sm py-9 text-center'>Game here</div>
        </div>
        
        <CheckoutConfirmation />
      </DialogContent>
    </Dialog>
  );
}

export default Cart;
