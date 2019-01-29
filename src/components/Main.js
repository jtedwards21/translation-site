import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="services" className={`${this.props.article === 'services' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h1 className="align-center">Services</h1>
          <hr/>
          <h3 className="align-center">Cost-Efficient Services</h3>
          <p className="align-center">We provide personalized quotations for each project to give you the quality of translation you need at the best possible price.</p>
          <hr/>
          <h3 className="align-center">Highest Quality End-to-End Translation</h3>
          <p className="align-center">Our team of proofreaders and project managers consists of native speakers of both Mandarin and English, ensuring high-quality, accurate translation.</p>
          <hr/>
          <h3 className="align-center">The Latest Technology Solutions</h3>
          <p className="align-center">Translation Tools enables us to deliver your project quickly and efficiently.</p>
          <hr/>
          <h3 className="align-center">Experience Translators and Proofreaders</h3>
          <p>All our translators are native speakers and we have specialists in a wide range of sectors to ensure the highest possible quality.</p>
          <hr/>
          <h3 className="align-center">Turnaround to Suit Your Deadline</h3>
          <p className="align-center">We can provide accurate translation with a fast turnaround, often in 24 hours or at weekends for especially urgent projects.</p>
          <hr/>
          <h3 className="align-center">Dedicated Project Management</h3>
          <p className="align-center">Every client gets an assigned project manager who will oversee your translations and ensure that they're delivered on time and to a high standard.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>We have done a variety of projects in different areas and present </p>
          {close}
        </article>


        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
