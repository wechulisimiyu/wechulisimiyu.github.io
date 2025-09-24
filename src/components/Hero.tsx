import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function Hero() {
  const skills = [
    'Branding: Websites',
    'Inventory',
    'Accounting and Payments',
    'Sales and Marketing',
    'People management',
    'We can also explore AI'
  ]

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
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

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                My tools of trade
              </h2>
              <p className="text-xl text-gray-600">
                I build/customize software for.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">
                    {skill.includes('AI') ? (
                      <strong>{skill}</strong>
                    ) : (
                      skill
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile CTA - Free consultation */}
            <div className="lg:hidden">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full"
              >
                <Link href="mailto:wechuli07@gmail.com?subject=Headstart%20Request&body=Hi%20Wechuli%2C%0A%0AI%20have%20a%20few%20ideas%20and%20would%20like%20a%20free%20consultation%20to%20discuss.%20Please%20let%20me%20know%20your%20availability.%0A%0AThanks%2C%0A%5BYour%20Name%5D">
                  Headstart — Free consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}