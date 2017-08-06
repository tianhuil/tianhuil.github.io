import React from 'react';

const Company = ((props) => (
  <div className={props.className ? props.className : "mt15 col-xs-6 col-sm-4"}>
    <div className="logo-box">
      <img delayed className="logo-image" src={props.src}/>
    </div>
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
      <Company src="/images/google.png" />
      <Company src="/images/foursquare.png" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/a16z.png" />
      <div className="clearfix visible-sm visible-md visible-lg"></div>
      <Company src="/images/bloomberg.png" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/deshaw.png" />
      <Company src="/images/jpmorgan.png" />
    </div>

    {/* Founded */}
    <Header title="Founded" subtitle="Company I founded" />
    <div className="row">
      <Company src="/images/tdi.jpeg" className="mt15 col-xs-12 col-sm-6 col-sm-offset-3"/>
    </div>

    {/* Universities */}
    <Header title="Universities" subtitle="Academic Institutions I've been affiliated with" />
    <div className="row">
      <Company src="/images/princeton.svg" />
      <Company src="/images/cambridge.jpg" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/cornell.png" />
    </div>

    {/* Awards */}
    <Header title="Awards" subtitle="Awards I have been fortunate enough to receive" />
    <div className="row">
      <Company src="/images/marshall.gif" className="mt15 col-xs-6 col-sm-3" />
      <Company src="/images/intel-sts.png"  className="mt15 col-xs-6 col-sm-3" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/hertz.jpg"  className="mt15 col-xs-6 col-sm-3" />
      <Company src="/images/nsf.png" className="mt15 col-xs-6 col-sm-3" />
    </div>
  </section>
)

export default Companies
