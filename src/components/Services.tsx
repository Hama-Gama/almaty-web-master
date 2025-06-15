import Reveal from '@/components/Reveal'

const Services = () => {
	const services = [
		{ title: 'Разработка сайта', desc: 'Современные и адаптивные сайты' },
		{ title: 'SEO оптимизация', desc: 'Повышаем видимость в поиске' },
		{ title: 'Техническая поддержка', desc: 'Сопровождаем и обновляем' },
	]

	return (
		<section id='services' className='bg-gray-50 py-16 px-6'>
			<Reveal direction='right' delay={0.2}>
				<h2 className='text-3xl font-semibold text-center mb-8'>Наши услуги</h2>
				<div className='grid gap-6 md:grid-cols-3 max-w-6xl mx-auto'>
					{services.map((s, i) => (
						<div
							key={i}
							className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'
						>
							<h3 className='text-xl font-bold mb-2'>{s.title}</h3>
							<p className='text-gray-600'>{s.desc}</p>
						</div>
					))}
				</div>
			</Reveal>
		</section>
	)
}
export default Services
