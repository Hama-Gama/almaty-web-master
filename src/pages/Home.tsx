import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Faq from '@/components/Faq'
import Accordion from '@/components/Accordion'

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Portfolio />
			<Faq />
			<Accordion />
			<Testimonials />
			<Contact />
		</div>
	)
}
