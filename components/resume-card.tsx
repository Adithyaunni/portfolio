"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FiDownload, FiExternalLink, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi"

export function ResumeCard() {
  const resumePath = "/nithya-resume.pdf"

  return (
    <Card className="bg-card text-card-foreground border-border">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Adithya Unni</CardTitle>
        <p className="text-sm text-muted-foreground">Frontend Engineer • React | Next.js | TypeScript</p>
      </CardHeader>

      <CardContent className="grid gap-3">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <FiBriefcase aria-hidden className="h-4 w-4" />
            Open to Opportunities
          </span>
          <span className="inline-flex items-center gap-2">
            <FiMapPin aria-hidden className="h-4 w-4" />
            Remote • Mangalore
          </span>
          <a
            href="adithayunni1204@gmail.com"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            <FiMail aria-hidden className="h-4 w-4" />
            adithyaunni1204@gmail.com
            <span className="sr-only">Email</span>
          </a>
        </div>

        <p className="leading-relaxed text-sm sm:text-base text-muted-foreground">
          Passionate engineer focused on building fast, accessible, and delightful web experiences. I craft scalable
          frontends with strong attention to UX and design systems.
        </p>

        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
          <li>Passionate about crafting React apps that look great and run fast</li>
          <li>Developed dashboards, marketing sites, and component libraries</li>
          <li>Mentors teammates in testing, performance, and accessibility</li>
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href={resumePath}
          download="Adithya_Unni_Resume.pdf"
          className="w-full sm:w-auto"
          aria-label="Download resume as PDF"
        >
          <Button className="w-full cursor-pointer" variant="default">
            <FiDownload className="mr-2 h-4 w-4" aria-hidden />
            Download Resume
          </Button>
        </a>

        <a
          href={resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
          aria-label="Open resume in new tab"
        >
          <Button className="w-full cursor-pointer hover:scale-[1.02] transition-transform" variant="secondary">
            <FiExternalLink className="mr-2 h-4 w-4" aria-hidden />
            View Online
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
