import KeynoteSubSection from "@/app/_components/sections/KeynoteSubSection";
import ButtonsSubSection from "@/app/_components/sections/ButtonsSubSection";

export default function SubSection() {
  return (
    <div className="flex flex-col bg-sub">
      <div
        className="flex content-center justify-center mt-16 mb-10 lg:mt-24 lg:mb-14 gap-3"
      >
        <div className="border-white border-[1px] w-16 h-0 mt-3"/>
        <p>Latest Information</p>
        <div className="border-white border-[1px] w-16 h-0 mt-3"/>
      </div>

      <KeynoteSubSection/>

      <div className="border-white/30 border-t-[1px] w-4/6 mx-auto my-16 lg:my-20"/>

      <ButtonsSubSection/>

      <div className="mb-20 sm:mb-32"/>
    </div>
  );
}
