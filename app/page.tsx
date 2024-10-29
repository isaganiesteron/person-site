import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Layers, Code, Palette } from 'lucide-react';

import Image from 'next/image';
import myImage from '@/public/isaganiesteron-image.png';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 pb-8 pt-16 md:pb-12 md:pt-24 lg:py-32">
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-4 text-center">
          <div className="flex flex-row items-center">
            <div className="w-4/12 rounded-full overflow-hidden">
              <Image
                src={myImage}
                width={400}
                height={400}
                alt="An image of Isagani Esteron with neon green background"
              />
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] text-justify pl-4">
              Hi! I'm
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {' '}
                Isagani Esteron
              </span>{' '}
              a web developer.
            </h1>
          </div>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl text-justify">
            This site is my portfolio, my resume, and a collection of my thoughts on web
            development, all rolled into one. Take a look around, and feel free to reach out if
            something catches your eye!"
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/about">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="min-w-[160px]">
            Resume
          </Button>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="w-full container mx-auto max-w-full space-y-6 bg-orange-50/50 py-8 dark:bg-orange-900/10 md:py-12 lg:py-24">
				<div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
					<h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
					<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">This template comes with everything you need to build modern web applications.</p>
				</div>
				<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
					{features.map((feature) => (
						<div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all duration-200 hover:shadow-md">
							<div className="flex h-[180px] flex-col justify-between rounded-md p-6">
								<feature.icon className="h-12 w-12 text-primary" />
								<div className="space-y-2">
									<h3 className="font-bold">{feature.title}</h3>
									<p className="text-sm text-muted-foreground">{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section> */}
    </>
  );
}

// const features = [
// 	{
// 		title: "Next.js 14",
// 		description: "Built with the latest Next.js features including app router and server components.",
// 		icon: Code,
// 	},
// 	{
// 		title: "TypeScript",
// 		description: "Type-safe code with TypeScript for better developer experience and fewer bugs.",
// 		icon: Layers,
// 	},
// 	{
// 		title: "Tailwind CSS",
// 		description: "Beautiful, responsive designs with Tailwind CSS and shadcn/ui components.",
// 		icon: Palette,
// 	},
// ]
