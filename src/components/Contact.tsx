import Reveal from '@/components/Reveal'

const Contact = () => (
	<section id='contact' className='py-16 px-6 max-w-xl mx-auto'>
	<Reveal>
		<h2 className='text-3xl font-semibold mb-6 text-center'>
			Свяжитесь с нами
		</h2>
		<form className='space-y-4'>
			<input
				type='text'
				placeholder='Ваше имя'
				className='w-full border px-4 py-2 rounded'
			/>
			<input
				type='email'
				placeholder='Email'
				className='w-full border px-4 py-2 rounded'
			/>
			<textarea
				placeholder='Сообщение'
				className='w-full border px-4 py-2 rounded'
			></textarea>
			<button
				type='submit'
				className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
			>
				Отправить
			</button>
		</form>
	</Reveal>
	</section>
)
export default Contact
