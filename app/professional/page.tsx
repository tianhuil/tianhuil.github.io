'use client'

import { Logo } from '@/components/logo'

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-12">
      <div className="mb-6">
        <h1 className="text-3xl font-extralight text-primary">{title}</h1>
        <h2 className="text-xl font-light text-gray-500 mt-1">{subtitle}</h2>
      </div>
      {children}
    </section>
  )
}

function Company({
  src,
  url,
  className = '',
}: {
  src: string
  url: string
  className?: string
}) {
  return (
    <div className={`mt-3 ${className}`}>
      <Logo src={src} url={url} />
    </div>
  )
}

export default function ProfessionalPage() {
  return (
    <>
      <Section
        id="companies"
        title="Companies"
        subtitle="Selected companies that for which I have worked"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Company src="/images/google.png" url="https://www.google.com" />
          <Company src="/images/foursquare.png" url="https://foursquare.com" />
          <Company src="/images/a16z.png" url="https://a16z.com" />
          <Company src="/images/bloomberg.png" url="https://www.bloomberg.com" />
          <Company src="/images/deshaw.jpg" url="https://deshaw.com" />
          <Company src="/images/jpmorgan.png" url="https://www.jpmorgan.com" />
        </div>
      </Section>

      <Section id="founded" title="Founded" subtitle="Company I founded">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <Company
            src="/images/tdi.jpg"
            url="https://www.thedataincubator.com"
            className="md:col-start-2 md:col-span-4"
          />
        </div>
      </Section>

      <Section
        id="universities"
        title="Universities"
        subtitle="Academic Institutions from where I have degrees or held postdocs"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Company src="/images/princeton.svg" url="https://www.princeton.edu" />
          <Company src="/images/cambridge.jpg" url="https://www.cam.ac.uk" />
          <Company src="/images/cornell.png" url="https://www.cornell.edu" />
        </div>
      </Section>

      <Section
        id="awards"
        title="Awards"
        subtitle="Selected awards I have been fortunate enough to receive"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Company
            src="/images/marshall.gif"
            url="http://www.marshallscholarship.org/"
          />
          <Company
            src="/images/intel-sts.png"
            url="https://student.societyforscience.org/regeneron-sts"
          />
          <Company
            src="/images/hertz.jpg"
            url="http://hertzfoundation.org/default.aspx"
          />
          <Company
            src="/images/nsf.png"
            url="https://www.nsfgrfp.org/"
          />
        </div>
      </Section>

      <Section
        id="boards"
        title="Boards"
        subtitle="Selected boards on which I serve (or have served)"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Company
            src="/images/marshall.jpg"
            url="https://www.marshallscholars.org/"
          />
          <Company
            src="/images/any.jpg"
            url="https://www.americaneedsyou.org/"
          />
          <Company
            src="/images/cpe.png"
            url="https://policingequity.org/"
          />
          <Company
            src="/images/lendit.png"
            url="http://www.lendit.com/"
          />
          <Company
            src="/images/strata.png"
            url="https://conferences.oreilly.com/strata"
          />
          <Company
            src="/images/ssp.png"
            url="https://www.societyforscience.org/"
          />
        </div>
      </Section>

      <Section
        id="space-agencies"
        title="Space Agencies"
        subtitle="Space Agencies for which I have worked"
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <Company
            src="/images/nasa.png"
            url="https://www.nasa.gov/"
            className="md:col-start-2 md:col-span-4"
          />
        </div>
      </Section>
    </>
  )
}
