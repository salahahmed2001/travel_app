import Image from "next/image";
import Hero from "./_componets/Hero";
import Camp from "./_componets/Camp";
import Guide from "./_componets/Guide";
import Features from "./_componets/Features";
import GetApp from "./_componets/getApp";

export default function Home() {
  return (
   <>
   <Hero/>
   <Camp/>
   <Guide/>
   <Features/>
   <GetApp/>
   </>
  );
}
