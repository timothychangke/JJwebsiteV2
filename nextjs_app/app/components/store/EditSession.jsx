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
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { sessionSchema } from '@/schema';
import { games_info } from "@/public/data/games_info";

const EditSession = (props) => {
  const { data } = props;
  const [connections, setConnections] = useState([]);
  const [sessionTime, setSessionTime] = useState("10:00AM");
  
  const form = useForm({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      sessionName: data.sessionName,
      sessionDate: data.sessionDate,
      sessionTime: data.sessionTime,
      studentsNum: data.studentsNum,
    },
  });

  let inventory = [
    {
      gameId: 2,
      connections: 30,
    },
    {
      gameId: 3,
      connections: 130,
    },
    {
      gameId: 0,
      connections: 15,
    },
    {
      gameId: 1,
      connections: 93,
    },
    {
      gameId: 4,
      connections: 40,
    },
    {
      gameId: 5,
      connections: 20,
    }
  ];

  useEffect(() => {
    let array = [];
    inventory.forEach((item) => {
      let found = false;
      data.games.forEach((game) => {
        if(game.gameId == item.gameId) {
          array.push(game.connections);
          found = true;
        }
      });
      if(!found) array.push(0);
    });
    setConnections(array);
  }, []);

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
      if (index === gameIndex && connect>0) {
        return connect-1;
      } else {
        return connect;
      }
    }));
  }
  
  const selectSessionTime = (value) => {
    setSessionTime(value);
  }
  
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
        throw new Error(errorData.error || 'Failed to save session');
      }
      toast.success('Session saved successfully');
      router.push("/programmes")
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className='bg-transparent border rounded-lg border-white hover:border-white hover:bg-extra-dark-violet/80 text-white py-2 px-4'>
        Edit
      </DialogTrigger>

      <DialogContent className="bg-violet border-0 text-white max-w-[900px] max-h-screen overflow-y-auto flex flex-col items-stretch">
        <DialogHeader className="mt-3">
          <DialogTitle className="text-2xl">Edit Session</DialogTitle>
        </DialogHeader>

        {/* Enter Sessions Details */}
        <section className='flex flex-col space-x-0 space-y-5 md:space-x-5 md:space-y-0 md:flex-row justify-center mb-2'>
          <Card className="bg-transparent border-0 shadow-none grow">
            <CardHeader className="p-0 m-0 mb-3">
              <CardTitle className="text-lg text-white">Sessions Details</CardTitle>
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
                            onValueChange={selectSessionTime}
                            defaultValue={sessionTime}
                            value={sessionTime}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Session Time*" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="10:00AM" className="cursor-pointer">10:00AM-11:00AM</SelectItem>
                              <SelectItem value="11:00AM" className="cursor-pointer">11:00AM-12:00PM</SelectItem>
                              <SelectItem value="12:00PM" className="cursor-pointer">12:00PM-01:00PM</SelectItem>
                              <SelectItem value="01:00PM" className="cursor-pointer">01:00PM-02:00PM</SelectItem>
                              <SelectItem value="02:00PM" className="cursor-pointer">02:00PM-03:00PM</SelectItem>
                              <SelectItem value="03:00PM" className="cursor-pointer">03:00PM-04:00PM</SelectItem>
                              <SelectItem value="04:00PM" className="cursor-pointer">04:00PM-05:00PM</SelectItem>
                              <SelectItem value="05:00PM" className="cursor-pointer">05:00PM-06:00PM</SelectItem>
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
          
          {/* Add Purchased Products */}
          <Card className="bg-transparent border-0 shadow-none">
            <CardHeader className="p-0 m-0 mb-3">
              <CardTitle className="text-lg text-white">Edit Products Connections</CardTitle>
            </CardHeader>
            <div className="rounded-t-sm border-x border-t">
              <Table>
                <TableHeader className="bg-white">
                  <TableRow className="border-none">
                    <TableHead className="text-xs text-black/70 h-10">
                      Game Name
                    </TableHead>
                    <TableHead className="text-xs text-black/70 text-center h-10">
                      Remaining Connections
                    </TableHead>
                    <TableHead className="text-xs text-white text-center h-10 bg-dull-blue hover:bg-dull-blue/90">
                      Session Connections
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white">
                  {inventory.map((item, index) => {
                    return (
                      <TableRow className="border-dull-blue" key={index}>
                        <TableCell className="flex items-center space-x-2 py-2">
                          {games_info[item.gameId].imgSrc && (
                            <Image src={`/images/Games/${games_info[item.gameId].imgSrc}`} alt={item.name + " icon"} width={25} height={25} />
                          )}
                          <span>{games_info[item.gameId].title}</span>
                        </TableCell>
                        <TableCell className="py-2 items-center text-center font-semibold">
                          {item.connections - connections[index]}
                        </TableCell>
                        <TableCell className="py-2 items-center text-center bg-dull-blue hover:bg-dull-blue/90">
                          <div className="flex justify-between items-center">
                            <Button variant="ghost" className="w-6 h-6 p-0 mr-2 text-white rounded-full border-2 border-slate-800 hover:border-slate-900 bg-slate-800/80 hover:bg-slate-800 hover:text-white" onClick={() => minusConnection(index)}>-</Button>
                            <span className='text-black'>{connections[index]}</span>
                            <Button variant="ghost" className="w-6 h-6 p-0 ml-2 text-white rounded-full border-2 border-slate-800 hover:border-slate-900 bg-slate-800/80 hover:bg-slate-800 hover:text-white" onClick={() => addConnection(index)}>+</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
            <div className='bg-light-violet border-x'>
              <h5 className='p-0 relative inline-block mt-3 mb-1 mx-4 text-sm text-black/70 font-semibold'>
                Session Summary
              </h5>
            </div>
            <div className="bg-light-violet rounded-b-md border-x border-b">
              <Table>
                <TableHeader className="bg-light-violet">
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead className="text-xs text-black/70 h-auto pt-1 pb-1">
                      Game Name
                    </TableHead>
                    <TableHead className="text-xs text-black/70 text-center h-auto pt-1 pb-1">
                      Session Connections
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventory.map((item, index) => {
                    let style = "h-auto border-0";
                    style += (index%2==0 ? " bg-extra-light-violet hover:bg-extra-light-violet" : " hover:bg-light-violet");
                    return (
                      <TableRow className={style} key={index}>
                        <TableCell className="py-1">
                          {index+1}. {games_info[item.gameId].title}
                        </TableCell>
                        <TableCell className="py-1 items-center text-center">
                          {connections[index]}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </Card>
        </section>

        <Button className="bg-dark-violet hover:bg-extra-dark-violet border border-white px-10 self-center">Save</Button>
      </DialogContent>
    </Dialog>
  );
}

export default EditSession;
