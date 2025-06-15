// src/components/Header.tsx
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' // если используешь react-router
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import HamburgerMenu from './HamburgerMenu'


const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [showHeader, setShowHeader] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [language, setLanguage] = useState('ru') // ru / en

	// Скролл поведение
	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY
			setShowHeader(currentScroll < lastScrollY || currentScroll < 100)
			setLastScrollY(currentScroll)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [lastScrollY])

	const handleLanguageToggle = () => {
		setLanguage(prev => (prev === 'ru' ? 'en' : 'ru'))
	}

	const flagEmoji = language === 'ru' ? '🇷🇺' : '🇺🇸'

	return (
		<AnimatePresence>
			{showHeader && (
				<motion.header
					key='header'
					initial={{ y: -80, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -80, opacity: 0 }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
					className='flex items-center justify-between px-6 py-4 bg-transparent shadow-md sticky top-0 z-50'
				>
					<Link to='/' className='text-xl font-bold text-gray-800'>
						AWM
					</Link>

					<nav className='hidden md:flex gap-6'>
						<Link to='/' className='hover:text-blue-600 transition'>
							Главная
						</Link>
						<Link to='/about' className='hover:text-blue-600 transition'>
							О нас
						</Link>
						<Link to='/services' className='hover:text-blue-600 transition'>
							Услуги
						</Link>
						<Link to='/contact' className='hover:text-blue-600 transition'>
							Контакты
						</Link>
					</nav>

					<div className='flex items-center gap-2 md:gap-4'>
						{/* <Button variant='ghost' onClick={handleLanguageToggle}>
							{flagEmoji}
						</Button> */}
						<LanguageSwitcher />
						<div className='md:hidden'>
							<Button
								variant='ghost'
								size='icon'
								onClick={() => setIsOpen(!isOpen)}
							>
								<div className='md:hidden'>
									<HamburgerMenu />
								</div>
							</Button>
						</div>
					</div>

					{/* Мобильное меню */}
					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.25 }}
								className='absolute top-16 left-0 w-full bg-transparent flex flex-col items-start px-6 py-4 shadow-md md:hidden z-40'
							>
								<Link to='/' className='py-2' onClick={() => setIsOpen(false)}>
									Главная
								</Link>
								<Link
									to='/about'
									className='py-2'
									onClick={() => setIsOpen(false)}
								>
									О нас
								</Link>
								<Link
									to='/services'
									className='py-2'
									onClick={() => setIsOpen(false)}
								>
									Услуги
								</Link>
								<Link
									to='/contact'
									className='py-2'
									onClick={() => setIsOpen(false)}
								>
									Контакты
								</Link>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.header>
			)}
		</AnimatePresence>
	)
}

export default Header