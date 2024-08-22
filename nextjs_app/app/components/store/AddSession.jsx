'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { sessionSchema } from '@/schema';

const AddSession = (props) => {
  const { toast } = useToast();
  const [cart, setCart] = useState();
  const [connections, setConnections] = useState([]);

  const purchases = [
    {
        game: "Supermarket Scramble",
        imgSrc: "SupermarketScramble.png",
        connections: 30,
    },
    {
        game: "Balance the Bistro",
        imgSrc: "BalanceTheBistro.png",
        connections: 130,
    },
    {
        game: "Runway",
        imgSrc: "Runway.png",
        connections: 15,
    },
    {
        game: "RecycleMe",
        imgSrc: "RecycleMe.png",
        connections: 93,
    },
    {
        game: "RecycleMe",
        imgSrc: "RecycleMe.png",
        connections: 93,
    },
    {
        game: "RecycleMe",
        imgSrc: "RecycleMe.png",
        connections: 93,
    },
    {
        game: "RecycleMe",
        imgSrc: "RecycleMe.png",
        connections: 93,
    }
  ];

  // useEffect(() => {
  //   items.forEach((item) => {
  //     setConnections([...connections, item.connections]);
  //   });
  // }, [items]);

  // function addConnection(gameIndex) {
  //   setConnections(connections.map((connect, index) => {
  //     if (index === gameIndex) {
  //       return connect+1;
  //     } else {
  //       return connect;
  //     }
  //   }));
  // }

  // function minusConnection(gameIndex) {
  //   setConnections(connections.map((connect, index) => {
  //     if (index === gameIndex) {
  //       return connect-1;
  //     } else {
  //       return connect;
  //     }
  //   }));
  // }

  const form = useForm({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      sessionName: '',
      sessionDate: '',
      sessionTime: '',
      studentsNum: 0,
    },
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error);
        throw new Error(errorData.error || 'Failed to create session');
      }
      toast.success('Session created successfully');
      router.push("/programmes")
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className='relative hover:bg-transparent p-0'>
        <button className='text-white relative p-0'>Add a Session +<span className='absolute h-px w-full bg-white bottom-0 right-0'></span></button>
      </DialogTrigger>

      <DialogContent className="bg-violet border-0 text-white max-w-[900px] max-h-screen overflow-y-auto flex flex-col items-stretch">
        <DialogHeader className="mt-3">
          <DialogTitle className="text-2xl">Add a Session</DialogTitle>
        </DialogHeader>

        <section className='flex flex-col space-x-5 md:flex-row justify-center mb-2'>
          <Card className="bg-transparent border-0 shadow-none grow">
            <CardHeader className="p-0 m-0 mb-3">
              <CardTitle className="text-lg text-white">Enter Sessions Details</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-3 mt-2 p-0">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3 pt-3 w-full justify-center flex flex-col">
                    <FormField
                      control={form.control}
                      name="sessionName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} placeholder="Session Name*" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="sessionDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal justify-start",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Session Date*</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date < new Date()
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="sessionTime"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            // onValueChange={selectAccountType}
                            // defaultValue={accountType}
                            // value={accountType}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Session Time*" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Institution" className="cursor-pointer">Institution</SelectItem>
                              <SelectItem value="Organisation" className="cursor-pointer">Organisation</SelectItem>
                              <SelectItem value="Individual" className="cursor-pointer">Individual</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="studentsNum"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} type="number" placeholder="Number of Student*" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-0 shadow-none">
            <CardHeader className="p-0 m-0 mb-3">
              <CardTitle className="text-lg text-white">Add Your Purchased Products</CardTitle>
            </CardHeader>
            <Table>
              <TableHeader className="bg-white">
                <TableHead className="text-black">
                  Game Name
                </TableHead>
                <TableHead className="text-black text-center">
                  Remaining Connections
                </TableHead>
                <TableHead className="text-white text-center bg-blue-200">
                  Session Connections
                </TableHead>
              </TableHeader>
              <TableBody className="bg-white">
                {purchases.map((item, index) => {
                  return (
                    <TableRow className="border-blue-200">
                      <TableCell className="flex items-center space-x-2 py-2">
                        {item.imgSrc && (
                          <Image src={`/images/Homepage/${item.imgSrc}`} alt={item.name + " icon"} width={25} height={25} />
                        )}
                        <span>{item.game}</span>
                      </TableCell>
                      <TableCell className="py-2 items-center text-center font-semibold">
                        {item.connections}
                      </TableCell>
                      <TableCell className="py-2 items-center text-center bg-blue-200">
                        <div className="flex justify-between items-center">
                          {/* <Button variant="ghost" className="w-6 h-6 p-0 mr-2 text-white rounded-full border-2 border-violet hover:border-extra-dark-violet bg-violet/80 hover:bg-violet hover:text-white" onClick={() => minusConnection(index)}>-</Button> */}
                          {/* <span>{connections[index]}</span> */}
                          {/* <Button variant="ghost" className="w-6 h-6 p-0 ml-2 text-white rounded-full border-2 border-violet hover:border-extra-dark-violet bg-violet/80 hover:bg-violet hover:text-white" onClick={() => addConnection(index)}>+</Button> */}
                        </div>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
            <div className='bg-light-violet'>
              <h5 className='p-0 relative inline-block mt-3 mb-2 mx-4 text-sm font-semibold'>
                Session Summary
                <span className='h-px bg-black w-full absolute bottom-0 right-0'></span>
              </h5>
              <Table>
                <TableHeader className="bg-light-violet">
                  <TableHead className="text-black h-auto py-1.5">
                    Game Name
                  </TableHead>
                  <TableHead className="text-black text-center h-auto py-1.5">
                    Session Connections
                  </TableHead>
                </TableHeader>
                <TableBody>
                  {purchases.map((item, index) => {
                    const style = (index%2==0 ? "h-auto border-0 bg-extra-light-violet" : "h-auto border-0")
                    return (
                      <TableRow className={style}>
                        <TableCell className="py-1">
                          {index+1}. {item.game}
                        </TableCell>
                        <TableCell className="py-1 items-center text-center">
                          {item.connections}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        <Button className="bg-dark-violet hover:bg-extra-dark-violet border border-white px-10 self-center">Confirm Session</Button>
      </DialogContent>
    </Dialog>
  );
}

export default AddSession;
