import AdminSidebar from '@/components/admin/sidebar'
import '@/styles/globals.css'
import { PropsWithChildren } from 'react'
export default async function AdminLayout({ children }: PropsWithChildren) {
	return (
		<div className='flex h-screen'>
			<AdminSidebar />
			<main className='flex-1 overflow-y-auto p-4 md:p-8'>{children}</main>
		</div>
	)
}
