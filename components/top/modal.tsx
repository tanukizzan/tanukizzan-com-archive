import styles from '../../styles/Home.module.css'
import { CgClose } from 'react-icons/cg'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export type Props = {
  showFlag: boolean
  setShowModal: any
}

export default function Modal(props: Props) {
  const showModal = () => {
    props.setShowModal(true);
  };
  const closeModal = () => {
    props.setShowModal(false);
  };
  return (
    <>
      {props.showFlag ? (
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <div className={styles.profileTitle}>
              <img src="/images/profile.webp" alt="たぬきっつぁん" />
              <h2>About Me</h2>
            </div>
            <p>　たぬきっつぁんと申します。生まれは青森ですが、小6という中途半端な年齢で東京に来てしまったので出身を聞かれるとちょっと戸惑います。現在文系大学生です。PC版トップのデザインは自分がガジェット好きなのでiPadをモチーフにしています。</p>
            <p>　趣味は写真を撮ること（風景をよく撮ります）、文章を書くこと（ブログにガジェットのことなどを書いてます）、ゲームをすること（Switchのゲームをよくやります）、音楽を聴くこと（J-Popやボカロをよく聴きます）などです。</p>
            <p>　プログラミングは高校に入ってから本格的に始めました。HTMLとCSSとJavaScriptを使ったWebサイトを作ることが多いですが、たまにUnityを使うこともあります。最近Next.jsとFlutterの勉強も始めました。このサイトもNext.jsで作成しています。</p>
            <h3>Skills（～2022）</h3>
            <p><FaStar/><FaStar/><FaStar className="mr-1"/>HTML</p>
            <p><FaStar/><FaStar/><FaStar className="mr-1"/>CSS</p>
            <p><FaStar/><FaStar className="mr-1"/>JavaScript</p>
            <p><FaStar className="mr-1"/>Unity</p>
            <p><FaStarHalfAlt className="mr-1"/>TypeScript</p>
            <p><FaStarHalfAlt className="mr-1"/>Next.js</p>
            <p><FaStarHalfAlt className="mr-1"/>Flutter</p>
            <button onClick={closeModal} className={styles.modalCloseBottom}><CgClose className={`mr-1 ${styles.closeMark}`}/>Close</button>
          </div>
          <button onClick={closeModal} className={styles.modalCloseTop}><CgClose className={styles.closeMark}/></button>
        </div>
      ) : (
        <div className={styles.topText}>
          <div className={styles.topTextContent}>
            <h1><img src="/images/profile.webp" alt="tanukizzan" className='w-8 h-8 rounded-full mr-2' /> tanukizzan</h1>
            <p>Web Developer / Student</p>
            <button onClick={showModal} className="text-blue-600">About Me</button>
          </div>
        </div>
      )}
    </>
  );
};