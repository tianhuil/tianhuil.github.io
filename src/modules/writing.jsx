import React from 'react';
import './writing.css'

const Publication = ((props) => (
  <div className="row">
    <div className="mt15 col-xs-12 col-sm-5">
      <a href={props.url} >
        <div className="logo-box">
          <img className="logo-image" src={props.src}/>
        </div>
      </a>
    </div>
    <div className="col-xs-12 col-sm-7">
      { props.children }
    </div>
  </div>
))

const Article = ((props) => (
  <li><a href={props.url}>{props.title}</a></li>
))

const Writing = ({match}) => (
  <section>
    <Publication src="/images/hbr.jpg" url="https://hbr.org/search?term=michael+li">
      <h2 class="mt5">Harvard Business Review</h2>
      <ul>
        <Article url="https://hbr.org/2016/11/the-promise-and-challenge-of-big-data-for-pharma"
          title="The Promise and Challenge of Big Data for Pharma"/>
        <Article url="https://hbr.org/2014/08/the-question-to-ask-before-hiring-a-data-scientist"
          title="The Question to Ask Before Hiring a Data Scientist"/>
        <Article url="https://hbr.org/2015/10/the-best-data-scientists-know-how-to-tell-stories"
          title="The Best Data Scientists Know How to Tell Stories"/>
        <Article url="https://hbr.org/2016/11/better-questions-to-ask-your-data-scientists"
          title="Better Questions to Ask Your Data Scientists"/>
        <Article url="https://hbr.org/search?term=michael+li"
          title="More ..."/>
      </ul>
    </Publication>

    <Publication src="/images/oreilly.jpg" url="https://www.oreilly.com/people/76a5b-michael-li">
      <h2 class="mt5">O'Reilly Radar</h2>
      <ul>
        <Article url="https://www.oreilly.com/ideas/leveraging-analytics-1-0-for-the-analytics-2-0-revolution"
          title="Leveraging analytics 1.0 for the analytics 2.0 revolution"/>
        <Article url="https://www.oreilly.com/ideas/spark-comparison-aws-vs-gcp"
          title="Spark comparison: AWS vs. GCP"/>
        <Article url="https://www.oreilly.com/ideas/three-best-practices-for-building-successful-data-pipelines"
          title="Three best practices for building successful data pipelines"/>
        <Article url="https://www.oreilly.com/ideas/5-secrets-for-writing-the-perfect-data-scientist-resume"
          title="5 secrets for writing the perfect data scientist resume"/>
        <Article url="https://www.oreilly.com/people/76a5b-michael-li"
          title="More ..."/>
      </ul>
    </Publication>
  </section>
)

export default Writing
