'use client'

import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'

export default function StandupPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-4 md:col-start-1 mb-4">
        <div className="relative w-full aspect-square rounded-full overflow-hidden">
          <Image
            src="/images/tianhuil.jpg"
            alt="Tianhui Michael Li"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="md:col-span-7 md:col-start-6 mb-4 space-y-4">
        <h1 className="text-3xl font-extralight text-primary">The Standup is Broken</h1>

        <p>
          We all conduct status update meetings (a.k.a. standups) but don't
          see the value. We're often listening to updates that aren't relevant
          to us and still do not feel informed or connected to the company.
          I'd love to learn how you've handle status update meetings (sign up
          on the <a href="#calendly" className="text-primary hover:underline">calendly link below</a>)
        </p>
        
        <h2 className="text-xl font-light text-gray-500 mt-4">Why talk to me?</h2>
        <p>
          I{' '}
          <a href="https://venturebeat.com/2014/04/15/ny-gets-new-bootcamp-for-data-scientists-its-free-but-harder-to-get-into-than-harvard/" className="text-primary hover:underline">
            bootstrapped a startup
          </a>{' '}
          from founding to a successful exit. Along the way, I learned that
          management and communications are the biggest challenges faced all
          companies, from startups to the Fortune 500. I'm interested in how
          you solve these challenges today. I'll be writing a series on
          communication and <a href="/writing" className="text-primary hover:underline">publish regularly</a> in
          Harvard Business Review, Tech Crunch, VentureBeat.
        </p>

        <div className="flex gap-3 pt-4 pb-4">
          <SocialIcon
            url="https://twitter.com/tianhuil"
            className="hover:opacity-80 transition-opacity"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/tianhuili"
            className="hover:opacity-80 transition-opacity"
          />
          <SocialIcon
            url="https://github.com/tianhuil"
            className="hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
    </div>
  )
}
