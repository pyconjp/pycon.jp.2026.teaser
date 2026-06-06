import LinkButton from "@/app/_components/elements/LinkButton";
import {Buttons} from "@/app/variables";

export default function ButtonsSubSection() {
  return (
    <div
      className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-x-64 lg:gap-y-10 w-4/6 sm:grid-cols-2"
    >
      {
        Buttons.map((button, index) => (
          <div className="mt-10 lg:mt-0 flex flex-col items-center justify-items-center justify-center content-center sm:[&:last-child:nth-child(odd)]:col-span-2" key={index}>
            <div className="mb-4">
              <p className="pt-5 text-2xl text-center whitespace-break-spaces">{button.labelEn}</p>
              <p className="pt-2 text-sm text-center whitespace-break-spaces">{button.labelJa}</p>
            </div>
            <LinkButton button={button}/>
          </div>
        ))
      }
    </div>
  );
}
