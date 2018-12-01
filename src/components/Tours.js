import React, { Component } from 'react'

export default class Tours extends Component {
  render() {
    return (
      <div>
        <section className="section-tours">
             <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Most Popular tours
                </h2>
              </div>
              <div className="row">
                  <div className="col-1-3">
                    <div className="card">
                      <div className="card__side card__side--front">

                       <div className="card__picture card__picture--1">
                         &nbsp;
                       </div>

                       <h4 className="card__heading">
                       <span className="card__heading-span card__heading-span--1">
                         the sea explorer
                       </span>     
                       </h4>
                       <div className="card__details">
                          <ul>
                            <li>3 days Tours</li>
                            <li>up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>sleep in cozy hotels</li>
                            <li>Difficulty:easy</li>
                          </ul>
                       </div>
                      </div>

                      <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$254</p>
                         
                        </div>
                        <a href="#" className="btn btn--white">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-3">
                    <div className="card">
                    <div className="card__side card__side--front">

                       <div className="card__picture card__picture--2">
                         &nbsp;
                       </div>

                       <h4 className="card__heading">
                       <span className="card__heading-span card__heading-span--2">
                         the forest hiker
                       </span>     
                       </h4>
                       <div className="card__details">
                          <ul>
                            <li>3 days Tours</li>
                            <li>up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>sleep in cozy hotels</li>
                            <li>Difficulty:easy</li>
                          </ul>
                       </div>
                      </div>
                      
                      <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$254</p>
                         
                        </div>
                        <a href="#" className="btn btn--white">Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-1-3">
                    <div className="card">
                    <div className="card__side card__side--front">

                        <div className="card__picture card__picture--3">
                          &nbsp;
                        </div>

                        <h4 className="card__heading">
                        <span className="card__heading-span card__heading-span--3">
                          the snow adventurer
                        </span>     
                        </h4>
                        <div className="card__details">
                          <ul>
                            <li>3 days Tours</li>
                            <li>up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>sleep in cozy hotels</li>
                            <li>Difficulty:easy</li>
                          </ul>
                        </div>
                        </div>

                        <div className="card__side card__side--back card__side--back-3">
                        <div className="card__cta">
                        <div className="card__price-box">
                          <p className="card__price-only">Only</p>
                          <p className="card__price-value">$254</p>
                          
                        </div>
                        <a href="#" className="btn btn--white">Book Now</a>
                        </div>
                        </div>
                    </div>
                  </div>
              </div>

            <div className="u-center-text u-margin-top-big">
               <a href="#" className="btn btn--green">Discover all tours</a>
            </div>   
        </section>
      </div>
    )
  }
}
