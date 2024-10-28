import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
	return (
		<div className="container mx-auto max-w-4xl py-12">
			<Card>
				<CardHeader>
					<CardTitle>Contact Us</CardTitle>
					<CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<label htmlFor="first-name">First name</label>
								<Input id="first-name" placeholder="Enter your first name" />
							</div>
							<div className="space-y-2">
								<label htmlFor="last-name">Last name</label>
								<Input id="last-name" placeholder="Enter your last name" />
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="email">Email</label>
							<Input id="email" placeholder="Enter your email" type="email" />
						</div>
						<div className="space-y-2">
							<label htmlFor="message">Message</label>
							<Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
						</div>
						<Button type="submit" className="w-full">
							Send Message
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
