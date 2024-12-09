import Hero from "@/components/Hero";
import Sec3 from "@/components/Sec3";
import Sec4 from "@/components/Sec4";
import Sidetable from "@/components/Sidetable";
import Social from "@/components/Social";



export default function Home() {
  return (
   <main className='max-w-[1440px] min-h-screen mx-auto md:mx-auto lg:mx-16 xl:mx-32 2xl:mx-64 '>
     <Hero />
     <Sidetable />
     <Sec3 />
     <Sec4 />
     <Social />

    
   </main>
  );
}
