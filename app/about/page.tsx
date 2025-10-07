import { Reveal } from "@/components/reveal"
import { ResumeCard } from "@/components/resume-card"

export default function AboutPage() {
  return (
    <main className="mx-auto max-w- px-4 sm:px-6 lg:px-8 py-14">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-semibold text-balance mb-4">About Me</h1>
      </Reveal>
      <Reveal delay={60}>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I&apos;m a frontend-focused developer passionate about building clean, performant, and accessible interfaces.
          I love working with React, Next.js, TypeScript, and Tailwind CSS to ship user-centric products.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          Outside of coding, I enjoy design systems, reading about UX, and exploring ways to improve developer
          experience and team workflows.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <section className="mt-8">
          <h2 className="text-xl sm:text-2xl font-medium mb-3">Resume</h2>
          <ResumeCard />
        </section>
      </Reveal>
    </main>
  )
}
