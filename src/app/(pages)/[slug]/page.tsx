import { chunk } from '@/blocks'
import prisma from '@/lib/db'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
export default async function DynamicPageBySlug({
	params,
}: {
	params: { slug: string }
}) {
	const page = await prisma.page.findUnique({
		where: { slug: `/${params.slug}` },
	})

	if (!page) {
		notFound()
	}
	const blockChain = [
		{
			parent: 'hero',
			variant: 'basic',
			content: {
				title: 'Welcome to template svitlo',
				description:
					'Discover amazing features and boost your productivity. Our platform offers cutting-edge solutions for all your needs.',
				actions: {
					visible: true,
					primary: {
						visible: true,
						label: 'Get Started',
						href: '/',
						external: false,
					},
					secondary: {
						visible: true,
						label: 'Read more',
						href: '/',
						external: false,
					},
				},
				imageSrc:
					'https://images.unsplash.com/photo-1524638067-feba7e8ed70f?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			},
		},
		{
			parent: 'features',
			variant: 'basic',
			content: [],
		},
	]
	return (
		<>
			{blockChain.map(({ parent, variant, content }, index) => {
				const GeneratedChunk = chunk({
					parent,
					variant,
					content,
				})
				if (!GeneratedChunk) return null

				return <Fragment key={index}>{GeneratedChunk}</Fragment>
			})}
		</>
	)
}
