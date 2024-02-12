export default function Footer() {
  return (
    <footer className="bg-footer lg:h-72 h-[420px] font-noto">
      <div className="flex justify-center py-10 sm:py-16">
        <div className="flex flex-col max-[88%]">
          <div className="sm:flex">
            <a
              href="https://www.pycon.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pyconjp-association-logo.png"
                className="w-32 h-20"
                alt="PyCon JP Association Logo"
              /></a>
            <div className="mt-2 sm:ml-4 sm:mt-0">
              <p className="mb-2 font-bold sm:mb-2 sm:text-base">
                主催:一般社団法人 PyCon JP Association
              </p>
              <p className="text-sm">
                PyCon JP 20XX hosted by PyCon JP is produced by the
                <a
                  href="https://www.pycon.jp/committee/english.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline">
                  PyCon JP Association
                </a>.
              </p>
              <p className="text-sm">
                For the latest information and contact information for PyCon JP 20XX,
                please visit
                <a
                  href="https://pyconjp.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline">
                  our blog
                </a>.
              </p>
            </div>
          </div>
          <div className="mt-8 sm:flex">
            <p className="mb-2 text-sm sm:text-base">
              このWebサイトはクリエイティブ・コモンズ表示4.0国際ライセンスの下に提供されています。
            </p>
            <img
              src="/creative-commons-icon.png"
              className="licence_img"
              alt="Creative Commons 4.0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}