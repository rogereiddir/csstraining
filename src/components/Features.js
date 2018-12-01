import React, { Component } from 'react'

export default class Features extends Component {
  render() {
    return (
      <div>
        <section className="section-features">
         
          <div className="row">
              <div className="col-1-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-world"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                    <p className="feature-box__text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur itaque modi iusto quibusdam ab expedita voluptatibus quasi molestias. Dolorum porro harum.
                    </p>
                </div>
              </div>
              <div className="col-1-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-compass"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
                    <p className="feature-box__text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur itaque modi iusto quibusdam ab expedita voluptatibus quasi molestias. Dolorum porro harum.
                    </p>
                </div>
              </div>
              <div className="col-1-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-map"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">Find Your way</h3>
                    <p className="feature-box__text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur itaque modi iusto quibusdam ab expedita voluptatibus quasi molestias. Dolorum porro harum.
                    </p>
                </div>
              </div>
              <div className="col-1-4">
                <div className="feature-box">
                    <i className="feature-box__icon icon-basic-heart"></i>
                    <h3 className="heading-tertiary u-margin-bottom-small">live Healthier</h3>
                    <p className="feature-box__text">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur itaque modi iusto quibusdam ab expedita voluptatibus quasi molestias. Dolorum porro harum.
                    </p>
                </div>
              </div>
          </div>
        </section>
      </div>
    )
  }
}
