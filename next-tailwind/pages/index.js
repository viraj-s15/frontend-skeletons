import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Next + Tailwind</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className='flex items-center justify-center bg-black text-white w-screen h-screen'>
				<div className='font-bold text-5xl'>
					This is made using vite + react + tailwind
				</div>
			</div>
		</>
	)
}
