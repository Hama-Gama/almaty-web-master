// src/sections/Testimonials.tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFlip } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/effect-flip' // 👈 обязательно для flip

const testimonials = [
	{
		name: 'Айгуль Т.',
		role: 'Предприниматель',
		text: 'Спасибо за качественный сайт! Всё сделали быстро и профессионально.',
		avatar: '/review/1.png',
	},
	{
		name: 'Марат К.',
		role: 'Владелец студии массажа',
		text: 'Команда учла все пожелания. Получился стильный и понятный сайт.',
		avatar: '/review/2.png',
	},
	{
		name: 'Анна Р.',
		role: 'Косметолог',
		text: 'Работаем уже не первый раз — всегда всё на высшем уровне.',
		avatar: '/review/3.png',
	},
	{
		name: 'Марат К.',
		role: 'Владелец студии массажа',
		text: 'Команда учла все пожелания. Получился стильный и понятный сайт.',
		avatar: '/review/4.png',
	},
]

export default function ReviewsFlip() {
	return (
		<section id='testimonials' className='bg-gray-100 py-8 px-6 md:px-24 text-gray-900'>
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-3xl md:text-4xl font-bold text-center mb-12'
			>
				Отзывы
			</motion.h2>

			<Swiper
				modules={[ Autoplay, EffectFlip]} // 👈 добавлен EffectFlip
				effect='flip' // 👈 указываем эффект
				pagination={{ clickable: true }}
				autoplay={{ 
					delay: 2000,
					disableOnInteraction: true, // 👈 остановит autoplay при касании
				}}
				slidesPerView={1} // 👈 flip работает только с одним слайдом
				className='max-w-2xl mx-auto mb-10' // для flip лучше оставить 1 слайд
				style={{ height: '300px' }} // 👈 фиксированная высота для эффекта flip
			>
				{testimonials.map((item, i) => (
					<SwiperSlide key={i}>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.2 }}
							className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center pb-10'
						>
							<img
								src={item.avatar}
								alt={item.name}
								className='w-30 h-30 rounded-full object-cover mb-4'
							/>
							<p className='text-gray-700 italic mb-4'>“{item.text}”</p>
							<div className='font-semibold text-blue-600'>{item.name}</div>
							<div className='text-sm text-gray-500'>{item.role}</div>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
