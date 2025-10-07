import { Reveal } from "@/components/reveal"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
} from "react-icons/si"

const skills = [
  { 
    name: "HTML5", 
    icon: SiHtml5,
    color: "group-hover:text-orange-600",
    border: "hover:border-orange-500/50",
    borderColor: "group-hover:border-orange-500/50",
    shadowColor: "group-hover:shadow-orange-500/20"
  },
  { 
    name: "CSS3", 
    icon: SiCss3,
    color: "group-hover:text-blue-600",
    border: "hover:border-blue-500/50",
    borderColor: "group-hover:border-blue-500/50",
    shadowColor: "group-hover:shadow-blue-500/20"
  },
  { 
    name: "JavaScript", 
    icon: SiJavascript,
    color: "group-hover:text-yellow-500",
    border: "hover:border-yellow-500/50",
    borderColor: "group-hover:border-yellow-500/50",
    shadowColor: "group-hover:shadow-yellow-500/20"
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript,
    color: "group-hover:text-blue-700",
    border: "hover:border-blue-600/50",
    borderColor: "group-hover:border-blue-600/50",
    shadowColor: "group-hover:shadow-blue-600/20"
  },
  { 
    name: "React", 
    icon: SiReact,
    color: "group-hover:text-cyan-500",
    border: "hover:border-cyan-500/50",
    borderColor: "group-hover:border-cyan-500/50",
    shadowColor: "group-hover:shadow-cyan-500/20"
  },
  { 
    name: "Next.js", 
    icon: SiNextdotjs,
    color: "group-hover:text-white",
    border: "hover:border-white",
    borderColor: "group-hover:border-white",
    shadowColor: "group-hover:shadow-white"
  },
  { 
    name: "Tailwind CSS", 
    icon: SiTailwindcss,
    color: "group-hover:text-teal-500",
    border: "hover:border-teal-500/50",
    borderColor: "group-hover:border-teal-500/50",
    shadowColor: "group-hover:shadow-teal-500/20"
  },
  { 
    name: "Node.js", 
    icon: SiNodedotjs,
    color: "group-hover:text-green-600",
    border: "hover:border-green-500/50",
    borderColor: "group-hover:border-green-500/50",
    shadowColor: "group-hover:shadow-green-500/20"
  },
  { 
    name: "Git", 
    icon: SiGit,
    color: "group-hover:text-red-600",
    border: "hover:border-red-500/50",
    borderColor: "group-hover:border-red-500/50",
    shadowColor: "group-hover:shadow-red-500/20"
  },
  { 
    name: "GitHub", 
    icon: SiGithub,
    color: "group-hover:text-green-700",
    border: "hover:border-green-700/50",
    borderColor: "group-hover:border-green-700/50",
    shadowColor: "group-hover:shadow-green-700/20"
  },
]

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-8">Skills</h1>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ name, icon: Icon, color,border, borderColor, shadowColor }, idx) => (
          <Reveal key={name} delay={idx * 40}>
            <div className={`group rounded-xl border ${border} p-5 flex items-center gap-4 backdrop-blur-sm bg-background/50 transition-all duration-500 ease-out cursor-pointer hover:shadow-xl hover:scale-[1.02] hover:bg-transparent`}>
              <div className={`grid place-items-center h-12 w-12 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm ${borderColor} ${shadowColor} transition-all duration-500 ease-out group-hover:shadow-lg group-hover:bg-transparent`}>
                <Icon className={`h-6 w-6 text-muted-foreground ${color} transition-all duration-500 ease-out} aria-hidden `}/>
              </div>
              <div>
                <h3 className="font-medium transition-all duration-500 ease-out">{name}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  )
}