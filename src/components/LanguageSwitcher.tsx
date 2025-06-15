// src/components/LanguageSwitcher.tsx
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Flag from 'react-world-flags'

const languages = [
	{ code: 'ru', label: 'Русский' },
	{ code: 'gb', label: 'English' },
	{ code: 'kz', label: 'Қазақша' },
]

export default function LanguageSwitcher() {
	const [currentLang, setCurrentLang] = useState('ru')

	const selected = languages.find(lang => lang.code === currentLang)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' className='flex items-center gap-2 px-2'>
					<Flag
						code={currentLang.toUpperCase()}
						style={{ width: 20, height: 14, borderRadius: 2 }}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end' className='w-40'>
				{languages.map(lang => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => setCurrentLang(lang.code)}
						className='flex items-center gap-3'
					>
						<Flag
							code={lang.code.toUpperCase()}
							style={{ width: 24, height: 16, borderRadius: 3 }}
						/>
						<span>{lang.label}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
