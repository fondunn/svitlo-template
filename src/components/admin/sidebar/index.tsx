'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
	FileText,
	LayoutDashboard,
	LogOut,
	Menu,
	Settings,
	Users,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const sidebarItems = [
	{ name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
	{ name: 'Pages', href: '/admin/pages', icon: FileText },
	{ name: 'Users', href: '/admin/users', icon: Users },
	{ name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()

	const SidebarContent = (
		<ScrollArea className='h-full py-6 pl-4 pr-6'>
			<h2 className='mb-4 px-2 text-lg font-semibold tracking-tight'>
				Admin Panel
			</h2>
			<div className='space-y-1'>
				{sidebarItems.map(item => (
					<Button
						key={item.name}
						asChild
						variant={pathname === item.href ? 'secondary' : 'ghost'}
						className='w-full justify-start'
					>
						<Link href={item.href}>
							<item.icon className='mr-2 h-4 w-4' />
							{item.name}
						</Link>
					</Button>
				))}
				<Button variant='ghost' className='w-full justify-start'>
					<LogOut className='mr-2 h-4 w-4' />
					Sign Out
				</Button>
			</div>
		</ScrollArea>
	)

	return (
		<>
			<aside className='hidden w-64 shrink-0 border-r bg-background md:block'>
				{SidebarContent}
			</aside>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='fixed left-4 top-4 z-40 md:hidden'
					>
						<Menu className='h-4 w-4' />
						<span className='sr-only'>Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side='left' className='w-64 p-0'>
					{SidebarContent}
				</SheetContent>
			</Sheet>
		</>
	)
}
