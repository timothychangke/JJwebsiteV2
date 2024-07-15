import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { CataloguePrevious, CatalogueNext, CatalogueTrigger, CatalogueItem } from "./components/homepage/Catalogue.jsx";
import { ResponsiveImage } from "./components/ResponsiveImage";

import HeroSection from "./components/homepage/HeroSection";

import { games_info } from "../public/data/games_info.json";

export default function Home() {
  return (
    <main className="h-5/6 bg-slate-200 font-light">
      {/* Hero */}
      <HeroSection></HeroSection>

      {/* Content that caters to everyone */}
      <section className='bg-gradient-to-b from-black to-[#306054] px-8 pt-24 relative z-30'>
        <Image alt="Jalan Journey logo" className='-mt-36 mx-auto mb-12' src={"/images/Hero_Logo.png"} width={140} height={140}></Image>
        <Image alt="Left tree" className='w-2/6 absolute -top-16 md:-top-1/4 left-0' src={"/images/Hero_LeftTree.png"} width={500} height={500}></Image>
        <Image alt="Right tree" className='w-2/6 absolute -top-16 md:-top-1/4 right-0' src={"/images/Hero_RightTree.png"} width={500} height={500}></Image>
        <h2 className='text-3xl text-center text-white font-bold'>Content that caters to everyone</h2>
        <div className='md:flex md:space-x-4 space-y-4 md:space-y-0 mt-4 max-w-3xl mx-auto'>
          <div className="md:w-1/2 lg:w-1/3 bg-beige border-dark-green border-[6px] rounded-lg flex flex-col items-center p-4">
            <ResponsiveImage mobileSrc={"Institutions.png"} desktopSrc={"Institutions.png"} mobileSize={100} desktopSize={150}></ResponsiveImage>
            <div className='text-center px-3 pt-2'>
              <h3 className='text-xl font-bold'>Institutions</h3>
              <p className='text-black pt-2'>Level up classroom learning with play</p>
              <Button className='mt-4 mb-2 font-bold border-violet border-2 rounded-lg bg-transparent text-violet hover:border-dark-violet hover:text-dark-violet hover:bg-transparent uppercase'>Explore</Button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 bg-beige border-dark-green border-[6px] rounded-lg flex flex-col items-center p-4">
            <ResponsiveImage mobileSrc={"Organisations.png"} desktopSrc={"Organisations.png"} mobileSize={100} desktopSize={150}></ResponsiveImage>
            <div className='text-center px-3 pt-2'>
              <h3 className='text-xl font-bold'>Organisations</h3>
              <p className='text-black pt-2'>Empower your team and community</p>
              <Button className='mt-4 mb-2 font-bold border-violet border-2 rounded-lg bg-transparent text-violet hover:border-dark-violet hover:text-dark-violet hover:bg-transparent uppercase'>Explore</Button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 bg-beige border-dark-green border-[6px] rounded-lg flex flex-col items-center p-4">
            <ResponsiveImage mobileSrc={"Individuals.png"} desktopSrc={"Individuals.png"} mobileSize={100} desktopSize={150}></ResponsiveImage>
            <div className='text-center px-3 pt-2'>
              <h3 className='text-xl font-bold'>Individuals</h3>
              <p className='text-black pt-2'>Unlock the potential of personalised education</p>
              <Button className='mt-4 mb-2 font-bold border-violet border-2 rounded-lg bg-transparent text-violet hover:border-dark-violet hover:text-dark-violet hover:bg-transparent uppercase'>Explore</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Catalogue */}
      <section className='bg-gradient-to-b from-[#306054] via-[#a2c17c] to-black relative pb-12'>
        <div className="bg-cover bg-top h-48 absolute top-0 left-0 right-0"
            style={{ backgroundImage: `url(/images/Catalogue_Top.png)` }}>
        </div>
        <Image alt="Left tree" className='absolute bottom-0 left-0' src={"/images/Catalogue_LeftTree.png"} width={140} height={300}></Image>
        <Image alt="Right tree" className='absolute bottom-0 right-0' src={"/images/Catalogue_RightTree.png"} width={140} height={300}></Image>
        <div className='w-full px-8 pt-36 relative z-20'>
          <h2 className='text-2xl text-center text-white font-bold'>Explore Our Catalogue</h2>
          <Tabs defaultValue={games_info[0].slug} className="w-full flex items-center flex-col p-4">
            <TabsList className="w-full sm:w-3/4 xl:w-[900px] flex items-center space-x-8 mb-4 bg-transparent">
              {games_info.map((cat, index) => {
                return <CatalogueTrigger index={index} value={cat.slug} title={cat.category}></CatalogueTrigger>
              })}
            </TabsList>
            
            {games_info.map((cat, index) => {
              return (
                <TabsContent key={index} value={cat.slug} className="w-11/12 md:w-11/12 lg:w-10/12 xl:w-[800px] mt-0">
                  <Carousel className="w-full rounded-sm">
                    <CarouselContent>
                      {cat.data.map((game, gindex) => {
                        return (
                          <CatalogueItem
                            index={gindex}
                            image={game.image}
                            title={game.title}
                            description={game.description}
                            values={game.values}
                            button={game.button}>
                          </CatalogueItem>
                        )
                      })}
                    </CarouselContent>
                    <CataloguePrevious></CataloguePrevious>
                    <CatalogueNext></CatalogueNext>
                  </Carousel>
                  <div className='flex justify-center my-3'>
                    <Button className='text-lg font-light text-center border-white border-2 rounded-lg bg-transparent text-white hover:border-white hover:text-white hover:bg-transparent'><p>See all for <span className='font-bold'>{cat.category}</span></p></Button>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
        <div className="bg-repeat-x bg-bottom bg-contain h-16 absolute bottom-0 left-0 right-0 z-10"
            style={{ backgroundImage: `url(/images/Engage_Grass.png)` }}>
          <Image alt="" className='mx-auto -mt-16' src={"/images/Engage_Logo.png"} width={150} height={150}></Image>
        </div>
      </section>

      {/* Engage Participants */}
      <section className='w-full bg-brown pt-0 pb-48 relative'>
        <div className='absolute -top-10 w-full left-1/2 -translate-x-2/4 lg:w-3/4 max-w-6xl'>
          <Image alt="" className='w-full' src={"/images/Engage_Top.png"} width={500} height={500}></Image>
          <Image alt="" className='w-full' src={"/images/Engage_Middle.png"} width={500} height={500}></Image>
        </div>
        <Image alt="" className='absolute bottom-0 left-0 right-0 w-full' src={"/images/Engage_Bottom.png"} width={1500} height={1500}></Image>
        <Image alt="" className='absolute bottom-0 right-1/4' src={"/images/Engage_Flower.png"} width={140} height={300}></Image>

        <Tabs defaultValue="engage-participants" className="w-full flex items-center flex-col p-4 z-10 relative">
          <TabsList className="h-auto w-full lg:w-3/4 xl:w-[900px] flex flex-wrap items-center bg-transparent flex-col xs:flex-row">
            <TabsTrigger value="engage-participants" className="m-2 md:mx-0 block py-2 min-w-32 text-grey bg-transparent border-2 md:border-r-0 md:rounded-r-none rounded-md border-grey data-[state=active]:text-white data-[state=active]:border-white data-[state=active]:bg-violet data-[state=active]:shadow-none">Engage<br/>Participants</TabsTrigger>
            <TabsTrigger value="improve-learning-outcomes" className="m-2 md:mx-0 block py-2 min-w-32 text-grey bg-transparent border-2 md:border-r-0 md:rounded-none rounded-md border-grey data-[state=active]:text-white data-[state=active]:border-white data-[state=active]:bg-violet data-[state=active]:shadow-none">Improve Learning<br/>Outcomes</TabsTrigger>
            <TabsTrigger value="realworld-applicability" className="m-2 md:mx-0 block py-2 min-w-32 text-grey bg-transparent border-2 md:border-r-0 md:rounded-none rounded-md border-grey data-[state=active]:text-white data-[state=active]:border-white data-[state=active]:bg-violet data-[state=active]:shadow-none">Real-world<br/>Applicability</TabsTrigger>
            <TabsTrigger value="lighten-workloads" className="m-2 md:mx-0 block py-2 min-w-32 text-grey bg-transparent border-2 md:border-r-0 md:rounded-none rounded-md border-grey data-[state=active]:text-white data-[state=active]:border-white data-[state=active]:bg-violet data-[state=active]:shadow-none">Lighten<br/>Workloads</TabsTrigger>
            <TabsTrigger value="acquire-options" className="m-2 md:mx-0 block py-2 min-w-32 text-grey bg-transparent border-2 md:rounded-l-none rounded-md border-grey data-[state=active]:text-white data-[state=active]:border-white data-[state=active]:bg-violet data-[state=active]:shadow-none">Acquire<br/>Options</TabsTrigger>
          </TabsList>
          <TabsContent value="engage-participants" className="w-full md:w-3/4 xl:w-[900px] mt-8">
            <div className='w-full bg-beige rounded-xl p-3 flex flex-col-reverse sm:flex-row sm:space-x-6 md:flex-col-reverse md:space-x-0 lg:flex-row lg:space-x-6'>
              <div className='w-full sm:w-1/4 md:w-full lg:w-1/4 bg-cover bg-center rounded-xl h-52 sm:h-auto md:h-52 lg:h-auto' style={{ backgroundImage: `url(/images/Engage_Image.png)` }}>
              </div>
              <div className='w-full sm:w-3/4 md:w-full lg:w-3/4 pt-3 pb-2 pl-2 pr-4 sm:pl-0 sm:pr-8 sm:pt-2 md:pl-4 md:pr-6 md:pt-4 lg:pl-0 lg:pr-8 lg:pt-2'>
                <h5 className='text-xl md:text-2xl text-dark-green font-bold pb-1'>Spark interest with game-based learning that turns education into excitement</h5>
                <p className='text-justify'>Our games immerse students in dynamic narratives, making learning engaging and memorable. By integrating curriculum with interactive gameplay, we inspire curiosity and active participation. According to Tham et al. (2015), over 67% of students prefer game-based learning to traditional methods.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="improve-learning-outcomes" className="w-full md:w-3/4 xl:w-[900px] mt-8">
          <div className='w-full bg-beige rounded-xl p-3 flex flex-col-reverse sm:flex-row sm:space-x-6 md:flex-col-reverse md:space-x-0 lg:flex-row lg:space-x-6'>
              <div className='w-full sm:w-1/4 md:w-full lg:w-1/4 bg-cover bg-center rounded-xl h-52 sm:h-auto md:h-52 lg:h-auto' style={{ backgroundImage: `url(/images/Engage_Image.png)` }}>
              </div>
              <div className='w-full sm:w-3/4 md:w-full lg:w-3/4 pt-3 pb-2 pl-2 pr-4 sm:pl-0 sm:pr-8 sm:pt-2 md:pl-4 md:pr-6 md:pt-4 lg:pl-0 lg:pr-8 lg:pt-2'>
                <h5 className='text-xl md:text-2xl text-dark-green font-bold pb-1'>Elevate academic achievement with games designed to enhance comprehension and retention</h5>
                <p className='text-justify'>Game-based learning isn't just enjoyable—it's effective. According to Benni et al. (2021), it can increase learning outcomes by 2.14 times compared to traditional teaching methods. Games also foster deeper empathy and enhance retention rates, making learning more impactful and engaging.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="realworld-applicability" className="w-full md:w-3/4 xl:w-[900px] mt-8">
          <div className='w-full bg-beige rounded-xl p-3 flex flex-col-reverse sm:flex-row sm:space-x-6 md:flex-col-reverse md:space-x-0 lg:flex-row lg:space-x-6'>
              <div className='w-full sm:w-1/4 md:w-full lg:w-1/4 bg-cover bg-center rounded-xl h-52 sm:h-auto md:h-52 lg:h-auto' style={{ backgroundImage: `url(/images/Engage_Image.png)` }}>
              </div>
              <div className='w-full sm:w-3/4 md:w-full lg:w-3/4 pt-3 pb-2 pl-2 pr-4 sm:pl-0 sm:pr-8 sm:pt-2 md:pl-4 md:pr-6 md:pt-4 lg:pl-0 lg:pr-8 lg:pt-2'>
                <h5 className='text-xl md:text-2xl text-dark-green font-bold pb-1'>Experience practical education through scenarios that prepare learners for real-life experiences</h5>
                <p className='text-justify'>Our games involve realistic scenarios, equipping students with actionable skills and insights crucial for navigating the complexities of the world. These experiences empower students with practical outcomes they can apply directly to their lives, fostering personal growth and preparedness.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="lighten-workloads" className="w-full md:w-3/4 xl:w-[900px] mt-8">
          <div className='w-full bg-beige rounded-xl p-3 flex flex-col-reverse sm:flex-row sm:space-x-6 md:flex-col-reverse md:space-x-0 lg:flex-row lg:space-x-6'>
              <div className='w-full sm:w-1/4 md:w-full lg:w-1/4 bg-cover bg-center rounded-xl h-52 sm:h-auto md:h-52 lg:h-auto' style={{ backgroundImage: `url(/images/Engage_Image.png)` }}>
              </div>
              <div className='w-full sm:w-3/4 md:w-full lg:w-3/4 pt-3 pb-2 pl-2 pr-4 sm:pl-0 sm:pr-8 sm:pt-2 md:pl-4 md:pr-6 md:pt-4 lg:pl-0 lg:pr-8 lg:pt-2'>
                <h5 className='text-xl md:text-2xl text-dark-green font-bold pb-1'>Simplify educational logistics with plug-and-play solutions that streamline planning and execution</h5>
                <p className='text-justify'>Place the onus of making lessons engaging on us! Educators save valuable time with our ready-to-use resources, eliminating the need for extensive preparation of curriculum and logistical arrangements: administrative tasks, itinerary planning, safety assessments, long wait and travel times.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="acquire-options" className="w-full md:w-3/4 xl:w-[900px] mt-8">
          <div className='w-full bg-beige rounded-xl p-3 flex flex-col-reverse sm:flex-row sm:space-x-6 md:flex-col-reverse md:space-x-0 lg:flex-row lg:space-x-6'>
              <div className='w-full sm:w-1/4 md:w-full lg:w-1/4 bg-cover bg-center rounded-xl h-52 sm:h-auto md:h-52 lg:h-auto' style={{ backgroundImage: `url(/images/Engage_Image.png)` }}>
              </div>
              <div className='w-full sm:w-3/4 md:w-full lg:w-3/4 pt-3 pb-2 pl-2 pr-4 sm:pl-0 sm:pr-8 sm:pt-2 md:pl-4 md:pr-6 md:pt-4 lg:pl-0 lg:pr-8 lg:pt-2'>
                <h5 className='text-xl md:text-2xl text-dark-green font-bold pb-1'>Explore diverse perspectives in safe, controlled virtual environments for unique learning opportunities</h5>
                <p className='text-justify'>In our games, students engage in scenarios otherwise impractical or sensitive, promoting empathy and understanding without logistical constraints or risks. Our games can serve as a precursor to on-the-ground learning journeys by preparing students through context setting.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Proven engagement */}
        <section className='w-full pt-8 pb-1 px-4 z-10 relative'>
          <div className='bg-[#8F8C79]/80 rounded-xl p-6 md:px-16 lg:px-32 text-center w-full sm:w-4/5 md:w-4/6 xl:w-[800px] mx-auto mb-8'>
            <h5 className='text-light-green font-bold text-3xl pb-4'>Proven engagement</h5>
            <p className='leading-snug'>
              Discover how 96.7% of participants find our programs engaging and enjoyable, fostering a dynamic learning environment where education meets excitement.
            </p>
          </div>
          <div className='bg-[#8F8C79]/80 rounded-xl p-6 md:px-16 lg:px-32 text-center w-full sm:w-4/5 md:w-4/6 xl:w-[800px] mx-auto mb-8'>
            <h5 className='text-light-green font-bold text-3xl pb-4'>Inspiring Volunteerism</h5>
            <p className='leading-snug'>
            See how our programmes inspire action beyond the classroom, with 70.6% of participants follow-up with volunteer activities after completing.
            </p>
          </div>
          <div className='bg-[#8F8C79]/80 rounded-xl p-6 md:px-16 lg:px-32 text-center w-full sm:w-4/5 md:w-4/6 xl:w-[800px] mx-auto mb-8'>
            <h5 className='text-light-green font-bold text-3xl pb-4'>Advised by Educators</h5>
            <p className='leading-snug'>
              We utilise research-backed teaching methodologies to ensure effective learning outcomes, supported by educators both public and private.
            </p>
          </div>
          <div className='relative bg-[#8F8C79]/80 rounded-xl p-6 md:px-16 lg:px-32 text-center w-full sm:w-4/5 md:w-4/6 xl:w-[800px] mx-auto mb-8'>
            <h5 className='text-light-green font-bold text-3xl pb-4'>Proven Research</h5>
            <p className='leading-snug'>
              We have conducted extensive research into our games that have proven to have a 2.14x increase in learning outcomes.
            </p>
            <Image alt="" className='absolute -bottom-2 -left-10 hidden md:block' src={"/images/Engage_LastLeft.png"} width={100} height={100}></Image>
            <Image alt="" className='absolute top-full -right-2 -mt-6' src={"/images/Engage_LastRight.png"} width={100} height={100}></Image>
          </div>
        </section>
      </section>

      {/* Join us in inspiring the Change Makers of tomorrow */}
      <section className='w-full bg-stone pt-28 pb-40 relative'>
        <div className="bg-repeat bg-center bg-contain h-16 absolute top-0 left-0 right-0"
            style={{ backgroundImage: `url(/images/JoinUs_Top.png)` }}>
        </div>
        <div className='max-w-3xl sm:flex m-auto relative z-20'>
          <div className='w-3/4 mx-auto sm:max-w-80 text-center sm:text-right mt-3'>
            <h5 className='text-4xl text-white mb-8 md:font-bold' style={{ textShadow: `3px 3px #1B6261` }}>Join us in<br/>inspiring the Change Makers<br/>of tomorrow.</h5>
            <Button className='text-3xl p-8 sm:py-0 sm:text-sm rounded-md bg-dark-green border-2 border-white text-white mb-10 sm:mb-0'>Create an account</Button>
          </div>
          <div className='flex flex-wrap text-white text-center justify-center sm:justify-end'>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>3500+</p>
              <p>Students</p>
            </div>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>35+</p>
              <p>Schools</p>
            </div>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>7+</p>
              <p>Charities</p>
            </div>
            <div className='w-5/12 rounded-2xl border-2 border-white px-4 py-5 m-3'>
              <p className='text-4xl font-bold'>4+</p>
              <p>Countries</p>
            </div>
          </div>
        </div>
        <Image alt="" className='absolute bottom-0 hidden sm:block right-3/4 2xl:right-auto 2xl:left-1/4' src={"/images/JoinUs_Flower.png"} width={200} height={200}></Image>
      </section>
      {/* <section className='sm:flex justify-center items-center sm:space-x-2 md:space-x-8 lg:space-x-20 bg-slate-300 w-full px-4 py-10 my-8'>
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
      </section> */}

      {/* <section className='w-full px-4 py-10 my-8 text-center'>
        <h5 className='text-2xl'>See what other people are saying</h5>
        <p className='text-base'>No more paying for so many vendors, all in one!</p>
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
      </section> */}

      {/* <section className='pt-16 pb-20 md:py-28'>
        <h5 className='text-2xl text-center'>A Simpler Solution</h5>
        <div className='w-56 h-px bg-black mx-auto mb-8'></div>
        <div className='w-3/4 md:1/3 max-w-md mx-auto bg-slate-300 p-8 rounded-lg'>
          <TrialForm></TrialForm>
        </div>
        <h5 className='text-4xl text-center mt-6'>TRIAL ON US!</h5>
      </section> */}
    </main>
  );
}
