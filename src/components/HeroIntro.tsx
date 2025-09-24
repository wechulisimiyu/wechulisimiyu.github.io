'use client'

import React, { useState } from 'react'
import { Mail, ClipboardCheck, Clipboard } from 'lucide-react'

export default function HeroIntro() {
  const email = 'wechuli07@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }
    } catch {
      // fallback: select text
      const el = document.getElementById('email-text')
      if (el) {
        const range = document.createRange()
        range.selectNodeContents(el)
        const sel = window.getSelection()
        sel?.removeAllRanges()
        sel?.addRange(range)
      }
    }
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col items-start justify-center gap-6">
          <div className="space-y-6 w-full text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Are zombies supposed to be full of life?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              I am Wechuli Simiyu, a Medical Doctor and a Rotarian who also writes software.<br />
              I taught myself programming to build solutions that expand access to education and healthcare.<br />
              Currently at <a href="https://edencaremedical.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Eden Care Medical</a>, I am part of a team developing software that reduces costs from fraud, waste, and abuse in health insurance.
            </p>
          </div>
          {/* Primary CTA */}
          <a
            href={`mailto:${email}?subject=Project%20Enquiry&body=Hi%20Wechuli%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20reply%20when%20convenient.%0A%0ARegards%2C%0A[Your%20Name]`}
            className="bg-teal-700 text-white text-base font-bold shadow-lg transition-colors duration-200 hover:bg-teal-800 rounded-full px-6 py-3 w-fit flex items-center justify-start min-w-0"
          >
            <Mail className="mr-2 h-4 w-4" />
            Send me an Email
          </a>
          {/* Secondary Option */}
          <div className="flex flex-col items-start gap-2 text-sm text-gray-600">
            <span className="">Or copy:</span>
            <div className="flex items-center gap-2">
              <span
                id="email-text"
                className="select-text bg-gray-100 px-2 py-1 rounded text-gray-800"
                tabIndex={0}
              >
                {email}
              </span>
              <button
                type="button"
                aria-label="Copy email address"
                onClick={handleCopy}
                className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition"
              >
                {copied ? <ClipboardCheck className="h-4 w-4 text-green-600" /> : <Clipboard className="h-4 w-4" />}
              </button>
              {copied && (
                <span className="text-green-600 ml-2">Copied!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
