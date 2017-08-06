import React from 'react';

const Company = ((props) => (
  <div className="mb15 col-xs-6 col-sm-4">
    <div className="logo-box">
      <img className="logo-image" src={props.src}/>
    </div>
  </div>
))

const Companies = ({match}) => (
  <section>
    <div className="row">
      <Company src="/images/google.png" />
      <Company src="/images/foursquare.png" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/a16z.png" />
      <div className="clearfix visible-sm"></div>
      <Company src="/images/bloomberg.png" />
      <div className="clearfix visible-xs"></div>
      <Company src="/images/deshaw.png" />
      <Company src="/images/jpmorgan.png" />
    </div>
  </section>
)

export default Companies
