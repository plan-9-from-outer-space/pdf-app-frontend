import styles from '../styles/layout.module.css'

export default function Layout (props) {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>Basic PDF CRUD App</h1>
      <p className={styles.subtitle}>By <a href="#" target="_blank">RJM</a> and <a href="#" target="_blank">RJM AI</a></p>
      {props.children}
    </div>
  )
}
