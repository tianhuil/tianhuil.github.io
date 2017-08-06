import React from 'react';
import './home.css'

const Home = ({match}) => (
  <div className="row">
    <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 mb15">
      <div className="circle-image">
        <img src="images/tianhuil.jpg" className="img img-responsive full-wdith"/>
      </div>
    </div>
    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-0 mb15">
      <p>
        <b>Hi! I'm Tianhui Li, but I go by "Michael". I'm a data scientist and an entrepreneur.</b>
      </p>

      <p>
        Currently, I'm the founder of <a href="https://www.thedataincubator.com">The Data Incubator</a>, a data science training and placement company.  Previously, I worked at <a href="https://foursquare.com">Foursquare</a>, <a href="https://www.google.com">Google</a>, <a href="a16z.com">Andreessen Horowitz</a>, <a href="https://www.jpmorgan.com/">J.P. Morgan</a>, <a href="https://www.deshaw.com/">D.E. Shaw</a>, and <a href="https://www.nasa.gov">NASA</a>.
      </p>

      <p>
        I'm very passionate about <a href="#non-profit">non-profit causes</a> around education and <a href="#writing">write regularly</a> about data science and big data.
      </p>

      <p>
        I did my PhD at <a href="https://www.princeton.edu/">Princeton</a> as a <a href="http://hertzfoundation.org/">Hertz Fellow</a> and a <a href="https://www.nsfgrfp.org/">National Science Foundation Fellow</a> and read <a href="https://www.maths.cam.ac.uk/postgrad/mathiii">Part III of the Mathematics Tripos</a> at <a href="https://www.cam.ac.uk">Cambridge</a> as a <a href="www.marshallscholarship.org">Marshall Scholar</a>.
      </p>

      <p>
        我说普通话和广州话. 中文名字“李天惠”.
      </p>
      <p>
        Je parle aussi le français, mais pas très bien.  Les Français m'appellent Michel.
      </p>
    </div>
  </div>
)

export default Home
