import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import Icons from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Hero = async () => {
  return (
    <div className="relative isolate overflow-hidden min-h-screen flex items-center justify-center">
    <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
      </svg>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
    </svg>
    <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-10rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
      <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}>
      </div>
    </div>
    <div className="flex h-screen items-center justify-center px-10">
      <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl">
      <h1 className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text font-bold tracking-tight text-transparent mx-auto max-w-4xl font-display text-2xl dark:text-gray-300 sm:text-7xl">
      Create Stunning AI-Powered Presentations in Minutes {" "}
    <span className="relative whitespace-nowrap bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text font-bold tracking-tight text-transparent mx-auto max-w-4xl font-display text-2xl dark:text-gray-300 sm:text-7xl text-white-600">with</span>
    <span className="relative whitespace-nowrap text-sky-500 dark:text-sky-300">
      <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-sky-500 dark:fill-sky-300/60" preserveAspectRatio="none">
        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
      </svg>
      <span className="relative">IntelliSlide-AI</span>
    </span>
  </h1>
  <div className="mt-6">
     <Balancer>
     Turn your ideas into professional PowerPoint slides in seconds! Simply enter a topic, select the number of slides, and let AI generate a fully structured, customizable presentation—available in multiple languages.
     </Balancer>
  </div>
     <div
        className={cn(
          'mx-auto mt-6 flex items-center justify-center space-x-4',
      )}
      >
        <Link
          href="/generate"
          className={cn(buttonVariants(), 'gap-x-2')}
          rel="noopener noreferrer"
        >
          Generate Your Presentation
          </Link>
          <Link
            href="https://github.com/engraya/intelliSlide-ai"
            className={cn(buttonVariants({ variant: 'outline' }), 'gap-x-2')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.star className={cn('h-4 w-4')} />
            <span>on</span>
            <Icons.gitHub className={cn('h-4 w-4')} />
          </Link>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default Hero
