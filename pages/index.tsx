import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from '@emotion/styled'
import Link from 'next/link'
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
            <b>
              Hi! I'm Tianhui Li, but I go by "Michael". I'm a data scientist
              and an entrepreneur.
            </b>
          </p>

          <p>
            Currently, I'm the founder of{' '}
            <a href='https://www.thedataincubator.com'>The Data Incubator</a>, a
            data science training and placement company. Previously, I worked at{' '}
            <a href='https://foursquare.com'>Foursquare</a>,{' '}
            <a href='https://www.google.com'>Google</a>,{' '}
            <a href='https://a16z.com'>Andreessen Horowitz</a>,{' '}
            <a href='https://www.jpmorgan.com/'>J.P. Morgan</a>,{' '}
            <a href='https://www.deshaw.com/'>D.E. Shaw</a>,{' '}
            <a href='https://www.bloomberg.com/'>Bloomberg</a>, and{' '}
            <a href='https://www.nasa.gov'>NASA</a>.
          </p>

          <p>
            I'm very passionate about{' '}
            <Link href='/professional#boards'>non-profit causes</Link> around
            education and <Link href='/writing'>write regularly</Link> about
            data science and big data.
          </p>

          <p>
            I completed my PhD at{' '}
            <a href='https://www.princeton.edu/'>Princeton</a> as a{' '}
            <a href='http://hertzfoundation.org/'>Hertz Fellow</a> and a{' '}
            <a href='https://www.nsfgrfp.org/'>
              National Science Foundation Fellow
            </a>{' '}
            and read{' '}
            <a href='https://www.maths.cam.ac.uk/postgrad/mathiii'>
              Part III of the Mathematics Tripos
            </a>{' '}
            at <a href='https://www.cam.ac.uk'>Cambridge</a> as a{' '}
            <a href='https://www.marshallscholarship.org'>Marshall Scholar</a>.
          </p>

          <p>我说普通话和广州话。中文名字“李天惠”。</p>
          <p>
            Je parle aussi le français, mais pas très bien. Les Français
            m'appellent Michel.
          </p>
          <div className='mt-4'>
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
    </Style>
  </Layout>
)

export default Home
