import React, { Component } from 'react'
import Features  from 'Features'
import About  from 'About'
import Tours  from 'Tours'
import Stories from 'Stories';
import Book from 'Book';
import Footer from 'Footer';
import Popup from 'Popup';

export default class Main extends Component {
  render() {
    return (
      <div>
        <main>
            <About/>
            <Features />
            <Tours/>
            <Stories/>
            <Book/>
            <Footer/>
            <Popup/>
        </main>
      </div>
    )
  }
}
