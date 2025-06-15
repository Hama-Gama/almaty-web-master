import Reveal from '@/components/Reveal'

const Footer = () => (
	<footer className='relative z-50 bg-gray-800 text-white py-6 text-center'>
		<Reveal>
			<p>© {new Date().getFullYear()} Almaty Web Master. Все права защищены.</p>
		</Reveal>
	</footer>
)
export default Footer
