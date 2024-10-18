'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { games_info } from "@/public/data/games_info";
import { SideBarHeader, SideBarContent, Sidebar } from '../components/store/Sidebar';
import Cart from "../components/store/Cart";
import AddProgramme from "../components/store/AddProgramme";
import EditSession from '../components/store/EditSession';

export default function Programmes() {
  const user = {
    name: "Harrison Chong",
    dpSrc: "User.png"
  };

  const sessions = [
    {
      sessionName: "Class 3A",
      sessionTime: "11:00AM",
      sessionDate: "29 November 2025",
      studentsNum: 30,
      games: [
        {
          gameId: 0,
          connections: 10
        },
        {
          gameId: 1,
          connections: 30
        },
        {
          gameId: 2,
          connections: 3
        },
        {
          gameId: 3,
          connections: 4
        },
        {
          gameId: 4,
          connections: 5
        },
        {
          gameId: 5,
          connections: 6
        }
      ]
    },
    {
      sessionName: "Class 3A",
      sessionTime: "10:00AM",
      sessionDate: "15 May 2024",
      studentsNum: 19,
      games: [
        {
          gameId: 0,
          connections: 10
        },
        {
          gameId: 1,
          connections: 30
        },
        {
          gameId: 4,
          connections: 5
        },
        {
          gameId: 5,
          connections: 6
        }
      ]
    }
  ];

  const [cart, setCart] = useState([]);
  const [viewPast, setViewPast] = useState(false);
  const [displaySessions, setDisplaySessions] = useState([]);
  const router = useRouter();

  useEffect((() => {
    const today = new Date();
    setDisplaySessions(sessions.reduce(function(result, session) {
      const sessionDate = new Date(session.sessionDate);
      if (sessionDate >= today || (sessionDate < today && viewPast)) {
        return result.concat(session);
      }
      return result;
    }, []));
  }), [viewPast]);

  function togglePastSessions() {
    setViewPast(!viewPast);
  }

  function getWeekday(sessionDate) {
    const weekday = new Date(sessionDate).getDay();
    if(weekday == 1) return "Monday";
    else if(weekday == 2) return "Tuesday";
    else if(weekday == 3) return "Wednesday";
    else if(weekday == 4) return "Thursday";
    else if(weekday == 5) return "Friday";
    else if(weekday == 6) return "Saturday";
    else if(weekday == 0) return "Sunday";
    else return "";
  }

  const RelevantLinkItem = (props) => {
    const { index, link } = props;
    return(
      <>
        {index > 0 && <p className="text-white/80 text-sm pr-1.5">,</p>}
        <Link href={link} className='text-white/80 text-sm underline underline-offset-4'>{link.trim()}</Link>
      </>
    )
  }

  return (
    <div className="flex bg-gradient-to-r from-light-violet to-extra-light-violet min-h-screen items-stretch">
      {/* <StoreNavbar username={"User"}/> */}
      <div className='hidden lg:flex w-2/5 max-w-80 flex-col space-y-2 justify-between border-r border-black bg-extra-light-violet'>
        <SideBarHeader/>
        <SideBarContent />
      </div>
      
      <main className="w-full lg:w-4/5 pt-4 flex flex-col">
        {/* Programmes */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <div className='flex items-center'>
            <Sidebar />
            <h2 className='pl-5 lg:pl-0 text-3xl text-dark-green font-bold'>Programmes</h2>
          </div>
          <div className="flex max-w-80 space-x-5 items-center">
            <div className="flex items-center">
              <p className="font-bold text-sm text-dark-green text-right leading-tight">{user.name}</p>
            </div>
            <div className="rounded-full w-10 overflow-hidden flex items-center">
              <Image alt="User Icon" className='' src={`/images/Store/${user.dpSrc}`} width={80} height={80}></Image>
            </div>
            <Cart cart={cart} />
          </div>
        </section>

        {/* My Programme */}
        <section className="max-w-4xl px-8 py-4 flex justify-between">
          <h2 className='text-3xl text-white'>My Programme</h2>
          <AddProgramme></AddProgramme>
        </section>

        {/* Upcoming Programme */}
        <section className="max-w-4xl px-8 pb-4 grow flex flex-col">
          <CardDescription className='mb-2 text-dark-grey font-semibold'>{viewPast ? "All" : "Upcoming"} :</CardDescription>
          {displaySessions.length == 0 ? (
            <div className='w-full grow flex justify-center items-center text-center'>
              <p className="max-w-56 text-white -mt-10">
                <span>You do not have any upcoming sessions.</span>
                <Button variant="ghost" className="underline underline-offset-4 text-white hover:bg-transparent hover:text-white" onClick={() => togglePastSessions()}>{viewPast ? "Hide" : "Check"} Past Sessions</Button>
              </p>
            </div>
          ) : (
            <div className='w-full grow flex flex-wrap space-y-4 justify-center items-center text-center'>
              {displaySessions.map((session, session_index) => {
                return (
                  <Card key={"session_"+session_index} className={(new Date(session.sessionDate) < new Date() ? "bg-violet/70 " : "bg-dark-violet ") + 'w-full rounded-md p-4 border-0'}>
                    {/* Session Details */}
                    <CardHeader className="space-y-2 sm:flex-row sm:space-y-0 justify-between items-stretch p-0 mb-4">
                      <CardContent className="grow p-0">
                        <div className='flex space-x-2'>
                          <CardTitle className="text-white text-md">Session {session_index+1}:</CardTitle>
                          <CardDescription className="text-white text-md text-left">{session.sessionName}</CardDescription>
                        </div>
                        <div className='flex space-x-2'>
                          <CardTitle className="text-white text-md">Time:</CardTitle>
                          <CardDescription className="text-white text-md text-left">{session.sessionTime}</CardDescription>
                        </div>
                        <div className='flex space-x-2'>
                          <CardTitle className="text-white text-md">Date:</CardTitle>
                          <CardDescription className="text-white text-md text-left">{session.sessionDate}, {getWeekday(session.sessionDate)}</CardDescription>
                        </div>
                      </CardContent>
                      <CardContent className="flex space-x-1 bg-violet rounded-md p-4 items-center justify-center">
                        <Image src={`/images/Sessions/StudentsNum.png`} alt="Number of Students Icon" width={13} height={13} />
                        <CardTitle className="text-white text-md">Students:</CardTitle>
                        <CardDescription className="text-white text-md">{session.studentsNum}</CardDescription>
                      </CardContent>
                    </CardHeader>

                    {/* Games */}
                    <CardContent className="bg-violet rounded-md p-3 mb-4">
                      <CardTitle className="text-white text-md text-left pl-1">Chosen Offerings & No. Of Connections</CardTitle>
                      <div className='flex pt-1 flex-wrap'>
                        {session.games.map((game, game_index) => {
                          return (
                            <div key={"session_"+session_index+"_game_"+game_index} className='w-1/2 sm:w-1/3 md:w-1/5 mb-4'>
                              <div className='bg-dark-violet rounded-md mx-1 my-1 min-h-20 flex justify-center items-center relative'>
                                <CardTitle className="uppercase text-white text-xs">{games_info[game.gameId].title}</CardTitle>
                                <div className='border border-white bg-violet rounded-md text-white text-sm justify-center items-center flex space-x-1 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 min-w-12'>
                                  <span className=''>{game.connections}</span>
                                  <Image src={`/images/Sessions/Connections.png`} alt="Connections Icon" width={16} height={16} className='max-w-none' />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>

                    {/* Relevant Links */}
                    <CardContent className="bg-violet rounded-md p-3">
                      <CardTitle className="text-white text-md text-left pl-1">Relevant Links</CardTitle>
                      {session.games.map((game, g_index) => {
                        if(games_info[game.gameId].links.length > 0) {
                          return (
                            <div key={"session_"+session_index+"_relevant_"+g_index} className='w-full my-2 ml-1 flex flex-wrap'>
                              <CardDescription className="text-white/80 text-sm mr-2 font-bold">{games_info[game.gameId].title}:</CardDescription>
                              {games_info[game.gameId].links.map((link, l_index) => {
                                return (
                                  <RelevantLinkItem key={"session_"+session_index+"_relevant_"+g_index+"_relevant_"+l_index} index={l_index} link={link} />
                                );
                              })}
                            </div>
                          );
                        }
                      })}
                    </CardContent>
                    {
                      new Date(session.sessionDate) < new Date() ? (
                        <></>
                      ) : (
                        <CardContent className="flex items-center justify-end space-x-4 pr-0 pt-6 pb-2">
                          <EditSession data={session}></EditSession>
                          <Button variant="destructive">Delete Session</Button>
                        </CardContent>
                      )
                    }
                  </Card>
                );
              })}
              <Button variant="ghost" className="underline underline-offset-4 text-white hover:bg-transparent hover:text-white" onClick={() => togglePastSessions()}>{viewPast ? "Hide" : "Check"} Past Sessions</Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
