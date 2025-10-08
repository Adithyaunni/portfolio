"use client"

import { Reveal } from "@/components/reveal"
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi"

export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
      <Reveal>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Get in touch</h1>
      </Reveal>

      {/* <div className="grid gap-8 md:grid-cols-2"> */}
        <Reveal className="space-y-4">
          <div className="rounded-xl border p-4 grid gap-8 md:grid-cols-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adithyaunni1204@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <FiMail aria-hidden className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p>adithyaunni1204@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="rounded-xl border p-4">
            <div className="flex items-center gap-3">
              <FiPhone aria-hidden className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p>+91 8618763360</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border p-4">
              <a className="flex items-center gap-3"
                  href="https://github.com/Adithyaunni" target="_blank"
                >
                  <FiGithub aria-hidden className="h-5 w-5 text-primary" />
                <p>GitHub</p>
                </a>
          </div>
          <div className="rounded-xl border p-4">
              <a className="flex items-center gap-3"
                  href="https://www.linkedin.com/in/adithya-unni-364b8232b" target="_blank"
                >
                  <FiLinkedin aria-hidden className="h-5 w-5 text-primary" />
                <p>Linkedin</p>
                </a>
          </div>
          <div className="rounded-xl border p-4">
            <div className="flex items-center gap-3">
              <FiMapPin aria-hidden className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p>Mangalore ,Karnataka</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* <Reveal delay={80}>
          <form className="rounded-xl h-full border p-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                className="block w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="block w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                className="block w-full rounded-md border bg-background px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell me a bit about your project..."
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition cursor-pointer"
            >
              Send a message
            </button>
          </form>
        </Reveal> */}
      {/* </div> */}
    </main>
  )
}
