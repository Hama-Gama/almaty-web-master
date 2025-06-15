import Reveal from '@/components/Reveal'

const About = () => (
	<section id='about' className='relative z-10 py-16 px-6 max-w-4xl mx-auto'>
		<Reveal direction='left'>
			<h2 className='text-3xl font-semibold mb-4'>О нас</h2>
			<p className='text-gray-700'>
				Мы — команда разработчиков, помогаем бизнесу запускать онлайн-продукты,
				сайты и сервисы с упором на скорость, UX и результат.
			</p>
		</Reveal>
	</section>
)
export default About
