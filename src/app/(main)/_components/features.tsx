import Balancer from 'react-wrap-balancer'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const features = [
  {
    title: "AI-Powered Presentation Generation",
    description:
      "Turn any topic into a fully structured PowerPoint presentation instantly. AI handles content, layout, and formatting for you.",
  },
  {
    title: "Multi-Language Support",
    description:
      "Generate presentations in multiple languages, including English, Spanish, French, German, Arabic, and more—ideal for global audiences.",
  },
  {
    title: "Customizable & Editable Slides",
    description:
      "Download AI-generated slides in .pptx format and modify text, design, and layout in PowerPoint, Google Slides, or Keynote.",
  },
  {
    title: "Smart Slide Structuring",
    description:
      "AI organizes slides with clear titles, bullet points, and well-structured content to ensure a logical flow and engaging presentation.",
  },
  {
    title: "Visual-Ready with Image & Chart Placeholders",
    description:
      "Each slide includes placeholders for images, charts, and other visuals, making it easy to enhance your presentation with graphics.",
  },
  {
    title: "Fast & Effortless Slide Creation",
    description:
      "Generate an entire presentation in seconds, saving you hours of manual work. AI takes care of research and slide arrangement.",
  },
  {
    title: "Seamless Download & Export",
    description:
      "Export your AI-generated presentation as a PowerPoint (.pptx) file, ready for further customization or immediate presentation.",
  },
  {
    title: "Theme & Design Optimization",
    description:
      "Choose from AI-suggested professional themes and color schemes to make your presentation visually appealing.",
  },
  {
    title: "Real-Time Collaboration & Cloud Storage",
    description:
      "Collaborate with your team in real time, store presentations in the cloud, and access them anytime from any device.",
  }
];





const Features = () => {
  return (
    <section
      id="features"
      className={cn(
        'container space-y-6 rounded-md py-8',
        'md:py-12 px-12',
        'lg:py-16 px-16',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center',
        )}
      >
        <h2
          className={cn(
            'bg-gradient-to-br from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent drop-shadow-sm',
            'dark:from-gray-100 dark:to-gray-800',
            'md:text-6xl md:leading-tight',
          )}
        >
          Features
        </h2>
        <p
          className={cn(
            'max-w-[85%] leading-normal text-muted-foreground',
            'sm:text-lg',
            'sm:leading-7',
          )}
        >
      <Balancer>
        Transform your ideas into stunning presentations with AI-powered slide generation. Simply input your topic, and IntelliSlide-AI crafts a professional, customizable PowerPoint for you in seconds.
      </Balancer>

        </p>
      </div>
      <div
        className={cn(
          'grid justify-center gap-4',
          'sm:grid-cols-2',
          'md:grid-cols-3',
        )}
      >
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={cn(
              'flex flex-col justify-between rounded-md p-6',
            )}
          >
            {/* <feature.icon className={cn('h-12 w-12')} /> */}
            <div className={cn('space-y-2')}>
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
