"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	const setThemeWithColor = (theme: string, color: string) => {
		document.querySelector("html")?.classList.remove("light", "system", "dark", "theme-orange", "theme-rose", "theme-green", "theme-blue", "theme-purple", "theme-yellow")
		document.querySelector("html")?.classList.add(`${theme}`, `theme-${color}`)
		setTheme(theme)
	}

	if (!mounted) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => setThemeWithColor(theme ? theme : "system", "orange")}>🟧 Orange</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeWithColor(theme ? theme : "system", "rose")}>🟥 Rose</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeWithColor(theme ? theme : "system", "green")}>🟩 Green</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeWithColor(theme ? theme : "system", "blue")}>🟦 Blue</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeWithColor(theme ? theme : "system", "purple")}>🟪 Purple</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setThemeWithColor(theme ? theme : "system", "yellow")}>🟨 Yellow</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
