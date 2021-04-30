import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Link from 'next/link'

const Style = styled.div`
  .circle-image {
    position: relative;
    overflow: hidden;
    padding-bottom: 100%;
    border-radius: 50%;
  }
  .circle-image img {
    position: absolute;
    width: 100%;
  }

  .social-icon {
    margin-right: 10px;
  }

  h1 {
    font-size: 28px;
  }

  iframe {
    width: 100%;
    height: 900px;
    border: none;
  }
`

const Home: React.FC = () => (
  <Layout>
    <Style>
      <div className='row'>
        <div className='col-6 offset-3 col-sm-4 offset-sm-0 mb-3'>
          <div className='circle-image'>
            <img
              src='/images/tianhuil.jpg'
              className='img img-responsive full-width'
            />
          </div>
        </div>
        <div className='col-10 offset-1 col-sm-8 offset-sm-0 mb-3'>
          <p>
            <h1>The Standup is Broken</h1>
          </p>

          <p>
            We all conduct status update meetings (a.k.a. standups) but don’t
            see the value. We’re often listening to updates that aren’t relevant
            to us and still do not feel informed or connected to the company.
            I'd love to learn how you've handle status update meetings (sign up
            on the <Link href='#calendly'>calendly link below</Link>)
          </p>
          <h2>Why talk to me?</h2>
          <p>
            I <a />
            {/* above tag is necessary */}
            <a href='https://venturebeat.com/2014/04/15/ny-gets-new-bootcamp-for-data-scientists-its-free-but-harder-to-get-into-than-harvard/'>
              bootstrapped a startup
            </a>{' '}
            from founding to a successful exit. Along the way, I learned that
            management and communications are the biggest challenges faced all
            companies, from startups to the Fortune 500. I'm interested in how
            you solve these challenges today. I'll be writing a series on
            communication and <Link href='/writing'>publish regularly</Link> in
            Harvard Business Review, Tech Crunch, VentureBeat.
          </p>

          <div className='mt-4 mb-4'>
            <SocialIcon
              className='social-icon'
              url='https://twitter.com/tianhuil'
            />
            <SocialIcon
              className='social-icon'
              url='https://www.linkedin.com/in/tianhuili'
            />
            <SocialIcon
              className='social-icon'
              url='https://github.com/tianhuil'
            />
          </div>
        </div>
      </div>
      <div className='row' id='calendly'>
        <iframe src='https://calendly.com/michael-15282/30min' />
      </div>
    </Style>
  </Layout>
)

export default Home
