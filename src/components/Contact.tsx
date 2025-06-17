import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from 'react-icons/fa'
import InputMask from 'react-input-mask'

export default function ContactSection() {
	return (
		<section
			className='bg-white py-10 px-6 md:px-24 text-gray-800'
			id='contact'
		>
			<motion.h2
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='text-3xl md:text-4xl font-bold text-center mb-12'
			>
				Контакты
			</motion.h2>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
				{/* Контактная информация */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='space-y-6'
				>
					<div className='flex items-center gap-4'>
						<MapPin className='text-blue-600' />
						<span>Алматы, Казахстан</span>
					</div>
					<div className='flex items-center gap-4'>
						<Phone className='text-blue-600' />
						<a href='tel:+77001234567' className='hover:underline'>
							+7 (700) 123-45-67
						</a>
					</div>
					<div className='flex items-center gap-4'>
						<Mail className='text-blue-600' />
						<a href='mailto:info@example.com' className='hover:underline'>
							info@webmaster.kz
						</a>
					</div>

					{/* Social */}
					<div className='flex items-center gap-4'>
						<FaWhatsapp className='text-green-500' size={20} />
						<a
							href='https://wa.me/77001234567'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							WhatsApp
						</a>
					</div>
					<div className='flex items-center gap-4'>
						<FaTelegramPlane className='text-sky-500' size={20} />
						<a
							href='https://t.me/yourtelegramusername'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							Telegram
						</a>
					</div>
					<div className='flex items-center gap-4'>
						<FaInstagram className='text-pink-500' size={20} />
						<a
							href='https://instagram.com/yourprofile'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							Instagram
						</a>
					</div>
				</motion.div>

				{/* Форма */}
				<motion.form
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='space-y-4'
					onSubmit={e => {
						e.preventDefault()
						alert('Форма отправлена!')
					}}
				>
					<input
						type='text'
						placeholder='Имя'
						className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
						required
					/>
					<input
						type='tel'
						placeholder='+7 (999) 999-99-99'
						className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
						required
					/>
		
					<textarea
						placeholder='Cообщение'
						rows={5}
						className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
						required
					></textarea>
					<button
						type='submit'
						className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition'
					>
						Отправить
					</button>
				</motion.form>
			</div>
		</section>
	)
}
