'use client'

import { SocialIcon } from 'react-social-icons'

export default function StandupPage() {
  return (
    <div className="row">
      <div className="col-6 offset-3 col-sm-4 offset-sm-0 mb-3">
        <div className="circle-image">
          <img
            src="/images/tianhuil.jpg"
            className="img img-responsive full-width"
            alt="Tianhui Michael Li"
          />
        </div>
      </div>
      <div className="col-10 offset-1 col-sm-8 offset-sm-0 mb-3">
        <p>
          <h1>The Standup is Broken</h1>
        </p>

        <p>
          We all conduct status update meetings (a.k.a. standups) but don't
          see the value. We're often listening to updates that aren't relevant
          to us and still do not feel informed or connected to the company.
          I'd love to learn how you've handle status update meetings (sign up
          on the <a href="#calendly">calendly link below</a>)
        </p>
        <h2>Why talk to me?</h2>
        <p>
          I{' '}
          <a href="https://venturebeat.com/2014/04/15/ny-gets-new-bootcamp-for-data-scientists-its-free-but-harder-to-get-into-than-harvard/">
            bootstrapped a startup
          </a>{' '}
          from founding to a successful exit. Along the way, I learned that
          management and communications are the biggest challenges faced all
          companies, from startups to the Fortune 500. I'm interested in how
          you solve these challenges today. I'll be writing a series on
          communication and <a href="/writing">publish regularly</a> in
          Harvard Business Review, Tech Crunch, VentureBeat.
        </p>

        <div className="mt-4 mb-4">
          <SocialIcon
            className="social-icon"
            url="https://twitter.com/tianhuil"
          />
          <SocialIcon
            className="social-icon"
            url="https://www.linkedin.com/in/tianhuili"
          />
          <SocialIcon
            className="social-icon"
            url="https://github.com/tianhuil"
          />
        </div>
      </div>
    </div>
  )
}
