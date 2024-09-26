import prisma from '@/lib/db'
import Link from 'next/link'

export default async function AdminPagesPage() {
	try {
		const pages = await prisma.page.findMany({
			orderBy: { createdAt: 'desc' },
		})
		if (!pages) throw new Error()
		if (!pages.length) throw new Error()
		return (
			<div>
				<div>
					<Link href='pages/create'>add</Link>
				</div>
				<div className='flex flex-col gap-2'>
					{pages.map(page => (
						<div key={page.id} className='flex gap-2 p-2'>
							<div>{page.id}</div>
							<div>{page.title}</div>
							<div>
								<Link href={page.slug} className='px-2 underline text-sky-600'>
									{page.slug}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	} catch (error) {
		return (
			<div>
				<div>
					<Link href='pages/create'>add</Link>
				</div>
				<div className='text-stone-200'>
					there is no pages created yet, please add first
				</div>
			</div>
		)
	}
}
