import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
	{
		question: 'Сколько стоит создание сайта?',
		answer:
			'Стоимость зависит от типа сайта и ваших требований. Мы подберем оптимальное решение под ваш бюджет.',
	},
	{
		question: 'Сколько времени занимает разработка?',
		answer:
			'В среднем от 3 до 10 дней. Все зависит от сложности и согласованности материалов.',
	},
	{
		question: 'Нужен ли мне хостинг и домен?',
		answer:
			'Да, для публикации сайта требуется хостинг и домен. Мы поможем с регистрацией и настройкой.',
	},
	{
		question: 'Можно ли редактировать сайт после запуска?',
		answer:
			'Да, вы сможете управлять контентом через админку или CMS. Мы предоставим инструкцию.',
	},
	{
		question: 'Какие технологии вы используете?',
		answer:
			'Мы используем React, TailwindCSS, Framer Motion и другие современные инструменты.',
	},
	{
		question: 'Сколько времени занимает разработка сайта?',
		answer:
			'В среднем от 3 до 10 рабочих дней, в зависимости от сложности и объёма.',
	},
	{
		question: 'Предоставляете ли вы поддержку после запуска?',
		answer:
			'Да, мы предлагаем сопровождение, поддержку и обновления для вашего сайта.',
	},
]

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const toggle = (index: number) => {
		setActiveIndex(prev => (prev === index ? null : index))
	}

	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='bg-gray-50 text-gray-900 py-10 px-6 md:px-24'
			id='faq'
		>
			<h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>FAQ</h2>

			<div className='max-w-3xl mx-auto space-y-4'>
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className='border border-gray-200 rounded-xl overflow-hidden shadow-sm'
					>
						<button
							onClick={() => toggle(index)}
							className='w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition'
						>
							<span className='font-medium text-lg'>{faq.question}</span>
							<ChevronDown
								className={`transition-transform duration-300 ${
									activeIndex === index ? 'rotate-180' : ''
								}`}
							/>
						</button>

						<AnimatePresence initial={false}>
							{activeIndex === index && (
								<motion.div
									key='content'
									layout
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
									className='px-4 pb-4 text-gray-600'
								>
									<p>{faq.answer}</p>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</motion.section>
	)
}
