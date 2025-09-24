import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Building() {
  const projects = [
    {
      id: 'juvenotes',
      title: 'Juvenotes',
      description: 'An aggregated platform for tertiary healthcare education, built for the African Healthcare System.',
      image: '/juvenotes.webp',
      alt: 'Juvenotes logo'
    }
  ]

  return (
    <section id="building" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bob the Builder
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            I fancy myself an innovator in the making. With support and help, I am building...
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note: This section could be expanded as more projects are added */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            More innovative projects coming soon...
          </p>
        </div>
      </div>
    </section>
  )
}