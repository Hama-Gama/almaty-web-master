// src/components/Hero.tsx
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from '@/components/Reveal'



import StaggeredList from '@/components/ui/stagger'


const images = [
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
	'/portfolio/1.jpg',
	'/portfolio/2.jpg',
	'/portfolio/3.jpg',
	'/portfolio/4.jpg',
	'/portfolio/5.jpg',
]





export default function Hero() {
	const imageSize = 260
	const spacing = 0
	const [columns, setColumns] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth
			const columnWidth = imageSize + 5
			setColumns(Math.ceil(screenWidth / columnWidth))
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const columnImages = [...images, ...images,] // удвоим изображения для бесконечности

	return (
		<section className='relative top-0 left-0 h-screen w-screen overflow-hidden bg-black text-white z-10'>
			{/* Анимированные колонки */}
			<div className='absolute z-[-1]'>
				<div
					style={{
						top: '-50%',
						left: '-50%',
						width: '200vw',
						height: '200vh',
						transform: 'rotate(25deg)',
						transformOrigin: 'center',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '8px',
					}}
				>
					{Array.from({ length: columns }).map((_, colIndex) => {
						const direction = colIndex % 2 === 0 ? 1 : -1
						const distance = (imageSize + spacing) * images.length

						return (
							<div
								key={`col-${colIndex}`}
								className='relative'
								style={{
									width: `${imageSize}px`,
									marginRight: '0px',
									// overflow: 'hidden',
									height: '200vh',
								}}
							>
								<motion.div
									className='absolute top-0 left-0'
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
									animate={{
										y:
											direction === 1
												? [`0%`, `-${distance}px`]
												: [`-${distance}px`, `0%`],
									}}
									transition={{
										duration: 840,
										repeat: Infinity,
										ease: 'linear',
									}}
								>
									{columnImages.map((imgSrc, imgIndex) => (
										<img
											key={`img-${colIndex}-${imgIndex}`}
											src={imgSrc}
											alt=''
											className='w-[260px] h-[260px] object-cover opacity-30 rounded-xs px-0.5 py-0.5'
										/>
									))}
								</motion.div>
							</div>
						)
					})}
				</div>
			</div>

			{/* Контент Hero */}
			<div className='relative z-50 flex flex-col items-start justify-center h-full px-6 md:px-24'>
				<Reveal direction='left' delay={0.1}>
					<p className='text-base tracking-widest uppercase text-blue-400 font-semibold'>
						Almaty Web Master
					</p>
				</Reveal>
				<Reveal direction='right' delay={0.2}>
					<h1 className='mb-4 text-4xl md:text-6xl font-bold leading-tight mt-2'>
						Создание сайта <br /> в Алматы
						{/* Создание сайта <br className='hidden md:block' /> под ключ */}
					</h1>
				</Reveal>
				<StaggeredList />
				<Reveal direction='right' delay={0.3}>
					<button className='mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition'>
						Получить консультацию бесплатно →
					</button>
				</Reveal>
			</div>
		</section>
	)
}