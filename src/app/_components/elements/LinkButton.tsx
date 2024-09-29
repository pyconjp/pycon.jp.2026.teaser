'use client'

import {Button} from "@/app/variables";
import styles from "@/styles/LinkButton.module.scss";

export default function LinkButton({button}: { button: Button }) {
  const transition = (url: string | null) => {
    if (url !== null) {
      window.open(url, '_blank')?.focus();
    }
  }

  const MyButton = ({button}: { button: Button }) => (
    <div className='flex flex-col gap-2'>
      {
        button.links === null
          ? <button disabled={true}
            className={styles.linkButton + ' relative outline outline-1 outline-white -outline-offset-4 disabled:opacity-50 hover:opacity-60 w-64 h-16 bg-primary hover:cursor-default opacity-50'}>
            <div>
              Coming Soon
            </div>
            <div
              className={styles.buttonBorder + ' absolute right-0 top-8 border-solid border-[1px] border-white w-6 transition-right duration-100'}/>
          </button>
          : button.links?.map((link, index) => (
            <button
              key={index}
              disabled={button.status !== 'available'}
              className={styles.linkButton + ' relative outline outline-1 outline-white -outline-offset-4 disabled:opacity-50 hover:opacity-60 w-64 h-16 bg-primary ' + (button.status === 'available' ? 'hover:cursor-pointer' : 'hover:cursor-default')}
                onClick={() => transition(link.url)}
              >
                <div>
                  {link.label}
                </div>
                <div
                  className={styles.buttonBorder + ' absolute right-0 top-8 border-solid border-[1px] border-white w-6 transition-right duration-100'}/>
              </button>
            )
          )
      }
    </div>
  );

  return (
    <MyButton button={button}/>
  );
}