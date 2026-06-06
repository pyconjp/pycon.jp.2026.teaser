import LinkButton from "@/app/_components/elements/LinkButton";
import {KeynoteLinks, Keynotes} from "@/app/variables";

export default function KeynoteSubSection() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="grid lg:grid-cols-2 grid-cols-1 mx-auto gap-x-32 gap-y-12 w-4/6 sm:grid-cols-2 justify-items-center"
      >
        {
          Keynotes.map((keynote, index) => (
            <div
              className="flex flex-col items-center justify-center sm:[&:last-child:nth-child(odd)]:col-span-2"
              key={index}
            >
              <img
                src={keynote.image}
                alt={keynote.nameEn}
                className="w-40 h-40 object-cover rounded-full"
              />
              <p className="pt-5 text-2xl text-center whitespace-break-spaces">{keynote.nameEn}</p>
              <p className="pt-2 text-sm text-center whitespace-break-spaces">{keynote.nameJa}</p>
            </div>
          ))
        }
      </div>

      {
        KeynoteLinks.length > 0 && (
          <div className="mt-10">
            <LinkButton
              button={{
                labelEn: 'Keynote',
                labelJa: '基調講演',
                status: 'available',
                links: KeynoteLinks,
              }}
            />
          </div>
        )
      }
    </div>
  );
}
