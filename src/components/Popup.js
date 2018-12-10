import React, { Component , Fragment } from 'react'

export default class Popup extends Component {
  render() {
    return (
      <Fragment>
         <div className="popup">
            <div className="popup__content">
             <div className="popup__left">
              <img src="../../dist/img/nat-8.jpg" alt=""/>
              <img src="../../dist/img/nat-9.jpg" alt=""/>
             </div>
             <div className="popup__right"></div>
            </div>
         </div>
      </Fragment>
    )
  }
}
