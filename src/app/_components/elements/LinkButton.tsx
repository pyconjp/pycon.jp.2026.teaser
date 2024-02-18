'use client'

import {Button} from "@/app/variables";
import styles from "@/styles/LinkButton.module.scss";

const BUTTON_LABEL: { [key in Button["status"]]: string } = {
  comingSoon: "Coming Soon",
  available: "See More",
  closed: "Closed",
}

export default function LinkButton({button}: { button: Button }) {
  const transition = (url: string | null) => {
    if (url !== null) {
      window.open(url, '_blank')?.focus();
    }
  }

  const MyButton = ({text, button}: { text: string, button: Button }) => (
    <button disabled={button.status !== 'available'}
            className={styles.linkButton + ' relative outline outline-1 outline-white -outline-offset-4 disabled:opacity-50 hover:opacity-60 w-64 h-16 bg-primary ' + (button.status === 'available' ? 'hover:cursor-pointer' : 'hover:cursor-default')}
            onClick={() => transition(button.url)}
    >
      <div>
        {text}
      </div>
      <div
        className={styles.buttonBorder + ' absolute right-0 top-8 border-solid border-[1px] border-white w-6 transition-right duration-100'}/>
    </button>
  );

  return (
    <MyButton text={BUTTON_LABEL[button.status]} button={button}/>
  );
}