import Reveal from '@/components/Reveal'

const Testimonials = () => (
	<section id='testimonials' className='py-16 px-6 bg-white'>
		<Reveal>
		<h2 className='text-3xl font-semibold text-center mb-8'>Отзывы</h2>
		<div className='max-w-3xl mx-auto space-y-6'>
			<blockquote className='p-4 border-l-4 border-blue-600 bg-gray-50'>
				<p>“Очень доволен результатом, сайт получился крутым!”</p>
				<cite className='block mt-2 text-sm text-gray-500'>
					— Иван, бизнесмен
				</cite>
			</blockquote>
		</div>
		</Reveal>
	</section>
)
export default Testimonials
