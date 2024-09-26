import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default async function AdminPagesCreatePage() {
	async function addPage(formData: FormData) {
		'use server'
		const title = formData.get('title') as string
		const slug = formData.get('slug') as string
		// const content = formData.get('content') as string

		await prisma.page.create({
			data: { title, slug },
		})

		revalidatePath('/admin/pages')
		redirect('/admin/pages')
	}
	return (
		<div>
			<h1>Create page</h1>
			<form action={addPage} className='flex flex-col gap-4 max-w-xl'>
				<input
					name='title'
					placeholder='Title'
					required
					className='text-stone-900'
				/>
				<input
					name='slug'
					placeholder='Slug'
					required
					className='text-stone-900'
				/>
				<Button type='submit' variant='outline'>
					Add Page
				</Button>
			</form>
		</div>
	)
}
