import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Building from '@/components/Building'
import Footer from '@/components/Footer'
import Volunteering from '@/components/Volunteering'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      <Header />
      <main role="main">
        <Hero />
        <Building />
        <Volunteering />
      </main>
      <Footer />
    </div>
  )
}
