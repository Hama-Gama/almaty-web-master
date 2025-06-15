// components/PortfolioSection.tsx
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const works = [
	{ title: 'Лендинг', image: '/portfolio/1.jpg' },
	{ title: 'Интернет-магазин', image: '/portfolio/2.jpg' },
	{ title: 'Корпоративный сайт', image: '/portfolio/3.jpg' },
	{ title: 'Портфолио', image: '/portfolio/4.jpg' },
	{ title: 'Блог', image: '/portfolio/5.jpg' },
]

export default function PortfolioSection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<section className='py-20 px-6 md:px-24 bg-white text-black' ref={ref}>
			<div className='text-center mb-12'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>Наши работы</h2>
				<p className='text-gray-500'>
					Мы гордимся каждым проектом, который мы реализуем. Вот некоторые из
					них:
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{works.map((work, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{
							duration: 0.6,
							ease: 'easeOut',
							delay: index * 0.1,
						}}
						className='rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition'
					>
						<img
							src={work.image}
							alt={work.title}
							className='w-full h-64 object-cover'
						/>
						<div className='p-4'>
							<h3 className='text-xl font-semibold'>{work.title}</h3>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}
