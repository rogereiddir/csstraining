import React, { Component , Fragment } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer">
           <div className="footer__logo-box">

             <picture className="footer__logo">
            <source srcSet="/dist/img/logo-green-small-1x.png 1x,/dist/img/logo-green-small-2x.png 2x" media="(max-width: 37.5em)"/>
               <img srcSet="/dist/img/logo-green-2x.png 1x, /dist/img/logo-green-2x.png 2x" alt="full logo" />
             </picture>
             
           </div>
           <div className="row">
             <div className="col-1-2">
               <div className="footer__navigation">
                 <ul className="footer__list">
                   <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                   <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                   <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                   <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
                   <li className="footer__item"><a href="#" className="footer__link">Services</a></li>
                 </ul>
               </div>
             </div>
             <div className="col-1-2">
             <p className="footer__copy-right">
              Built by <a href="#" className="footer__link">Abdeljalil Ait etaleb</a>
             </p>
             </div>
           </div>
        </footer>
      </Fragment>
    )
  }
}
