import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function HeroIntro() {
  const emailTemplates = [
    {
      label: 'Mail client',
      href: 'mailto:wechuli07@gmail.com?subject=Website%20Inquiry%20from%20wechulisimiyu.github.io&body=Hi%20Wechuli%2C%0A%0AI%20saw%20your%20site%20and%20would%20like%20to%20talk%20about%20a%20project.%20Please%20get%20back%20to%20me%20when%20you%27re%20available.%0A%0AThanks%2C%0A',
      variant: 'outline' as const
    },
    {
      label: 'Gmail',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=wechuli07@gmail.com&su=Website%20Inquiry%20from%20wechulisimiyu.github.io&body=Hi%20Wechuli%2C%0A%0AI%20saw%20your%20site%20and%20would%20like%20to%20talk%20about%20a%20project.%20Please%20get%20back%20to%20me%20when%20you%27re%20available.%0A%0AThanks%2C%0A',
      variant: 'outline' as const,
      external: true
    },
    {
      label: 'Outlook',
      href: 'https://outlook.live.com/owa/?path=/mail/action/compose&to=wechuli07@gmail.com&subject=Website%20Inquiry%20from%20wechulisimiyu.github.io&body=Hi%20Wechuli%2C%0A%0AI%20saw%20your%20site%20and%20would%20like%20to%20talk%20about%20a%20project.%20Please%20get%20back%20to%20me%20when%20you%27re%20available.%0A%0AThanks%2C%0A',
      variant: 'outline' as const,
      external: true
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Are zombies supposed to be full of life?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Wechuli Simiyu, a Rotarian, a medical doctor and a self taught software developer.
              Currently using these skills to improve access to basic education, and healthcare.
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90"
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Let&apos;s talk more
              </Link>
            </Button>
            <p className="text-sm text-gray-500">Send me an email</p>
          </div>

          {/* Email Options - Desktop Only */}
          <div className="hidden lg:flex items-center gap-4 pt-4">
            <p className="text-sm text-gray-500">Or open compose in:</p>
            <div className="flex gap-2">
              {emailTemplates.map((template) => (
                <Button
                  key={template.label}
                  asChild
                  variant={template.variant}
                  size="sm"
                >
                  <Link
                    href={template.href}
                    {...(template.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {template.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
