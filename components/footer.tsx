export default function Footer() {
	return (
		<footer className="w-full border-t bg-background">
			<div className="container mx-auto max-w-4xl flex h-16 items-center justify-between py-4 px-2">
				<p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
				<div className="flex items-center space-x-4">
					<a href="#" className="text-sm text-muted-foreground hover:text-foreground">
						Privacy
					</a>
					<a href="#" className="text-sm text-muted-foreground hover:text-foreground">
						Terms
					</a>
				</div>
			</div>
		</footer>
	)
}
