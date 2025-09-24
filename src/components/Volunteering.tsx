import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ExternalLink } from 'lucide-react'

export default function Volunteering() {
  const volunteerProjects = [
    {
      id: 'rotary',
      title: 'Rotary Nairobi North',
      description: 'The Rotary Club Nairobi North is a community-focused Rotary chapter working on local service projects, youth programs, and health initiatives. I serve as the PR Director, overseeing public relations and communications to raise awareness and mobilize support.',
      image: '/RCNN.webp',
      alt: 'Rotary Nairobi North logo',
      url: 'https://www.instagram.com/rotaryclubofnairobinorth/',
      className: 'ui-logo-rcnn'
    },
    {
      id: 'lnmb',
      title: 'Leave No Medic Behind',
      description: 'The Leave No Medic Behind Charity Run is a fundraising project by the Association of Medical Students of the University of Nairobi (AMSUN) to meet the financial needs of underprivileged students in the School of Medicine.',
      image: '/lnmb.webp',
      alt: 'Leave No Medic Behind logo',
      url: 'https://lnmb-run.org/'
    }
  ]

  return (
    <section id="volunteering" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Volunteering
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {volunteerProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader>
                <div className="flex justify-start mb-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className={`object-contain ${project.className || ''}`}
                      sizes="96px"
                    />
                  </div>
                </div>
                <CardTitle>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-teal-700 transition-colors group"
                  >
                    {project.title}
                    <ExternalLink size={18} className="opacity-60 group-hover:text-teal-700 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div>
          <p className="text-lg text-gray-600">
            Want to have a conversation?{' '}
            <Link
              href="mailto:wechuli07@gmail.com?subject=Project%20Enquiry&body=Hi%20Wechuli%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20reply%20when%20convenient.%0A%0ARegards%2C%0A"
              className="text-teal-600 hover:text-teal-700 underline transition-colors font-medium"
              aria-label="Email Wechuli about a project"
            >
              Reach out
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
