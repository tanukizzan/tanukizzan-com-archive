import styles from '../../styles/Home.module.css'

export default function Top() {
  return (
    <div className="pad w-3/4 max-w-3xl m-auto">
      <div className="padBtn"></div>
      <img alt="hero" src="/images/gadgets.jpg" className={styles.padImg} />
      <div className={styles.topText}>
        <h1>Welcome to tanukizzan.com!</h1>
        <p>Technology / Gadget</p>
        <a href='https://app.tanukizzan.com' className="text-blue-600">About Me</a>
      </div>
    </div>
  )
}