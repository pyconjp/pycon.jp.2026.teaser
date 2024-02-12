import HeroSection from "@/app/_components/sections/HeroSection";
import SubSection from "@/app/_components/sections/SubSection";
import ContactSection from "@/app/_components/sections/ContactSection";

export default function Home() {
  return (
      <main className="bg-rectangle">
        <HeroSection/>
        <SubSection/>
        <ContactSection/>
      </main>
  )
}
