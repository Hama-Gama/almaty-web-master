import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const works = [
	{ title: 'Лендинг', image: '/portfolio/1.jpg' },
	{ title: 'Интернет-магазин', image: '/portfolio/2.jpg' },
	{ title: 'Корпоративный сайт', image: '/portfolio/3.jpg' },
	{ title: 'Портфолио', image: '/portfolio/4.jpg' },
	{ title: 'Блог', image: '/portfolio/5.jpg' },
]

export default function Portfolio() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<motion.section
			id='portfolio'
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='py-14 px-6 md:px-24 bg-white text-black'
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-center mb-12'
			>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>Наши работы</h2>
				<p className='text-gray-500 max-w-xl mx-auto'>
					Мы гордимся каждым проектом, который реализуем. Вот некоторые из них:
				</p>
			</motion.div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{works.map((work, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.5,
							ease: 'easeOut',
							delay: index * 0.15,
						}}
						className='rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-[1.03] transition-transform duration-300'
					>
						<div className='relative overflow-hidden'>
							<img
								src={work.image}
								alt={work.title}
								className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
							/>
							<div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
								<span className='text-white text-lg font-medium'>
									{work.title}
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	)
}
