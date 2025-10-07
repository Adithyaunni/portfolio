import Link from "next/link"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "Project Alpha",
    desc: "A modern landing page built with Next.js and Tailwind CSS.",
    href: "#",
    img: "/minimal-product-screenshot.jpg",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Project Beta",
    desc: "Dashboard with charts and interactive components.",
    href: "#",
    img: "/modern-data-dashboard.png",
    tags: ["React", "Recharts", "Accessibility"],
  },
  {
    title: "Project Gamma",
    desc: "Content-driven site with SEO-friendly architecture.",
    href: "#",
    img: "/content-site.jpg",
    tags: ["Next.js", "MDX", "SWR"],
  },
]

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Projects</h1>
      </Reveal>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 60}>
            <article className="rounded-xl border overflow-hidden hover:shadow-sm transition-shadow">
              <img src={p.img || "/placeholder.svg"} alt={`${p.title} preview`} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border px-2 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={p.href}
                    className="inline-block rounded-md border px-3 py-1.5 text-sm hover:bg-secondary transition-colors cursor-pointer"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
