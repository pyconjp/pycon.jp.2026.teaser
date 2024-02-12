import BackgroundImages from "@/app/_components/organisms/BackgroundImages";
import styles from '@/styles/HeroSection.module.scss';

export default function HeroSection() {
  return (
    <div className='relative h-[calc(100vh_-_64px)]'>
      <BackgroundImages/>
      <div className='flex flex-col justify-center items-center pt-36'>
        <h1 className='text-6xl'>PyCon JP 20XX</h1>
        <div className='text-4xl'>We Are Happy to See You Again!</div>
        <div className='w-16 border-b-2 border-white my-5'>
        </div>
        <div>
          <p className='text-2xl'>Conference: XXXXXXX</p>
          <p className='text-2xl'>Venue: YYYYYYYY</p>
        </div>
        <div className='pt-3'>
          <p className='text-sm'>カンファレンス: XXXXXXX</p>
          <p className='text-sm'>会場: YYYYYYYY</p>
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