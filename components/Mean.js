import styles from '/components/mean.module.css'

export default function Mean(props){
  return(
    <>
    <div className={styles.container}>
      {props.text}
    </div>
    </>
  )
}