"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const routes = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/blog",
		label: "Blog",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/contact",
		label: "Contact",
	},
]

export default function Navigation() {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border">
			<nav className="container mx-auto max-w-4xl flex h-16 px-2 items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<span className="text-xl font-bold">Logo</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:items-center md:space-x-6">
					{routes.map((route) => (
						<Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === route.href ? "text-foreground" : "text-muted-foreground")}>
							{route.label}
						</Link>
					))}
					<ModeToggle />
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden">
					<Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
					</Button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="container mx-auto md:hidden">
					<div className="flex flex-col space-y-4 px-2 pb-4">
						{routes.map((route) => (
							<Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === route.href ? "text-foreground" : "text-muted-foreground")} onClick={() => setIsOpen(false)}>
								{route.label}
							</Link>
						))}
						<div className="pt-2">
							<ModeToggle />
						</div>
					</div>
				</div>
			)}
		</header>
	)
}
