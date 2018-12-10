import React, { Component , Fragment } from 'react'

export default class Popup extends Component {
  render() {
    return (
      <Fragment>
         <div className="popup" id="popup">
            <div className="popup__content">
             <div className="popup__left">
              <img src="../../dist/img/nat-8.jpg" className="popup__img" alt=""/>
              <img src="../../dist/img/nat-9.jpg" className="popup__img" alt=""/>
             </div>
             <div className="popup__right">
             <a href="#section-tours" className="popup__close">&times;</a>
               <h2 className="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
               <h3 className="heading-tertiary u-margin-bottom-small">
               Important &ndash; Please read these Terms before booking
               </h3>
               <p className="popup__text">
               On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
               </p>
               <a href="#" className="btn btn--green">Book Now</a>
             </div>
            </div>
         </div>
      </Fragment>
    )
  }
}
