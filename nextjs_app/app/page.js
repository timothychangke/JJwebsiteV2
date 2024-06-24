import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SchoolCarouselItem as CarouselItem } from "./components/SchoolCarouselItem";
import { IndieGamesCarouselItem } from "./components/IndieGamesCarouselItem";
import { CommentBlock } from "./components/CommentBlock";
import { TrialForm } from "./components/TrialForm";

export default function Home() {
  return (
  <main className="h-5/6 bg-slate-200">
    <section className='md:flex justify-center items-center p-4'>
      <div className='block md:hidden w-full'>
        <div className='h-96 w-full bg-gray-500'></div>
      </div>
      <div className='md:mt-0 mt-6'>
        <h2 className='text-4xl text-light-green'>Jalan Journey</h2>
        <p className='text-md mt-2 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        <Button className='mt-8 border-violet border-2 rounded-lg bg-transparent text-violet hover:border-dark-violet hover:text-dark-violet hover:bg-transparent'>Continue ➞</Button>
      </div>
      <div className='hidden md:block'>
        <div className='rounded-full ml-10 h-96 w-96 bg-gray-500'></div>
        {/* <Image src="/dummy.jpg" fill></Image> */}
      </div>
    </section>
    <section className='pt-16 md:pt-28'>
      <h2 className='text-3xl text-center'>These schools trust us</h2>
    </section>

    <Tabs defaultValue="primary" className="w-full flex items-center flex-col mt-7 p-4">
      <TabsList className="w-full sm:w-3/4 xl:w-[992px] flex items-center mb-4 bg-transparent">
        <TabsTrigger value="primary" className="block text-white data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-bold">
          <p className='text-lg'>Primary</p>
          <div className='w-24 h-px bg-white mx-auto'></div>
        </TabsTrigger>
        <TabsTrigger value="secondary" className="block text-white data-[state=active]:text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:font-bold">
          <p className='text-lg'>Secondary</p>
          <div className='w-28 h-px bg-white mx-auto'></div>
        </TabsTrigger>
        <TabsTrigger value="jc">JC</TabsTrigger>
        <TabsTrigger value="tertiary">Tertiary</TabsTrigger>
        <TabsTrigger value="international">International</TabsTrigger>
      </TabsList>
      <TabsContent value="primary" className="w-3/4 xl:w-[992px] flex items-center mt-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem 
              title="Primary School Name 1"
              description="Value 1, Value 2, Value 3"
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Primary School Name 2"
              description="Value 1, Value 2, Value 3"
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Primary School Name 3"
              description="Value 1, Value 2, Value 3"
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Primary School Name 4"
              description="Value 1, Value 2, Value 3"
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Primary School Name 5"
              description="Value 1, Value 2, Value 3"
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
          <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
        </Carousel>
      </TabsContent>
      <TabsContent value="secondary" className="w-3/4 xl:w-[992px] flex items-center mt-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem 
              title="Secondary School Name 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Secondary School Name 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Secondary School Name 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Secondary School Name 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Secondary School Name 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
          <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
        </Carousel>
      </TabsContent>
      <TabsContent value="jc" className="w-3/4 xl:w-[992px] flex items-center mt-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem 
              title="JC School Name 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="JC School Name 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="JC School Name 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="JC School Name 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="JC School Name 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
          <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
        </Carousel>
      </TabsContent>
      <TabsContent value="tertiary" className="w-3/4 xl:w-[992px] flex items-center mt-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem 
              title="Tertiary School Name 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Tertiary School Name 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Tertiary School Name 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Tertiary School Name 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="Tertiary School Name 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
          <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
        </Carousel>
      </TabsContent>
      <TabsContent value="international" className="w-3/4 xl:w-[992px] flex items-center mt-0">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem 
              title="International School Name 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="International School Name 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="International School Name 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="International School Name 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
            <CarouselItem 
              title="International School Name 5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              otherinfo="Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit.">
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
          <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
        </Carousel>
      </TabsContent>
    </Tabs>

    <section className='sm:flex justify-center items-center sm:space-x-2 md:space-x-8 lg:space-x-20 bg-slate-300 w-full px-4 py-10 my-8'>
      <div className='mx-auto my-2 sm:my-0 sm:mx-0 rounded-full h-48 w-48 sm:h-40 sm:w-40 md:h-48 md:w-48 bg-gray-400 flex items-center justify-center flex-col'>
        <p className='text-4xl sm:text-2xl md:text-4xl'>75%</p>
        <p>Success Rate</p>
      </div>
      <div className='mx-auto my-2 sm:my-0 sm:mx-0 rounded-full h-48 w-48 sm:h-40 sm:w-40 md:h-48 md:w-48 bg-gray-400 flex items-center justify-center flex-col'>
        <p className='text-4xl sm:text-2xl md:text-4xl'>&lt;0.1%</p>
        <p>Risk</p>
      </div>
      <div className='mx-auto my-2 sm:my-0 sm:mx-0 rounded-full h-48 w-48 sm:h-40 sm:w-40 md:h-48 md:w-48 bg-gray-400 flex items-center justify-center flex-col'>
        <p className='text-4xl sm:text-2xl md:text-4xl'>10min</p>
        <p>Setup Time</p>
      </div>
    </section>

    <section className='w-full px-4 py-10 my-8 text-center'>
      <h5 className='text-2xl'>See what other people are saying</h5>
      <p className='text-md'>No more paying for so many vendors, all in one!</p>
      <div className='flex space-x-4 max-w-4xl mx-auto'>
        <div className='mt-4 hidden flex-col space-y-4 sm:flex w-1/3'>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam."
          ></CommentBlock>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet, facilisis a justo quis, dignissim posuere diam."
          ></CommentBlock>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet. Pellentesque ac consectetur risus."
          ></CommentBlock>
        </div>
        <div className='mt-4 flex flex-col space-y-4 w-full sm:w-1/3'>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet. Quisque sed malesuada lectus, commodo scelerisque diam. Vivamus faucibus, ipsum sed imperdiet ultrices, augue tortor blandit massa, a sagittis nulla eros a elit."
          ></CommentBlock>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam."
          ></CommentBlock>
        </div>
        <div className='mt-4 hidden flex-col space-y-4 sm:flex w-1/3'>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet. Pellentesque neque lacus, maximus ut fermentum in, pharetra ut leo."
          ></CommentBlock>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet. Quisque sed malesuada lectus, commodo scelerisque diam."
          ></CommentBlock>
          <CommentBlock
            name="Name"
            position="Position"
            comment="Lorem ipsum dolor sit amet. Maecenas ultricies augue lectus, eu accumsan lectus pulvinar eu."
          ></CommentBlock>
        </div>
      </div>
    </section>

    <section className='w-full bg-slate-300 px-4 py-10 my-4 text-center'>
      <p className='text-2xl italic'>Not just another learning journey</p>
    </section>

    <Tabs defaultValue="whole" className="w-full flex items-center flex-col mt-7 p-4">
      <TabsList className="w-full sm:w-3/4 xl:w-[992px] flex items-center mb-4">
        <TabsTrigger value="whole">Whole Module</TabsTrigger>
        <TabsTrigger value="indi">Individual Game</TabsTrigger>
        <TabsTrigger value="train">Organisation Training</TabsTrigger>
      </TabsList>
      <TabsContent value="whole" className="w-full md:w-3/4 xl:w-[992px] mt-0 sm:flex sm:space-x-4">
        <div className='w-full md:w-1/3'>
          <h5 className='text-xl text-center'>Some Other Topic</h5>
          <div className='h-36 w-full bg-gray-500 my-2'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        </div>
        <div className='w-full md:w-1/3 mt-6 sm:mt-0'>
          <h5 className='text-xl text-center'>Next Topic</h5>
          <div className='h-36 w-full bg-gray-500 my-2'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        </div>
        <div className='w-full md:w-1/3 mt-6 sm:mt-0'>
          <h5 className='text-xl text-center'>Other Topic</h5>
          <div className='h-36 w-full bg-gray-500 my-2'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        </div>
      </TabsContent>
      <TabsContent value="indi" className="w-3/4 xl:w-[992px] mt-0 flex space-x-4">
        <Carousel className="w-full">
          <CarouselContent>
            <IndieGamesCarouselItem 
              top={["Runway", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}
              bottom={["Runway 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}>
            </IndieGamesCarouselItem>
            <IndieGamesCarouselItem 
              top={["Runway 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}
              bottom={["Runway 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}>
            </IndieGamesCarouselItem>
            <IndieGamesCarouselItem 
              top={["Runway 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}
              bottom={["Runway 6", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}>
            </IndieGamesCarouselItem>
            <IndieGamesCarouselItem 
              top={["Runway 7", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}
              bottom={["Runway 8", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}>
            </IndieGamesCarouselItem>
            <IndieGamesCarouselItem 
              top={["Runway 9", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}
              bottom={["Runway 10", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sustainability", "Savings", "Other Value"]}>
            </IndieGamesCarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
          <CarouselNext className="bg-dark-green text-slate-100 hover:bg-darker-green hover:text-slate-100" />
        </Carousel>
      </TabsContent>
      <TabsContent value="train" className="w-full md:w-3/4 xl:w-[992px] mt-0 sm:flex sm:space-x-4">
        <div className='w-full md:w-1/3'>
          <h5 className='text-xl text-center'>Training</h5>
          <div className='h-36 w-full bg-gray-500 my-2'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        </div>
        <div className='w-full md:w-1/3 mt-6 sm:mt-0'>
          <h5 className='text-xl text-center'>Another Training</h5>
          <div className='h-36 w-full bg-gray-500 my-2'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        </div>
        <div className='w-full md:w-1/3 mt-6 sm:mt-0'>
          <h5 className='text-xl text-center'>Final Training</h5>
          <div className='h-36 w-full bg-gray-500 my-2'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed malesuada lectus, commodo scelerisque diam. Morbi sit amet tempus libero. Vestibulum eu turpis lectus.</p>
        </div>
      </TabsContent>
    </Tabs>

    <section className='pt-16 pb-20 md:py-28'>
      <h5 className='text-2xl text-center'>A Simpler Solution</h5>
      <div className='w-56 h-px bg-black mx-auto mb-8'></div>
      <div className='w-3/4 md:1/3 max-w-md mx-auto bg-slate-300 p-8 rounded-lg'>
        <TrialForm></TrialForm>
      </div>
      <h5 className='text-4xl text-center mt-6'>TRIAL ON US!</h5>
    </section>
  </main>
  );
}
