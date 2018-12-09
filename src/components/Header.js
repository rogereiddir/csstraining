import React, { Component,Fragment } from 'react'

export default class Header extends Component {
  render() {
    return (
      <Fragment>
       <header className="header">
            <div className="header__logo-box">
                <img src="../../dist/img/logo-white.png" alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>    
                </h1>

                <a href="#" className="btn btn--white btn--anime">Discover Our Tours</a>
            </div>
        </header>
        {/* <section className="grid-test">
           <div className="row">
            <div className="col-1-2">
               col 1 of 2 
            </div>
            <div className="col-1-2">
               col 1 of 2 
            </div>
           </div>

           <div className="row">
            <div className="col-1-3">
               col 1 of 3 
            </div>
            <div className="col-1-3">
               col 1 of 3
            </div>
            <div className="col-1-3">
               col 1 of 3
            </div>
           </div>

           <div className="row">
            <div className="col-1-3">
               col 1 of 3 
            </div>
            <div className="col-2-3">
               col 2 of 3
            </div>
           </div>

            <div className="row">
              <div className="col-1-4">
                col 1 of 4 
              </div>
              <div className="col-1-4">
                col 1 of 4
              </div>
              <div className="col-1-4">
                col 1 of 4
              </div>
              <div className="col-1-4">
                col 1 of 4
              </div>
           </div>

            <div className="row">
              <div className="col-1-4">
                col 1 of 4 
              </div>
              <div className="col-1-4">
                col 1 of 4
              </div>
              <div className="col-2-4">
                col 2 of 4
              </div>
           </div>

           <div className="row">
              <div className="col-1-4">
                col 1 of 4 
              </div>
              <div className="col-3-4">
                col 3 of 4
              </div>
           </div>

        </section> */}
        
      </Fragment>
    )
  }
}
