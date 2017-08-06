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

    <Header title="Founded" subtitle="I founded The Data Incubator" />
    <div className="row">
      <Company src="/images/tdi.jpeg" className="mt15 col-xs-12 col-sm-6 col-sm-offset-3"/>
    </div>
  </section>
)

export default Companies
