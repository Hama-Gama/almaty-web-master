// src/sections/Testimonials.tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
	{
		name: 'Айгуль Т.',
		role: 'Предприниматель',
		text: 'Спасибо за качественный сайт! Всё сделали быстро и профессионально.',
		avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
	},
	{
		name: 'Марат К.',
		role: 'Владелец студии массажа',
		text: 'Команда учла все пожелания. Получился стильный и понятный сайт.',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
	{
		name: 'Анна Р.',
		role: 'Косметолог',
		text: 'Работаем уже не первый раз — всегда всё на высшем уровне.',
		avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
	},
	{
		name: 'Марат К.',
		role: 'Владелец студии массажа',
		text: 'Команда учла все пожелания. Получился стильный и понятный сайт.',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
	},
]

export default function Testimonials() {
	return (
		<section className='bg-gray-100 py-20 px-6 md:px-24 text-gray-900'>
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
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={{ delay: 2000 }}
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				className='max-w-6xl mx-auto'
			>
				{testimonials.map((item, i) => (
					<SwiperSlide key={i}>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.2 }}
							className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center mb-9'
						>
							<img
								src={item.avatar}
								alt={item.name}
								className='w-20 h-20 rounded-full object-cover mb-4'
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
