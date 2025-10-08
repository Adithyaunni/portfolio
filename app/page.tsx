import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { FiArrowRight } from "react-icons/fi"
import { title } from "process"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiGit, SiGithub } from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";

export default function HomePage() {

  const highlights = [
    { title: "Hands-on Project Experience", description: "Built multiple real-world web apps showcasing problem-solving and design thinking." },
    { title: "Clean & Efficient Code", description: "Focused on writing readable, maintainable, and scalable code." },
    { title: "Passion for Innovation", description: "Driven by curiosity to learn new technologies and improve user experiences." },  
  ]

  const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <Reveal className="space-y-4">
          <p className="text-lg tracking-wide  text-muted-foreground">Hello, I&apos;m</p>
          <h1 className="text-balance text-4xl sm:text-5xl font-semibold">
            Adithya Unni
            <span className="block text-primary">Frontend Developer</span>
          </h1>
          <p className="text-pretty text-muted-foreground leading-relaxed">
            I craft responsive, accessible web experiences with modern technologies. Here&apos;s a selection of my work
            and skills.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 cursor-pointer hover:opacity-90 transition"
            >
              View Projects <FiArrowRight />
            </Link>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 cursor-pointer hover:bg-secondary transition"
            >
              Contact Me
            </Link>
          </div>
        </Reveal>
      </section>

      <div style={{ height: '80px', width: '80%', position: 'relative', overflow: 'hidden',placeItems: 'center', display: 'grid', marginTop: '60px', marginInline: 'auto' }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>

      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        {highlights.map((e,i) => (
          <Reveal key={i} delay={(i+1)* 80}>
            <article className="rounded-xl border p-5 hover:shadow-sm transition-shadow cursor-pointer">
              <h3 className="font-medium mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.description}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </main>
  )
}
