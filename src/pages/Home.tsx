import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Services />
			<Testimonials />
			<Contact />
		</div>
	)
}
