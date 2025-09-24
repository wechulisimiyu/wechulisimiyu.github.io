import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSkills() {
  const skills = [
    'Branding: Websites',
    'Inventory',
    'Accounting and Payments',
    'Sales and Marketing',
    'People management',
    'We can also explore AI'
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              My tools of trade
            </h2>
            <p className="text-xl text-gray-600">I build/customize software for.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700 font-medium">
                  {skill.includes('AI') ? <strong>{skill}</strong> : skill}
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
    </section>
  )
}
