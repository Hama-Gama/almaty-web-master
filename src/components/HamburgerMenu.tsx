import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='md:hidden z-50'>
			{/* Кнопка */}
			<button
				className='relative w-8 h-8 flex flex-col justify-between items-center'
				onClick={() => setIsOpen(!isOpen)}
			>
				<motion.span
					animate={{
						rotate: isOpen ? 45 : 0,
						y: isOpen ? 8 : 0,
					}}
					className='w-full h-[2px] bg-white block'
				/>
				<motion.span
					animate={{
						opacity: isOpen ? 0 : 1,
					}}
					className='w-full h-[2px] bg-white block'
				/>
				<motion.span
					animate={{
						rotate: isOpen ? -45 : 0,
						y: isOpen ? -8 : 0,
					}}
					className='w-full h-[2px] bg-white block'
				/>
			</button>

			{/* Меню */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: 0.4, ease: 'easeInOut' }}
						className='fixed top-0 right-0 w-3/4 h-full bg-black text-white flex flex-col items-start gap-6 p-8'
					>
						<Link to='/' onClick={() => setIsOpen(false)} className='text-lg'>
							Главная
						</Link>
						<Link
							to='/about'
							onClick={() => setIsOpen(false)}
							className='text-lg'
						>
							О нас
						</Link>
						<Link
							to='/services'
							onClick={() => setIsOpen(false)}
							className='text-lg'
						>
							Услуги
						</Link>
						<Link
							to='/contact'
							onClick={() => setIsOpen(false)}
							className='text-lg'
						>
							Контакты
						</Link>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default HamburgerMenu
