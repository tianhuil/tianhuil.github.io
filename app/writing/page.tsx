'use client'

interface Article {
  url: string
  title?: string
}

function Publication({
  src,
  url,
  name,
  articles,
  delay = 0,
}: {
  src: string
  url: string
  name: string
  articles: Article[]
  delay?: number
}) {
  return (
    <div
      className='glass-card p-6 animate-fade-in-up group'
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className='grid grid-cols-1 md:grid-cols-5 gap-6 items-start'>
        <div className='md:col-span-2'>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='block'
          >
            <div className='flex items-center justify-center h-20 p-4 rounded-xl bg-secondary/30 border border-border/50 group-hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300'>
              <img
                src={src}
                className='max-h-16 max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300'
                alt={name}
              />
            </div>
          </a>
        </div>
        <div className='md:col-span-3'>
          <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
            {name}
            <svg
              className='w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </h2>
          <ul className='space-y-3'>
            {articles.map((article, idx) => (
              <li key={idx}>
                <a
                  href={article.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-glow text-muted-foreground hover:text-primary transition-colors text-sm block'
                >
                  {article.title || 'More articles...'}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function WritingPage() {
  const publications = [
    {
      src: '/images/wsj.png',
      url: 'http://www.wsj.com/articles/calculus-is-so-last-century-1457132991',
      name: 'Wall Street Journal',
      articles: [
        {
          url: 'http://www.wsj.com/articles/calculus-is-so-last-century-1457132991',
          title: 'Calculus Is So Last Century',
        },
      ],
    },
    {
      src: '/images/techcrunch.png',
      url: 'https://techcrunch.com/contributor/michael-li/',
      name: 'TechCrunch',
      articles: [
        {
          url: 'https://techcrunch.com/2020/08/27/will-automation-eliminate-data-science-positions/',
          title: 'Will automation eliminate data science positions?',
        },
        {
          url: 'https://techcrunch.com/2020/08/12/whats-different-about-hiring-data-scientists-in-2020/',
          title: "What's different about hiring data scientists in 2020?",
        },
        {
          url: 'https://techcrunch.com/2017/06/23/five-building-blocks-of-a-data-driven-culture/',
          title: 'Five Building Blocks Of A Data-driven Culture',
        },
        {
          url: 'https://techcrunch.com/2016/10/19/the-perils-of-polling-in-a-brexit-and-donald-trump-world/',
          title: 'The Perils Of Polling In A Brexit And Donald Trump World',
        },
        {
          url: 'https://techcrunch.com/author/michael-li/',
          title: 'More articles...',
        },
      ],
    },
    {
      src: '/images/wired.svg',
      url: 'https://wired.com/preview/story/5d2e3328d757370008b014a0',
      name: 'Wired Magazine',
      articles: [
        {
          url: 'https://wired.com/preview/story/5d2e3328d757370008b014a0',
          title: 'High-Stakes AI Decisions Need to be Automatically Audited',
        },
      ],
    },
    {
      src: '/images/fastcompany.png',
      url: 'https://www.fastcompany.com/3049788/how-to-get-past-buzzwords-and-make-better-hires',
      name: 'FastCompany',
      articles: [
        {
          url: 'https://www.fastcompany.com/3049788/how-to-get-past-buzzwords-and-make-better-hires',
          title: 'How To Get Past Buzzwords And Make Better Hires',
        },
        {
          url: 'https://www.fastcompany.com/40574695/youve-probably-been-hiring-the-wrong-kind-of-data-scientist',
          title: "You've Probably Been Hiring The Wrong Kind Of Data Scientist",
        },
        {
          url: 'https://www.fastcompany.com/40513520/how-to-get-a-hot-job-in-data-security-without-being-a-data-scientist',
          title:
            "How To Land A Cybersecurity Job Even If You're Not A Data Scientist",
        },
      ],
    },
    {
      src: '/images/hbr.png',
      url: 'https://hbr.org/search?term=michael+li',
      name: 'Harvard Business Review',
      articles: [
        {
          url: 'https://hbr.org/2016/11/the-promise-and-challenge-of-big-data-for-pharma',
          title: 'The Promise And Challenge Of Big Data For Pharma',
        },
        {
          url: 'https://hbr.org/2014/08/the-question-to-ask-before-hiring-a-data-scientist',
          title: 'The Question To Ask Before Hiring A Data Scientist',
        },
        {
          url: 'https://hbr.org/2015/10/the-best-data-scientists-know-how-to-tell-stories',
          title: 'The Best Data Scientists Know How To Tell Stories',
        },
        {
          url: 'https://hbr.org/2016/11/better-questions-to-ask-your-data-scientists',
          title: 'Better Questions To Ask Your Data Scientists',
        },
        {
          url: 'https://hbr.org/search?term=michael+li',
          title: 'More articles...',
        },
      ],
    },
    {
      src: '/images/mitsmr.png',
      url: 'https://sloanreview.mit.edu/article/give-technical-experts-a-role-in-defining-project-success/',
      name: 'MIT Sloan Management Review',
      articles: [
        {
          url: 'https://sloanreview.mit.edu/article/give-technical-experts-a-role-in-defining-project-success/',
          title: 'Give Technical Experts A Role In Defining Project Success',
        },
      ],
    },
    {
      src: '/images/entrepreneur.png',
      url: 'https://www.entrepreneur.com/author/michael-li2',
      name: 'Entrepreneur Magazine',
      articles: [
        {
          url: 'https://www.entrepreneur.com/article/269919',
          title:
            "What Hiring Managers Don't Understand About Hiring For Data Science",
        },
        {
          url: 'https://www.entrepreneur.com/article/249167',
          title:
            '3 Ways Scrappy Entrepreneurs Can Keep Data Scientists On Board And Motivated',
        },
        {
          url: 'https://www.entrepreneur.com/article/244247',
          title: '4 Things A Data Scientist Can Do For Entrepreneurs',
        },
        {
          url: 'https://www.entrepreneur.com/author/michael-li2',
          title: 'More articles...',
        },
      ],
    },
    {
      src: '/images/venturebeat.png',
      url: 'https://venturebeat.com/author/michael-li-the-data-incubator/',
      name: 'VentureBeat',
      articles: [
        {
          url: 'https://venturebeat.com/2020/06/27/a-closer-look-at-sagemaker-studio-aws-machine-learning-ide/',
          title: "A closer look at SageMaker Studio, AWS' machine learning IDE",
        },
        {
          url: 'https://venturebeat.com/2019/12/08/aws-sagemakers-new-machine-learning-ide-isnt-ready-to-win-over-data-scientists/',
          title:
            "AWS SageMaker's new machine learning IDE isn't ready to win over data scientists",
        },
        {
          url: 'https://venturebeat.com/2016/07/04/how-to-combat-your-companys-tech-hiring-bias/',
          title: "How To Combat Your Company's Tech Hiring Bias",
        },
        {
          url: 'https://venturebeat.com/2015/07/18/real-data-scientists-have-a-rare-hybrid-of-skill-sets-heres-what-to-look-for/',
          title:
            "Real Data Scientists Have A Rare Hybrid Of Skill Sets: Here's What To Look For",
        },
        {
          url: 'https://venturebeat.com/author/michael-li-the-data-incubator/',
          title: 'More articles...',
        },
      ],
    },
    {
      src: '/images/dataconomy.png',
      url: 'http://dataconomy.com/author/tianhuimichaelli/',
      name: 'Dataconomy',
      articles: [
        {
          url: 'https://dataconomy.com/2020/03/how-to-stop-fetishizing-ai/',
          title: 'How to Stop Fetishizing AI',
        },
        {
          url: 'http://dataconomy.com/2017/09/financial-institutions-data-science/',
          title:
            'Why Large Financial Institutions Struggle To Adopt Technology And Data Science',
        },
        {
          url: 'http://dataconomy.com/2016/10/why-employers-miss-millennials/',
          title: 'Why Employers Miss Millennial Data Scientists',
        },
        {
          url: 'https://dataconomy.com/author/tianhuimichaelli/',
          title: 'More articles...',
        },
      ],
    },
    {
      src: '/images/techtarget.png',
      url: 'https://www.techtarget.com/contributor/Tianhui-Michael-Li',
      name: 'TechTarget',
      articles: [
        {
          url: 'https://searchbusinessanalytics.techtarget.com/tip/Hiring-vs-training-data-scientists-The-case-for-each-approach',
          title:
            'Hiring Vs. Training Data Scientists: The Case For Each Approach',
        },
      ],
    },
    {
      src: '/images/oreilly.png',
      url: 'https://www.oreilly.com/people/76a5b-michael-li',
      name: "O'Reilly Radar",
      articles: [
        {
          url: 'https://www.oreilly.com/ideas/leveraging-analytics-1-0-for-the-analytics-2-0-revolution',
          title: 'Leveraging Analytics 1.0 For The Analytics 2.0 Revolution',
        },
        {
          url: 'https://www.oreilly.com/ideas/spark-comparison-aws-vs-gcp',
          title: 'Spark Comparison: AWS vs. GCP',
        },
        {
          url: 'https://www.oreilly.com/ideas/three-best-practices-for-building-successful-data-pipelines',
          title: 'Three Best Practices For Building Successful Data Pipelines',
        },
        {
          url: 'https://www.oreilly.com/ideas/5-secrets-for-writing-the-perfect-data-scientist-resume',
          title: '5 Secrets For Writing The Perfect Data Scientist Resume',
        },
        {
          url: 'https://www.oreilly.com/people/76a5b-michael-li',
          title: 'More articles...',
        },
      ],
    },
  ]

  return (
    <div className='max-w-6xl mx-auto mb-8'>
      {/* Page Header */}
      <div className='glass-card p-8 mb-8 animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Published <span className='gradient-text'>Writing</span>
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl'>
          Thoughts on data science, machine learning, and technology from my
          work at leading publications.
        </p>
      </div>

      {/* Publications Grid */}
      <div className='grid gap-6'>
        {publications.map((pub, idx) => (
          <Publication
            key={pub.name}
            src={pub.src}
            url={pub.url}
            name={pub.name}
            articles={pub.articles}
            delay={100 + idx * 50}
          />
        ))}
      </div>
    </div>
  )
}
