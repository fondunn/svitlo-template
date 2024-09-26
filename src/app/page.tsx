import prisma from '@/lib/db'
import Link from 'next/link'

export default async function Home() {
	const homePage = await prisma.page.findUnique({
		where: { slug: '/' },
	})

	if (!homePage) {
		return (
			<div>
				Default home page, create your home page by adding it in{' '}
				<Link href='admin' className='underline text-sky-600'>
					admin panel
				</Link>
			</div>
		)
	}

	return (
		<div>
			<h1>{homePage.title}</h1>
		</div>
	)
}
