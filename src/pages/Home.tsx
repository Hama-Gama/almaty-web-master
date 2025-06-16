import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Faq from '@/components/Faq'

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Portfolio />
			<Faq />
			<Testimonials />
			<Contact />
		</div>
	)
}
