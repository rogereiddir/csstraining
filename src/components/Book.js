import React, { Component, Fragment } from 'react'

export default class Book extends Component {
  render() {
    return (
      <Fragment>
        <section className="section-book">
        <div className="row">
          <div className="book">
          <form action="" className="book__form">
           <div className="u-center-text u-margin-bottom-meduim">
                <h2 className="heading-secondary">
                 start Booking now
                </h2>
           </div>
            <div className="form__group">
              <input type="text" id="name" placeholder="Full name" className="form__input"/>
              <label htmlFor="name" className="form__label">Full Name</label>
            </div>
            <div className="form__group">
              <input type="email" id="email" placeholder="Email adresse" className="form__input"/>
              <label htmlFor="email" className="form__label">Email Adresse</label>
            </div>
            <div className="form__group u-margin-bottom-meduim">
             <div className="form__radio-group">
              <input type="radio" id="small" className="form__radio-input" name="size"/>
              <label htmlFor="small" className="form__radio-label">
              <span className="form__radio-button"></span>
              Small tour group</label>
             </div>
             <div className="form__radio-group">
              <input type="radio" id="large" className="form__radio-input" name="size"/>
              <label htmlFor="large" className="form__radio-label">
              <span className="form__radio-button"></span>
              large tour group</label>
             </div>
            
            </div>
            <div className="form__group">
               <button className="btn btn--green">Next Step &rarr;</button>
             </div>
          </form>
          </div>
        </div>
        </section>
      </Fragment>
    )
  }
}
