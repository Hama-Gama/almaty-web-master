import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const menuVariants = {
	hidden: { x: '100%' },
	visible: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 70,
			damping: 20,
			staggerChildren: 0.2,
			delayChildren: 0.5,
		},
	},
	exit: { x: '100%', transition: { duration: 0.3 } },
}

const itemVariants = {
	hidden: { opacity: 0, x: 30 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	// Esc закрытие
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false)
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [])

	// Клик вне меню
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isOpen])

	return (
		<div className='md:hidden z-50'>
			{/* Hamburger Icon */}
			<button
				className='relative w-8 h-8 flex flex-col justify-between items-center z-[60]'
				onClick={() => setIsOpen(prev => !prev)}
			>
				<motion.span
					className='w-full h-[2px] bg-white origin-center'
					animate={{
						rotate: isOpen ? 45 : 0,
						y: isOpen ? 8 : 0,
					}}
					transition={{ duration: 0.3 }}
				/>
				<motion.span
					className='w-full h-[2px] bg-white'
					animate={{ opacity: isOpen ? 0 : 1 }}
					transition={{ duration: 0.3 }}
				/>
				<motion.span
					className='w-full h-[2px] bg-white origin-center'
					animate={{
						rotate: isOpen ? -45 : 0,
						y: isOpen ? -8 : 0,
					}}
					transition={{ duration: 0.3 }}
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<>
						{/* Затемнение */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							exit={{ opacity: 0 }}
							className='fixed inset-0 bg-black z-40'
						/>

						{/* Меню */}
						<motion.div
							ref={menuRef}
							variants={menuVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
							className='fixed top-0 right-0 w-3/4 h-full bg-white text-black flex flex-col items-start px-8 py-16 z-50'
						>
							{['Главная', 'О нас', 'Услуги', 'Контакты'].map(
								(label, index) => (
									<motion.div key={label} variants={itemVariants}>
										<Link
											to={label === 'Главная' ? '/' : `/${label.toLowerCase()}`}
											className='block text-lg mb-4 hover:text-blue-500 transition'
											onClick={() => setIsOpen(false)}
										>
											{label}
										</Link>
									</motion.div>
								)
							)}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}

export default HamburgerMenu
