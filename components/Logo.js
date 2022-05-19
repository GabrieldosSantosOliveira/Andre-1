import Link from 'next/link'
import styles from "/components/logo.module.css"

export default function Logo() {
  return( 
    <>
    <div className={styles.container}>
			<div>	
      <Link href='/'>
				<a>Next Blog</a>
			</Link>
        </div>
    </div>
    </>
    )
}