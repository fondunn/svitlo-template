import Image from 'next/image'
import { FC } from 'react'

interface HeroBasicProps {
	content: {
		title: string
		description: string
		imageSrc: string
		actions: {
			visible: boolean
			primary: {
				label: string
				href: string
				visible: boolean
				external: boolean
			}
			secondary: {
				label: string
				href: string
				visible: boolean
				external: boolean
			}
		}
	}
}

export const HeroBasic: FC<HeroBasicProps> = ({ content }) => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background '>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
								{content.title}
							</h1>
							<p className='max-w-[600px] text-muted-foreground md:text-xl dark:text-gray-400'>
								{content.description}
							</p>
						</div>
						{content.actions.visible && (
							<div className='flex flex-col gap-2 min-[400px]:flex-row'>
								{content.actions.primary.visible && (
									<a
										className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										href={content.actions.primary.href}
										target={
											content.actions.primary.external ? '_blank' : undefined
										}
									>
										{content.actions.primary.label}
									</a>
								)}

								{content.actions.secondary.visible && (
									<a
										className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
										href={content.actions.secondary.href}
										target={
											content.actions.secondary.external ? '_blank' : undefined
										}
									>
										{content.actions.secondary.label}
									</a>
								)}
							</div>
						)}
					</div>
					<Image
						alt='Hero'
						className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
						height='550'
						src={content.imageSrc}
						width='550'
					/>
				</div>
			</div>
		</section>
	)
}
