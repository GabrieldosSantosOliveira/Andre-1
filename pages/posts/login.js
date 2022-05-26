import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Mean from '../../components/Mean'
import Logo from '../../components/Logo'
import YourComponent from "../../components/Imagem"

export default function Home() {
  return (
    <div className={styles.container}>
      <Logo/>
      <Menu/>
      <YourComponent/>
      <Mean text="Login"/>
      <Footer/>
    </div>
  )
}
