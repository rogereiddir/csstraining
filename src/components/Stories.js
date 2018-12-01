import React, { Component } from 'react'

export default class Stories extends Component {
  render() {
    return (
     <div>
    <section className="section-stories">
    <div className="bg-video">
     <video className="bg-video__content" autoPlay muted loop>
      <source src="../../dist/img/video.mp4" type="video/mp4" />
      <source src="../../dist/img/video.webm" type="video/webm"/>
      You browser is not supported !!
     </video>
    </div>
        <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                we make people happy
                </h2>
        </div>
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                  <img src="../../dist/img/nat-8.jpg" alt="Person on a tour" className="story__img"/>
                  <figcaption className="story__caption">MARY SMITH</figcaption>
                </figure>
                
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">Best week with my fimaly</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam tenetur veniam et, neque saepe? Repudiandae alias suscipit, qui accusamus sapiente minima perferendis dolore asperiores nostrum dolores aut necessitatibus beatae.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                  <img src="../../dist/img/nat-9.jpg" alt="Person on a tour" className="story__img"/>
                  <figcaption className="story__caption">jack well</figcaption>
                </figure>
                
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-small">Best week with my fox</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam tenetur veniam et, neque saepe? Repudiandae alias suscipit, qui accusamus sapiente minima perferendis dolore asperiores nostrum dolores aut necessitatibus beatae.</p>
                </div>
            </div>
        </div>

        
        <div className="u-center-text u-margin-top-big">
               <a href="#" className="btn btn--text">read  all stories</a>
            </div>   
      </section>
     </div>
    )
  }
}
