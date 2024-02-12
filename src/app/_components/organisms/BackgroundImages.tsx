import styles from '@/styles/BackgroundImages.module.scss';
import Image from "next/image";

export default function BackgroundImages() {
  return (
    <div>
      <img src='/fireworks-red-1.png' className={styles.FireworksRed1} alt='fireworks-red-1'/>
      <img src='/fireworks-red-2.png' className={styles.FireworksRed2} alt='fireworks-red-2'/>
      <img src='/fireworks-yellow-1.png' className={styles.FireworksYellow1} alt='fireworks-yellow-1'/>
      <img src='/fireworks-yellow-2.png' className={styles.FireworksYellow2} alt='fireworks-yellow-2'/>
      <img src='/fireworks-yellow-3.png' className={styles.FireworksYellow3} alt='fireworks-yellow-3'/>
    </div>
  );
}