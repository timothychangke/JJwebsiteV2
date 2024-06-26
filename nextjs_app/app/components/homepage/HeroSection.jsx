const HeroSection = () => {
  return (
    <section className='p-4 bg-cover bg-center' style={{ backgroundImage: `url(/images/hero-background.png)` }}>
      <div className='md:mt-0 mt-6 pt-[20vw] pb-[24vw] text-center mx-auto h-full'>
        <h2 className='text-5xl text-light-green font-bold'>Jalan Journey</h2>
        <p className='text-base sm:text-xl md:text-2xl mt-2 text-white font-bold leading-snug'>Cultivate Deeper Empathy through Play</p>
        <p className='text-sm sm:text-base md:text-lg mt-1 text-white leading-snug'>We create games with meaningful social themes</p>
      </div>
    </section>
  );
};

export default HeroSection;