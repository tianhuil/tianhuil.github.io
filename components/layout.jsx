import React from 'react';
import Link from 'next/link'
import Head from 'next/head'

const NavLink = (props) => (
  <Link href={props.href}>
    <a className="nav-link">
      {props.children}
    </a>
  </Link>
)

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-sm mb30">
      <div className="container">
        <div className="navbar-brand">
          <NavLink href="/" >Michael Li</NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="navbar-link" href="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/professional">Professional</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/writing"> Writing </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <style jsx>{`
      .navbar {
        border-bottom: 1px solid #dddddd;
        background-color: transparent;
        padding: 6px 16px;
      }

      .navbar-brand {
        color: rgb(25,160,210);
        font-weight: 200;
        font-size: 46px;
        padding: 0px;
      }
      .navbar-brand a {
        padding: 0px;
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
          <meta name="twitter:image" content="https://tianhui.li/" />
          <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"/>
        </Head>
        <Header />
        <section>
          <div className="container">
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
