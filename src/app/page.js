import Image from 'next/image'
import Head from 'next/head'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectSections from './components/ProjectSections'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div class='container mt-24 mx-auto px-12 py-4'>
          <HeroSection/>
          <AchievementsSection />
          <AboutSection />
          <ProjectSections />
          <EmailSection />
      </div>
      <Footer />
    </main>
    </div>
  )
}
