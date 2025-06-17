import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'



const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
  
	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-white text-[#5d5d5e] p-4 shadow-md'>
			<div className='container mx-auto md:p-2 flex md:flex-row items-center justify-between'>
				<div>
					<h1 className='text-2xl font-bold'>AWM</h1>
				</div>

				{/* Mobile navigation */}
				<div className='md:hidden'>
					<Hamburger toggled={isOpen} toggle={setIsOpen} direction='right' />
				</div>

				{/* Desktop navigation */}
				<nav className='hidden md:flex gap-4'>
					<a href='#home' className='hover:underline'>
						Главная
					</a>
					<a href='#about' className='hover:underline'>
						О нас
					</a>
					<a href='#portfolio' className='hover:underline'>
						Наши работы
					</a>
					<a href='#faq' className='hover:underline'>
						FAQ
					</a>
					<a href='#testimonials' className='hover:underline'>
						Отзывы
					</a>
					<a href='#contact' className='hover:underline'>
						Контакты
					</a>
				</nav>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`md:hidden px-4 overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? 'max-h-60 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
				}`}
			>
				<div className='text-xl flex flex-col gap-2'>
					<a
						href='#home'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Главная
					</a>
					<a
						href='#about'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						О нас
					</a>
					<a
						href='#portfolio'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Наши работы
					</a>
					<a
						href='#faq'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						FAQ
					</a>
					<a
						href='#testimonials'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Отзывы
					</a>
					<a
						href='#contact'
						onClick={() => setIsOpen(false)}
						className='hover:underline'
					>
						Контакты
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header
