import Head from 'next/head'
import { Navbar, About, Header, Project, Skills, Education, Contact, Footer } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahib Singh</title>

        {/* Primary Meta Tags */}
        <title>Sahib Singh</title>
        <meta name="title" content="Sahib Singh" />
        <meta name="author" content="Sahib Singh" />
        <meta name="description" content="Full Stack Web Developer || Co-Founder at Gaming Geeks || IT undergrad at NITJ" />
        <meta name="keywords"
          content="Sahib Singh, Sahib, Soorme, Sardar Sahib Singh, Sahib Singh Khanna, Sahib Singh Github, Sahib Singh LinkedIn, Sahib Singh Gaming Geeks, ssahibsingh, Gaming Geeks, Soorme.com, Giigaa.com " />
        {/* <link rel="canonical" href="" /> */}
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sahibsingh.dev" />
        <meta property="og:title" content="Sahib Singh" />
        <meta property="og:description" content="Web Developer || Co-Founder at Gaming Geeks || IT undergrad at NITJ" />
        <meta property="og:image" content="./website.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sahibsingh.dev" />
        <meta property="twitter:title" content="Sahib Singh" />
        <meta property="twitter:description" content="Web Developer || Co-Founder at Gaming Geeks || IT undergrad at NITJ" />
        <meta property="twitter:image" content="./website.png" />

        <meta name="google-site-verification" content="mzoNw9Qn19gAfDXgZGNJIw4aOhU46Gw2kLTcZPgfH1s" />
      </Head>

      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
