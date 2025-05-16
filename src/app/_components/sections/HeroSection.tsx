import BackgroundImages from "@/app/_components/organisms/BackgroundImages";
import styles from '@/styles/HeroSection.module.scss';
import {Conference} from "@/app/variables";

export default function HeroSection() {
  return (
    <div className='relative h-[calc(100vh_-_64px)]'>
      <BackgroundImages/>
      <div className='flex flex-col justify-center items-center lg:pt-36 pt-10'>
        <div className='absolute w-64 h-64 lg:w-80 lg:h-80 left-0 right-0 m-auto bg-sub rotate-45'/>
        <h1 className='z-10 text-6xl mt-12'>{Conference.name}</h1>
        <div className='z-10 lg:text-4xl text-2xl'>We Are Happy to See You Again!</div>
        <div className='z-10 w-16 border-b-2 border-white lg:my-5 my-3'>
        </div>
        <div className='z-10 lg:text-2xl text-xl'>
          <div className='flex lg:flex-row flex-col justify-between'>
            <p>Date:&nbsp;</p>
            <p>{Conference.conferenceDateEn}</p>
          </div>
          <div className='flex lg:flex-row flex-col justify-between'>
            <p/>
            <p>{Conference.sprintDateEn}</p>
          </div>
          <div className='flex lg:flex-row flex-col justify-between mt-2'>
            <p>Venue:&nbsp;</p>
            <p>{Conference.locationEn}</p>
          </div>
        </div>
        <div className='pt-4 z-10 lg:text-sm text-xs'>
          <p>{Conference.conferenceDateJa}</p>
          <p>{Conference.sprintDateJa}</p>
          <p>{Conference.locationJa}</p>
        </div>
      </div>

      <div className="absolute bottom-10 right-0 left-0 m-auto">
        <div className="flex content-center justify-center">
          <p className="text-sm">SCROLL</p>
        </div>
        <div className={styles.arrowArea}>
          <img src="/arrow.png" alt="arrow icon"/>
          <img src="/arrow.png" alt="arrow icon"/>
          <img src="/arrow.png" alt="arrow icon"/>
        </div>
      </div>
    </div>
  );
}