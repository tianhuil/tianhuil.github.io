import React from 'react';

export default (props) => (
  <a href={props.url} >
    <div className="logo-frame">
      <span className="logo-helper"></span>
      <img className="logo-image" src={props.src}/>
    </div>
    <style jsx>{`
      .logo-frame {
        text-align: center;
      }

      .logo-image {
        max-height:100%;
        max-width:80%;
        vertical-align: middle;
      }

      .logo-helper {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
    `}</style>
  </a>
)
