import React from 'react'
import styled from '@emotion/styled'

const Style = styled.div`
  & {
    height: 100%;
  }

  .logo-frame {
    text-align: center;
  }

  .logo-image {
    max-height: 100%;
    max-width: 80%;
    vertical-align: middle;
  }

  .logo-helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
`

export const Logo = (props) => (
  <Style>
    <a href={props.url}>
      <div className='logo-frame d-flex align-items-center h-100'>
        <span className='logo-helper'></span>
        <img className='logo-image' src={props.src} />
      </div>
    </a>
  </Style>
)
