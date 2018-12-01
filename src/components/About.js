import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="section-about">
              <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                  Exciting tours for adventurous people
                </h2>
              </div>
              <div className="row">
                <div className="col-1-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                      You are going to fall in love with nature
                    </h3>
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam, doloremque asperiores vel rerum inventore necessitatibus debitis quia eligendi accusantium. Repudiandae, rem corrupti? Ad sint cupiditate, sed quia ex labore?
                    </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">
                      Live adventures like you never have before
                    </h3>
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam, doloremque asperiores vel rerum inventore necessitatibus debitis quia eligendi accusantium. Repudiandae, rem corrupti? Ad sint cupiditate, sed quia ex labore?
                    </p>
                    <a href="#" className="btn-text">learn more &rarr;</a>
                </div>
                <div className="col-1-2">
                  <div className="composition">
                    <img src="/dist/img/nat-1-large.jpg" alt="" className="composition__photo composition__photo--p1"/>
                    <img src="/dist/img/nat-2-large.jpg" alt="" className="composition__photo composition__photo--p2"/>
                    <img src="/dist/img/nat-3-large.jpg" alt="" className="composition__photo composition__photo--p3"/>
                  </div> 
                </div>
              </div>

            </section>
      </div>
    )
  }
}
