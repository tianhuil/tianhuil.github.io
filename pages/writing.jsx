import React from 'react';
import Layout from '../components/layout.jsx'
import Logo from '../components/logo.jsx'

const Publication = ((props) => (
  <div className="row mb30">
    <div className="mt15 col-xs-12 col-sm-5">
      <Logo src={props.src} url={props.url} />
    </div>
    <div className="col-xs-12 col-sm-7">
      <h2 className="mt15">{ props.name }</h2>
      { props.children }
    </div>
  </div>
))

const More = <span>
  <span>More</span>
  <span className="glyphicon glyphicon-chevron-right"></span>
  <span className="glyphicon glyphicon-chevron-right"></span>
</span>

const Article = ((props) => (
  <li><a href={props.url}>
    {props.more ? More : props.title}
  </a></li>
))

const Writing = (props) => (
  <Layout>
    <section>
      <Publication src="/static/images/hbr.jpg" url="https://hbr.org/search?term=michael+li"
          name="Harvard Business Review">
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
            more={true}/>
        </ul>
      </Publication>

      <Publication src="/static/images/oreilly.jpg" url="https://www.oreilly.com/people/76a5b-michael-li"
          name="O'Reilly Radar">
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
            more={true}/>
        </ul>
      </Publication>

      <Publication src="/static/images/wsj.png" url="http://www.wsj.com/articles/calculus-is-so-last-century-1457132991"
          name="Wall Street Journal">
        <ul>
          <Article url="http://www.wsj.com/articles/calculus-is-so-last-century-1457132991"
            title="Calculus Is So Last Century"/>
        </ul>
      </Publication>

      <Publication src="/static/images/fastcompany.png" url="https://www.fastcompany.com/3049788/how-to-get-past-buzzwords-and-make-better-hires"
          name="FastCompany">
        <ul>
          <Article url="https://www.fastcompany.com/3049788/how-to-get-past-buzzwords-and-make-better-hires"
            title="How To Get Past Buzzwords And Make Better Hires"/>
        </ul>
      </Publication>

      <Publication src="/static/images/techcrunch.png" url="https://techcrunch.com/contributor/michael-li/"
          name="TechCrunch">
        <ul>
          <Article url="https://techcrunch.com/2017/06/23/five-building-blocks-of-a-data-driven-culture/"
            title="Five building blocks of a data-driven culture"/>
          <Article url="https://techcrunch.com/2016/10/19/the-perils-of-polling-in-a-brexit-and-donald-trump-world/"
            title="The perils of polling in a Brexit and Donald Trump world"/>
        </ul>
      </Publication>

      <Publication src="/static/images/venturebeat.png" url="https://venturebeat.com/author/michael-li-the-data-incubator/"
          name="VentureBeat">
        <ul>
          <Article url="https://venturebeat.com/2016/07/04/how-to-combat-your-companys-tech-hiring-bias/"
            title="How to combat your company’s tech hiring bias"/>
          <Article url="https://venturebeat.com/2015/07/18/real-data-scientists-have-a-rare-hybrid-of-skill-sets-heres-what-to-look-for/"
            title="Real data scientists have a rare hybrid of skill sets: Here’s what to look for"/>
        </ul>
      </Publication>

      <Publication src="/static/images/entrepreneur.png" url="https://www.entrepreneur.com/author/michael-li2"
          name="Entrepreneur">
        <ul>
          <Article url="https://www.entrepreneur.com/article/269919"
            title="What Hiring Managers Don't Understand About Hiring for Data Science"/>
          <Article url="https://www.entrepreneur.com/article/249167"
            title="3 Ways Scrappy Entrepreneurs Can Keep Data Scientists on Board and Motivated"/>
          <Article url="https://www.entrepreneur.com/article/244247"
            title="4 Things a Data Scientist Can Do for Entrepreneurs"/>
          <Article url="https://www.entrepreneur.com/author/michael-li2" more={true} />
        </ul>
      </Publication>
    </section>
  </Layout>
)

export default Writing
