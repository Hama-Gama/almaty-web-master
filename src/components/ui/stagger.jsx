import { motion } from 'framer-motion'

const list = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2, // задержка между элементами
		},
	},
}

const item = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function StaggeredList() {
	return (
		<motion.ul
			variants={list}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			className='list-disc pl-6 space-y-2'
		>
			{[
				'Лендинги',
				'Визитки',
				'Корпоративные сайты',
				'Договор',
				'Сроки от 3-х дней',
			].map((text, index) => (
				<motion.li key={index} variants={item} className='text-gray-300'>
					{text}
				</motion.li>
			))}
		</motion.ul>
	)
}
