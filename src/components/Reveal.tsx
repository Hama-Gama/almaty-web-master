import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface RevealProps {
	children: React.ReactNode
	direction?: 'left' | 'right' | 'up' | 'down'
	delay?: number
}

export default function Reveal({
	children,
	direction = 'up',
	delay = 0,
}: RevealProps) {
	const ref = useRef(null)
	const inView = useInView(ref, { once: true })
	const animation = useAnimation()

	useEffect(() => {
		if (inView) {
			animation.start({ opacity: 1, x: 0, y: 0 })
		}
	}, [inView, animation])

	// Начальное смещение в зависимости от направления
	const initialPosition = {
		left: { x: -50, y: 0 },
		right: { x: 50, y: 0 },
		up: { x: 0, y: 40 },
		down: { x: 0, y: -40 },
	}

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, ...initialPosition[direction] }}
			animate={animation}
			transition={{ duration: 0.6, ease: 'easeOut', delay }}
		>
			{children}
		</motion.div>
	)
}
