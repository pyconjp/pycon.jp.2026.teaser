import LinkButton from "@/app/_components/elements/LinkButton";
import {Button, Buttons} from "@/app/variables";

const STATUS_LABEL: { [key in Button["status"]]: string } = {
  comingSoon: "準備中です",
  available: "詳しくは下のボタンから",
  closed: "終了しました",
}

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

      <div
        className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-x-64 lg:gap-y-10 w-4/6 sm:grid-cols-2 mb-20 sm:mb-32"
      >
        {
          Buttons.map((button, index) => (
            <div className="mt-10 lg:mt-0 flex flex-col items-center justify-items-center justify-center content-center" key={index}>
              <div className="mb-4">
                <p className="pt-5 text-2xl text-center">{button.labelEn}</p>
                <p className="pt-2 text-sm text-center">{button.labelJa}</p>
                <p className="pt-1 text-sm text-center">{STATUS_LABEL[button.status]}</p>
              </div>
              <LinkButton button={button}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}