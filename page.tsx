import Head from 'next/head'
import Header from "./header"
import Hero from "./hero"
import Footer from "./footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js Site</title>
        <meta name="description" content="Welcome to my Next.js site" />
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

