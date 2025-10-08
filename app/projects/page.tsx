import Link from "next/link"
import { Reveal } from "@/components/reveal"

const projects = [
  {
    title: "kalavedika",
    desc: "An all-in-one platform that streamlines event registration and management with secure, scalable login, easy profile control, and inclusive real-time email/SMS updates.",
    href: "https://kalavedika.vercel.app",
    img: "/kalavedika_.png",
    tags: ["Next.js","React Native","Prisma","Neon","PostgreSQL","Tailwind","TypeScript"],
  },
  {
    title: "Pothole Detection",
    desc: "A smart system that detects road potholes using sensors or image processing, helping ensure safer and smoother transportation through real-time monitoring and reporting.",
    href: "https://github.com/Adithyaunni/pothole-detection",
    img: "/pothole-detection_.png",
    tags: ["YOLO (You Only Look Once)","Python","OpenCV","TensorFlow","NumPy","Pandas","Django",],
  },
  {
    title: "Genshin Web Info",
    desc: "Embark on an epic Genshin Impact adventure with this Next.js project, featuring dynamic routing, server-side rendering, and Tailwind CSS for fast, responsive, and visually rich gameplay data.",
    href: "https://genshinatlas.vercel.app/",
    img: "/genshinatlas.vercel.app_.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind","JavaScript","MongoDB"],
  },
  {
    title: "Youtube Watch Party",
    desc: "Enjoy watching YouTube videos with friends in sync. Create a room, share the code, and experience seamless group viewing.",
    href: "https://youtubewatchparty.vercel.app/",
    img: "/youtubewatchparty.vercel.app_ .png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind","Socket.io", "JavaScript"],
  },
  {
    title: "Elim Nation",
    desc: "Elim Nation is an event website for Enigma, showcasing schedules, highlights, and visuals to engage participants and visitors.",
    href: "https://elim-nation.vercel.app/",
    img: "/elim-nation.vercel.app_.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind","Prisma ORM", "JavaScript","MongoDB"],
  },
  {
    title: "Play Hive",
    desc: "Play Hive unites 10 classic games in a modern, responsive interface with vibrant neon visuals and smooth animations.",
    href: "https://play-hive-gamma.vercel.app/",
    img: "/play-hive-gamma.vercel.app_.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind","JavaScript"],
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
            <article className="rounded-xl border overflow-hidden hover:shadow-sm hover:scale-105 transition-all duration-500">
              <img src={p.img || "/placeholder.svg"} alt={`${p.title} preview`} className="h-48 w-full object-cover" />
              <div className="p-5 bg-black/60">
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
                    href={p.href} target="_blank"
                    className="inline-block rounded-md border border-white/70 px-3 py-1.5 text-sm hover:bg-secondary transition-colors cursor-pointer"
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
