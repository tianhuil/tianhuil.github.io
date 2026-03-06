'use client'

import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'

export default function HomePage() {
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
        <p className="text-lg font-semibold text-foreground">
          Hi! I&apos;m Tianhui Li, but I go by &quot;Michael&quot;. I&apos;m a data scientist
          and an entrepreneur.
        </p>

        <p>
          Currently, I&apos;m the founder of{' '}
          <a href="https://www.thedataincubator.com" className="text-primary hover:underline">
            The Data Incubator
          </a>
          , a data science training and placement company. Previously, I worked at{' '}
          <a href="https://foursquare.com" className="text-primary hover:underline">
            Foursquare
          </a>
          ,{' '}
          <a href="https://www.google.com" className="text-primary hover:underline">
            Google
          </a>
          ,{' '}
          <a href="https://a16z.com" className="text-primary hover:underline">
            Andreessen Horowitz
          </a>
          ,{' '}
          <a href="https://www.jpmorgan.com/" className="text-primary hover:underline">
            J.P. Morgan
          </a>
          ,{' '}
          <a href="https://www.deshaw.com/" className="text-primary hover:underline">
            D.E. Shaw
          </a>
          ,{' '}
          <a href="https://www.bloomberg.com/" className="text-primary hover:underline">
            Bloomberg
          </a>
          , and{' '}
          <a href="https://www.nasa.gov" className="text-primary hover:underline">
            NASA
          </a>
          .
        </p>

        <p>
          I&apos;m very passionate about{' '}
          <a href="/professional#boards" className="text-primary hover:underline">
            non-profit causes
          </a>{' '}
          around education and{' '}
          <a href="/writing" className="text-primary hover:underline">
            write regularly
          </a>{' '}
          about data science and big data.
        </p>

        <p>
          I completed my PhD at{' '}
          <a href="https://www.princeton.edu/" className="text-primary hover:underline">
            Princeton
          </a>{' '}
          as a{' '}
          <a href="http://hertzfoundation.org/" className="text-primary hover:underline">
            Hertz Fellow
          </a>{' '}
          and a{' '}
          <a href="https://www.nsfgrfp.org/" className="text-primary hover:underline">
            National Science Foundation Fellow
          </a>{' '}
          and read{' '}
          <a href="https://www.maths.cam.ac.uk/postgrad/mathiii" className="text-primary hover:underline">
            Part III of the Mathematics Tripos
          </a>{' '}
          at <a href="https://www.cam.ac.uk" className="text-primary hover:underline">
            Cambridge
          </a>{' '}
          as a{' '}
          <a href="https://www.marshallscholarship.org" className="text-primary hover:underline">
            Marshall Scholar
          </a>
          .
        </p>

        <p>我说普通话和广州话。中文名字&quot;李天惠&quot;。</p>
        <p>
          Je parle aussi le fran&#231;ais, mais pas tr&#232;s bien. Les Fran&#231;ais
          m&apos;appellent Michel.
        </p>
        <div className="flex gap-3 pt-3">
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
