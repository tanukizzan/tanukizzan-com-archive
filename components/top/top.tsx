import React, { useState } from "react";
import styles from '../../styles/Home.module.css'
import Modal from './modal'

export type Props = {
  showFlag: boolean
}

export default function Top() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`${styles.pad} w-3/4 max-w-3xl m-auto`}>
      <div className={styles.padBtn}></div>
      <img alt="hero" src="/images/skytree.webp" className={styles.padImg} />
      <Modal showFlag={showModal} setShowModal={setShowModal} />
    </div>
  )
}