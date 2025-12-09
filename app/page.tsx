import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import MyMarquee from "@/components/MyMarquee";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <MyMarquee />
      <Why />
      <Featured />
    </>
  );
}
