import {Conference} from "@/app/variables";

export default function ContactSection() {
  return (
    <div className="py-24 h-[500px] mx-6 lg:mx-0">
      <div className="text-center">
        <p className="text-2xl">Contact</p>
        <div className="mt-10">
          <div className="text-sm">
            <p>ボランティアによる運営ですので、回答には1週間程度を要します。</p>
            <p>何卒お待ちいただけますようにお願いします。</p>
          </div>
          <div className="mt-4 text-sm">
            <p>{`${Conference.name} is organized by volunteers, so it may take a week for us to reply to inquiries.`}</p>
            <p>Thank you for your patience.</p>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <a
            href="mailto:pyconjp@pycon.jp"
            className="text-white bg-auto border border-white rounded-full en-regular-font hover:text-black hover:bg-white contact-button h-12 w-[280px] py-3"
          >
            <span>pyconjp@pycon.jp</span>
          </a>
        </div>
      </div>
    </div>
  );
}