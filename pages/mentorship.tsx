import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from '@emotion/styled'
import Layout from '../components/layout'

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
            <h1>
              Free one-on-one management and communication mentoring session
            </h1>
          </p>

          <h2>Who is this for?</h2>
          <p>
            I'm offering a free one-on-one mentoring session aimed at team
            leads, managers, or any kind of leader in an organization who is
            looking to improve their communication or management skills. Just
            sign up on my <a href='#calendly'>calendly below</a>
          </p>

          <h2>Why talk to me?</h2>
          <p>
            I{' '}
            <a href='https://venturebeat.com/2014/04/15/ny-gets-new-bootcamp-for-data-scientists-its-free-but-harder-to-get-into-than-harvard/'>
              bootstrapped a startup from 1 to 30 employees
            </a>{' '}
            and navigated it to a successful exit. I’m now{' '}
            <a href='https://www.linkedin.com/in/tianhuili/'>
              a president of a company with hundreds of employees
            </a>
            . Along the way, I’ve learned a lot of hard lessons about management
            and communication and want to share them with others.
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

          <h2>Why am I doing this for free?</h2>
          <p>
            Management and communications are the toughest problems any
            organization faces. I want to listen to your challenges in this area
            and share any hard-won wisdom that may be helpful.
          </p>
          <p>
            As an entrepreneur, I’m also interested in pain points around
            management and communications. By listening and providing
            mentorship, I'm also conducting user interviews to better understand
            the problem.
          </p>
        </div>
      </div>
      <div className='row' id='calendly'>
        <iframe src='https://calendly.com/michael-15282/30min' />
      </div>
    </Style>
  </Layout>
)

export default Home
