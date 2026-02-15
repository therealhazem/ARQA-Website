import Categories from "@/components/Categories";
import Expert from "@/components/Expert";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import MyMarquee from "@/components/MyMarquee";
import ProdGuide from "@/components/ProdGuide";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";

/** Ensures Sanity content (Featured, ProdGuide, etc.) is fetched on every request so Vercel shows updates after refresh. */
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <MyMarquee />
      <Why />
      <Featured />
      <ProdGuide />
      <Testimonials />
      <Expert />
    </>
  );
}
