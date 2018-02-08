import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

const Header = () => (
  <div>
    <div className={"navbar"}>
      <div className={"container"}>
        <Link href="/" className="navbar-brand">Michael Li</Link>
        <ul className={"nav navbar-nav navbar-right"}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/professional">Professional</Link>
          </li>
          <li>
            <Link href="/writing">Writing</Link>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .navbar {
        border-bottom: 1px solid #dddddd;
        padding: 15px 15px;
        background-color: transparent;
      }

      .navbar-brand {
        color: rgb(25,160,210);
        font-weight: 200;
        font-size: 46px;
      }

      .navbar-nav li a {
        font-size: 18px;
        color: #aaaaaa;
        font-weight: 100;
      }

      .navbar-nav li.active a {
        color: #dddddd;
      }

      .navbar-nav li a:hover,
      .navbar-nav li a:focus {
        background-color: transparent;
        color: #dddddd;
      }
    `}</style>
  </div>
)

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Tianhui Michael Li</title>

          {/* Facebook */}
          <meta property="og:title" content="Michael Li"/>
          <meta property="og:image" content="/images/tianhuil.jpg"/>
          <meta property="og:description" content="Personal Homepage for Tianhui Michael Li"/>

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@tianhuil" />
          <meta name="twitter:title" content="Michael Li" />
          <meta name="twitter:description" content="Personal Homepage for Tianhui Michael Li" />
          <meta name="twitter:image" content="http://tianhuil.github.io/" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" />
        </Head>
        <Header />
        <section>
          <div className={"mt30 container"}>
            {this.props.children}
          </div>
        </section>
        <div></div>  {/* footer */}
        <style jsx global>{`
          h1 {
            color: rgb(25,160,210);
            font-weight: 200;
            font-size: 36px;
          }

          h2 {
            font-weight: 100;
            color: #888888;
            font-size: 20px;
          }

          body a {
            color: rgb(25,160,210);
          }

          body p {
            font-weight: 200;
            color: #888888;
            font-size: 16px;
          }

          .mt5 {
            margin-top: 5px;
          }

          .mb5 {
            margin-bottom: 5px;
          }

          .mt15 {
            margin-top: 15px;
          }

          .mb15 {
            margin-bottom: 15px;
          }

          .mt30 {
            margin-top: 30px;
          }

          .mb30 {
            margin-bottom: 30px;
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
