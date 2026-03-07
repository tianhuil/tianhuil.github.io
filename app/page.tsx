'use client'

import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'

const companies = [
  { name: 'The Data Incubator', url: 'https://www.thedataincubator.com', founder: true },
  { name: 'Foursquare', url: 'https://foursquare.com' },
  { name: 'Google', url: 'https://www.google.com' },
  { name: 'Andreessen Horowitz', url: 'https://a16z.com' },
  { name: 'J.P. Morgan', url: 'https://www.jpmorgan.com/' },
  { name: 'D.E. Shaw', url: 'https://www.deshaw.com/' },
  { name: 'Bloomberg', url: 'https://www.bloomberg.com/' },
  { name: 'NASA', url: 'https://www.nasa.gov' },
]

const education = [
  { name: 'Princeton', url: 'https://www.princeton.edu/', detail: 'PhD - Hertz Fellow, NSF Fellow' },
  { name: 'Cambridge', url: 'https://www.cam.ac.uk', detail: 'Part III Math Tripos - Marshall Scholar' },
]

const languages = [
  { name: 'English', flag: '🇺🇸', detail: 'Native' },
  { name: 'Mandarin', flag: '🇨🇳', detail: '普通话' },
  { name: 'Cantonese', flag: '🇭🇰', detail: '广州话' },
  { name: 'French', flag: '🇫🇷', detail: 'Je parle aussi le français' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto mb-8">
        
        <div className="glass-card p-8 md:p-12 mb-8 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative profile-glow animate-float">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glow">
                  <Image
                    src="/images/tianhuil.jpg"
                    alt="Profile photo of Michael Li"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, 256px"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3 animate-fade-in-up animation-delay-100">
                  <span className="tag">Founder</span>
                  <span className="tag tag-accent">Data Scientist</span>
                  <span className="tag">PhD Princeton</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up animation-delay-200">
                  Hi, I&apos;m <span className="gradient-text">Michael Li</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in-up animation-delay-300">
                  Data scientist, entrepreneur, and lifelong learner building the future of data science education.
                </p>
              </div>
              
              <div className="flex gap-4 pt-2 animate-fade-in-up animation-delay-400">
                <SocialIcon
                  url="https://twitter.com/tianhuil"
                  className="social-icon"
                  bgColor="transparent"
                  fgColor="#00d4ff"
                />
                <SocialIcon
                  url="https://www.linkedin.com/in/tianhuili"
                  className="social-icon"
                  bgColor="transparent"
                  fgColor="#00d4ff"
                />
                <SocialIcon
                  url="https://github.com/tianhuil"
                  className="social-icon"
                  bgColor="transparent"
                  fgColor="#00d4ff"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card p-6 animate-fade-in-up animation-delay-200">
            <div className="section-title flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Current Role
            </div>
            <p className="text-lg">
              Founder of{' '}
              <a 
                href="https://www.thedataincubator.com" 
                className="link-glow font-semibold text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Data Incubator
              </a>
              , a data science training and placement company helping the next generation of data scientists launch their careers.
            </p>
          </div>
          
          <div className="glass-card p-6 animate-fade-in-up animation-delay-300">
            <div className="section-title flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Previous Experience
            </div>
            <div className="flex flex-wrap gap-2">
              {companies.slice(1).map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  className="link-glow text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6 animate-fade-in-up animation-delay-400">
            <div className="section-title flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              Education
            </div>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.name}>
                  <a 
                    href={edu.url} 
                    className="font-semibold text-foreground link-glow"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {edu.name}
                  </a>
                  <p className="text-sm text-muted-foreground">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 animate-fade-in-up animation-delay-500">
            <div className="section-title flex items-center gap-2">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd"/>
              </svg>
              Languages
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <div 
                  key={lang.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-sm"
                >
                  <span>{lang.flag}</span>
                  <span className="text-foreground">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 animate-fade-in-up animation-delay-600">
            <div className="section-title flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"/>
              </svg>
              Passions
            </div>
            <p className="text-muted-foreground">
              Passionate about{' '}
              <a href="/professional#boards" className="link-glow text-foreground">
                non-profit causes
              </a>{' '}
              around education and{' '}
              <a href="/writing" className="link-glow text-foreground">
                writing
              </a>{' '}
              about data science and big data.
            </p>
          </div>
        </div>
        
        <div className="glass-card p-8 text-center animate-fade-in-up animation-delay-600">
          <p className="text-lg text-muted-foreground mb-4">
            Let&apos;s connect and build something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com/tianhuil"
              className="tag text-base px-6 py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/tianhuili"
              className="tag tag-accent text-base px-6 py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
