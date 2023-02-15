import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>Pages</div>
      <ul>
        <li><Link href='/about'><a>about</a></Link></li>
        <li><Link href='/description'><a>description</a></Link></li>
        <li><Link href='/list.html'><a>List</a></Link></li>
      </ul>
    </div>
  )
}
