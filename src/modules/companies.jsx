import React from 'react';

const Company = ((props) => (
  <div className={props.className ? props.className : "mt15 col-xs-6 col-sm-4"}>
    <a href={props.url} >
      <div className="logo-box">
        <img delayed className="logo-image" src={props.src}/>
      </div>
    </a>
  </div>
))

const Header = ((props) => (
  <div className="row">
    <div className="mt30 col-xs-12">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  </div>
))

const Companies = ({match}) => (
  <section>
    {/* Companies */}
    <Header title="Companies" subtitle="A few companies that I've worked for" />
    <div className="row">
      <Company src="/images/google.png" url="https://www.google.com" />
      <Company src="/images/foursquare.png" url="https://foursquare.com" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/a16z.png" url="https://a16z.com"/>
      <div className="clearfix visible-sm visible-md visible-lg"></div>
      <Company src="/images/bloomberg.png" url="https://www.bloomberg.com"/>
      <div className="clearfix visible-xs"></div>
      <Company src="/images/deshaw.png" url="https://deshaw.com" />
      <Company src="/images/jpmorgan.png" url="https://www.jpmorgan.com" />
    </div>

    {/* Founded */}
    <Header title="Founded" subtitle="Company I founded" />
    <div className="row">
      <Company src="/images/tdi.jpeg"
          url="https://www.thedataincubator.com"
          className="mt15 col-xs-12 col-sm-6 col-sm-offset-3"/>
    </div>

    {/* Universities */}
    <Header title="Universities" subtitle="Academic Institutions I've been affiliated with" />
    <div className="row">
      <Company src="/images/princeton.svg" url="https://www.princeton.edu" />
      <Company src="/images/cambridge.jpg" url="https://www.cam.ac.uk" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/cornell.png" url="https://www.cornell.edu" />
    </div>

    {/* Awards */}
    <Header title="Awards" subtitle="Awards I have been fortunate enough to receive" />
    <div className="row">
      <Company src="/images/marshall.gif" url="http://www.marshallscholarship.org/"
                className="mt15 col-xs-6 col-sm-3" />
      <Company src="/images/intel-sts.png" url="https://student.societyforscience.org/regeneron-sts"
                className="mt15 col-xs-6 col-sm-3" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/hertz.jpg" url="http://hertzfoundation.org/default.aspx"
                className="mt15 col-xs-6 col-sm-3" />
      <Company src="/images/nsf.png" url="https://www.nsfgrfp.org/"
                className="mt15 col-xs-6 col-sm-3" />
    </div>
  </section>
)

export default Companies
