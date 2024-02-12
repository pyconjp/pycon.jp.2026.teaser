export default function SubSection() {
  return (
    <div className="flex flex-col bg-sub">
      <div
        className="flex content-center justify-center mt-16 mb-10 sm:mt-24 sm:mb-14"
      >
        <div className="custom-border"></div>
        <p className="mx-3">Latest Information</p>
        <div className="custom-border"></div>
      </div>

      <div className="flex content-center justify-center mb-20 sm:mb-32">
        <div className="w-4/6">
          <div
            className="grid items-center content-center grid-cols-1 sm:grid-cols-2 justify-items-center"
          >
            <div className="mt-10 sm:mt-0">
              <p className="pt-5 text-2xl text-center">
                {"Won't you be a speaker?"}
              </p>
              <p className="pt-2 text-sm text-center">登壇者募集</p>
              <p className="pt-1 text-sm text-center">終了しました</p>
              {/*<LinkButton disabled link="https://pretalx.com/pyconjp2022/cfp">Closed</LinkButton>*/}
            </div>
            <div className="mt-10 sm:mt-0">
              <p className="pt-5 text-2xl text-center">
                We need volunteers
              </p>
              <p className="pt-2 text-sm text-center">
                スタッフ募集中！
              </p>
              <p className="pt-1 text-sm text-center">
                詳しくは下のボタンから
              </p>
              {/*<LinkButton link="https://pyconjp.blogspot.com/2023/01/pycon-jp-2023.html">See More</LinkButton>*/}
            </div>
            <div className="mt-10 sm:mt-0 sm:col-span-2">
              <p className="pt-5 text-2xl text-center">
                Please be our sponsor!
              </p>
              <p className="pt-2 text-sm text-center">
                スポンサー募集中！
              </p>
              <p className="pt-1 text-sm text-center">
                詳しくは下のボタンから
              </p>
              {/*<LinkButton link="https://forms.gle/vHW5TSeZFWY3rgKW9">See More</LinkButton>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}