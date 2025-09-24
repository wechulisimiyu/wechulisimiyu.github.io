import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Building from '@/components/Building'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Font Awesome for icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer"
      />
      
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
