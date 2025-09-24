import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/wechuli-eugene/',
      label: 'LinkedIn profile',
      icon: 'fa-brands fa-linkedin-in',
      ariaLabel: 'linkedin profile'
    },
    {
      href: 'https://www.instagram.com/wechu_._/',
      label: 'Instagram account',
      icon: 'fa-brands fa-instagram',
      ariaLabel: 'instagram account'
    },
    {
      href: 'https://twitter.com/wechuli_',
      label: 'Twitter account',
      icon: 'fa-brands fa-x-twitter',
      ariaLabel: 'twitter account'
    },
    {
      href: 'mailto:wechuli07@gmail.com?subject=Website%20Contact&body=Hi%20Wechuli%2C%0A%0AI%20found%20your%20site%20and%20wanted%20to%20reach%20out.%0A',
      label: 'Email Wechuli',
      icon: 'fa-regular fa-envelope',
      ariaLabel: 'Email Wechuli'
    }
  ]

  return (
    <footer id="footer" role="contentinfo" className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-500 order-2 md:order-1">
            © Wechuli Simiyu
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6 order-1 md:order-2">
            {socialLinks.map((social) => (
              <Link
                key={social.ariaLabel}
                href={social.href}
                aria-label={social.ariaLabel}
                title={social.label}
                className="text-gray-400 hover:text-[var(--brand-primary)] transition-colors p-2"
                {...(social.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <i className={`${social.icon} text-xl`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}