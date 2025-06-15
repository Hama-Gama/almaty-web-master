import Header from '@/components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-100'>
			<Router>
				<Header />
				<main className='flex-1'>
					<Routes>
						<Route path='/' element={<Home>Главная страница</Home>} />
						<Route path='/about' element={<About>О нас</About>} />
						<Route path='/services' element={<Services>Услуги</Services>} />
						<Route path='/contact' element={<Testimonials>Контакты</Testimonials>} />
						<Route path='/contact' element={<Contact>Контакты</Contact>} />
						<Route path='/contact' element={<Footer>Контакты</Footer>} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</div>
	)
}

export default App
