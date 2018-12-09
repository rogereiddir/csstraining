import React, { Component , Fragment } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer">
           <div className="footer__logo-box">
             <img src="../../dist/img/logo-green-2x.png" alt="full logo" className="footer__logo"/>
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
