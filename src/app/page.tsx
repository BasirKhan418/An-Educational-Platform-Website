/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Hero from "@/utils/Hero";
import About from "@/components/about";
import Result from "@/utils/Result";
import Events from "@/utils/Events";
import Achievements from "@/components/achievements";
import Course from "@/utils/Course";
import Blog from "@/utils/Blog";
import FAQ from "@/utils/Faq";
import Banner from "@/utils/Banner";
export default function LandingPage() {
  return (
    <div className="space-y-12">
      <Hero />
      <About />
      <Achievements />
      <Result/>  
      <Events />
      <Course/>
      <Blog/>
      <FAQ/>
      {/* <Banner/> */}
    </div>
  );
}
