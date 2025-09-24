import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Building from '@/components/Building'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      <Header />
      <main role="main">
        <Hero />
        <Building />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
