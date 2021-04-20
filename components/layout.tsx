import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NavLink: React.FC<{ href: string }> = (props) => (
  <Link href={props.href}>
    <a className='nav-link'>{props.children}</a>
  </Link>
)

const domainURL = 'https://tianhui.li'
const imageURL = domainURL + '/images/tianhuil.jpg'

const themeBlue = 'rgb(25, 160, 210)'

const Style = styled.div`
  .navbar {
    border-bottom: 1px solid #dddddd;
    background-color: transparent;
    padding: 6px 16px;
  }

  .navbar-brand {
    color: ${themeBlue};
    font-weight: 200;
    font-size: 46px;
    padding: 0px;
  }
  .navbar-brand a {
    padding: 0px;
  }

  .navbar-nav li a {
    font-size: 18px;
    color: #808080;
    font-weight: 200;
  }

  .navbar-nav li.active a {
    color: #606060;
    font-weight: 300;
  }

  .navbar-nav li a:hover,
  .navbar-nav li a:focus {
    background-color: transparent;
    color: ${themeBlue};
  }
`

const links = [
  {
    link: '/',
    text: 'Home',
  },
  {
    link: '/professional',
    text: 'Professional',
  },
  {
    link: '/writing',
    text: 'Writing',
  },
  {
    link: '/mentorship',
    text: 'Mentorship',
  },
]

const Header = () => {
  const router = useRouter()
  return (
    <Style>
      <nav className='navbar navbar-expand-sm mb-5'>
        <div className='container'>
          <div className='navbar-brand'>
            <NavLink href='/'>Michael Li</NavLink>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              {links.map(({ link, text }, key) => (
                <li
                  className={`nav-item ${
                    router.asPath === link ? 'active' : ''
                  }`}
                  key={key}
                >
                  <NavLink href={link}>{text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </Style>
  )
}

const HeadDiv = () => (
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <meta charSet='utf-8' />
    <meta charSet='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>Michael Li</title>

    {/* Facebook */}
    <meta property='og:title' content='Michael Li' />
    <meta property='profile:first_name' content='Michael' />
    <meta property='profile:last_name' content='Li' />
    <meta property='profile:gender' content='male' />
    <meta property='og:type' content='profile' />
    <meta
      property='og:description'
      content='Personal Homepage for Tianhui Michael Li'
    />
    <meta property='og:image' content={imageURL} />
    <meta property='og:url' content={domainURL} />

    {/* Twitter */}
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:site' content='@tianhuil' />

    {/* Stylesheet */}
    <link
      rel='stylesheet'
      href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'
      crossOrigin='anonymous'
    />

    {/* Favicons from https://www.favicon-generator.org/ */}
    <link
      rel='apple-touch-icon'
      sizes='57x57'
      href='/favicons/apple-icon-57x57.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='60x60'
      href='/favicons/apple-icon-60x60.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='72x72'
      href='/favicons/apple-icon-72x72.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='76x76'
      href='/favicons/apple-icon-76x76.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='114x114'
      href='/favicons/apple-icon-114x114.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='120x120'
      href='/favicons/apple-icon-120x120.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='144x144'
      href='/favicons/apple-icon-144x144.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='/favicons/apple-icon-152x152.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/favicons/apple-icon-180x180.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='192x192'
      href='/favicons/android-icon-192x192.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/favicons/favicon-32x32.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='96x96'
      href='/favicons/favicon-96x96.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='16x16'
      href='/favicons/favicon-16x16.png'
    />
    <link rel='manifest' href='/favicons/manifest.json' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta
      name='msapplication-TileImage'
      content='/favicons/ms-icon-144x144.png'
    />
    <meta name='theme-color' content='#ffffff' />
  </Head>
)

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <HeadDiv />
      <Header />
      <section>
        <div className='container'>{children}</div>
      </section>
      <div></div> {/* footer */}
      <Global
        styles={css`
          h1 {
            color: ${themeBlue};
            font-weight: 200;
            font-size: 36px;
          }

          h2 {
            font-weight: 100;
            color: #888888;
            font-size: 20px;
          }

          body a {
            color: ${themeBlue};
          }

          body p {
            font-weight: 200;
            color: #888888;
            font-size: 16px;
          }
        `}
      />
    </div>
  )
}

export default Layout
