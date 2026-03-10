import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Journey',
  alternates: {
    canonical: 'https://tianhuil.github.io/professional',
  },
}

function Section({
  id,
  title,
  subtitle,
  children,
  delay = 0,
}: {
  id: string
  title: string
  subtitle: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <section id={id} className='mb-12'>
      <div
        className='section-card p-6 md:p-8 animate-fade-in-up'
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className='mb-6'>
          <div className='flex items-center gap-3 mb-2'>
            <span className='section-accent w-1 h-8 rounded-full' />
            <h1 className='text-3xl md:text-4xl font-bold'>{title}</h1>
          </div>
          <h2 className='text-lg text-muted-foreground ml-4'>{subtitle}</h2>
        </div>
        {children}
      </div>
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
    <div className={`${className} group`}>
      <a href={url} className='block h-full'>
        <div className='h-full flex items-center justify-center p-4 rounded-xl bg-primary/5 border border-border/50 hover:border-primary/20 transition-all duration-300'>
          <img
            src={src}
            className='max-h-16 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105'
            alt={url.split('//')[1].split('/')[0]}
          />
        </div>
      </a>
    </div>
  )
}

export default function ProfessionalPage() {
  return (
    <div className='max-w-6xl mx-auto mb-8'>
      {/* Page Header */}
      <div className='section-card p-8 mb-8 animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Professional <span className='gradient-text'>Journey</span>
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl'>
          A timeline of companies, education, awards, and contributions that
          have shaped my career.
        </p>
      </div>

      <Section
        id='companies'
        title='Companies'
        subtitle="Leading organizations I've had the privilege to work with"
        delay={100}
      >
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <Company src='/images/google.png' url='https://www.google.com' />
          <Company src='/images/foursquare.png' url='https://foursquare.com' />
          <Company src='/images/a16z.png' url='https://a16z.com' />
          <Company
            src='/images/bloomberg.png'
            url='https://www.bloomberg.com'
          />
          <Company src='/images/deshaw.png' url='https://deshaw.com' />
          <Company src='/images/jpmorgan.png' url='https://www.jpmorgan.com' />
        </div>
      </Section>

      <Section
        id='founded'
        title='Founded'
        subtitle='Building the future of data science education'
        delay={200}
      >
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
          <Company
            src='/images/tdi.png'
            url='https://www.thedataincubator.com'
            className='md:col-start-2 md:col-span-4'
          />
        </div>
      </Section>

      <Section
        id='universities'
        title='Universities'
        subtitle='Academic institutions that shaped my thinking'
        delay={300}
      >
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <Company
            src='/images/princeton.png'
            url='https://www.princeton.edu'
          />
          <Company src='/images/cambridge.png' url='https://www.cam.ac.uk' />
          <Company src='/images/cornell.png' url='https://www.cornell.edu' />
        </div>
      </Section>

      <Section
        id='awards'
        title='Awards'
        subtitle='Recognition for contributions and achievements'
        delay={400}
      >
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <Company
            src='/images/marshall.png'
            url='http://www.marshallscholarship.org/'
          />
          <Company
            src='/images/intel-sts.png'
            url='https://student.societyforscience.org/regeneron-sts'
          />
          <Company
            src='/images/hertz.png'
            url='http://hertzfoundation.org/default.aspx'
          />
          <Company src='/images/nsf.png' url='https://www.nsfgrfp.org/' />
        </div>
      </Section>

      <Section
        id='boards'
        title='Boards'
        subtitle='Giving back through board service and mentorship'
        delay={500}
      >
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <Company
            src='/images/marshall.png'
            url='https://www.marshallscholars.org/'
          />
          <Company
            src='/images/any.png'
            url='https://www.americaneedsyou.org/'
          />
          <Company src='/images/cpe.png' url='https://policingequity.org/' />
          <Company src='/images/lendit.png' url='http://www.lendit.com/' />
          <Company
            src='/images/strata.png'
            url='https://conferences.oreilly.com/strata'
          />
          <Company
            src='/images/ssp.png'
            url='https://www.societyforscience.org/'
          />
        </div>
      </Section>

      <Section
        id='space-agencies'
        title='Space Agencies'
        subtitle='Contributing to space exploration and research'
        delay={600}
      >
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
          <Company
            src='/images/nasa.png'
            url='https://www.nasa.gov/'
            className='md:col-start-2 md:col-span-4'
          />
        </div>
      </Section>
    </div>
  )
}
