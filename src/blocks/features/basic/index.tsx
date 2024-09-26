import Image from 'next/image'

interface Feature {
	title: string
	subtitle: string
	image: string
}
export const FeaturesBasic = () => {
	const features: Feature[] = [
		{
			title: 'Intuitive Design',
			subtitle:
				'Our user-friendly interface makes navigation a breeze, ensuring a smooth experience for all users.',
			image: '/placeholder.svg?height=300&width=400',
		},
		{
			title: 'Powerful Analytics',
			subtitle:
				'Gain valuable insights with our advanced analytics tools, helping you make data-driven decisions.',
			image: '/placeholder.svg?height=300&width=400',
		},
		{
			title: 'Seamless Integration',
			subtitle:
				'Easily connect with your favorite tools and services for a streamlined workflow.',
			image: '/placeholder.svg?height=300&width=400',
		},
	]
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container px-4 md:px-6'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
					Our Features
				</h2>
				<div className='space-y-12'>
					{features.map((feature, index) => (
						<div
							key={index}
							className={`flex flex-col md:flex-row items-center gap-6 ${
								index % 2 === 0 ? 'md:flex-row-reverse' : ''
							}`}
						>
							<div className='w-full md:w-1/2 space-y-4'>
								<h3 className='text-2xl font-bold'>{feature.title}</h3>
								<p className='text-gray-500 dark:text-gray-400'>
									{feature.subtitle}
								</p>
							</div>
							<div className='w-full md:w-1/2'>
								<Image
									src={feature.image}
									alt={feature.title}
									width={400}
									height={300}
									className='rounded-lg object-cover w-full h-auto'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
