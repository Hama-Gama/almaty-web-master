import Header from '@/components/Header'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Faq from './components/Faq'
import Hero from './components/Hero'

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-100 scroll-smooth'>
			<Header />

			<main className='flex-1'>
				<section id='home'>
					<Hero />
				</section>

				<section id='about'>
					<About />
				</section>
				<section id='portfolio'>
					<Portfolio />
				</section>
				<section id='faq'>
					<Faq />
				</section>
				<section id='testimonials'>
					<Testimonials />
				</section>
				<section id='contact'>
					<Contact />
				</section>
			</main>

			<Footer />
		</div>
	)
}

export default App
