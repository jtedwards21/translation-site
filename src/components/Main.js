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

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p><strong>Do you have a global business? Are you competing within international markets with multiple languages and platforms?</strong></p>
          <p>If the answer is yes, then localization of your website, mobile app, videogame or software should be a vital component of your marketing strategy. It’s essential to not deliver an averagely-translated marketing message that your prospects merely understand; you want to speak to them in their own language and create a message that truly resonates with them.</p>
          <p>Localization and translation services complement one another and ensure your brand message hits its mark. Localization optimizes your content by using precise, targeted keywords that will improve your search engine ranking and conversion rate. Trust your global growth and success with one of the most reputable translation and localization companies in the industry</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>We have experience in the following areas. PDF work samples are provided for your convenience.</p>
          <p><strong>Technical: </strong><a href="#">Sample</a><strong><br/>Marketing: </strong><a href="#">Sample</a><strong><br/>SEO and SEM: </strong><a href="#">Sample</a><strong><br/>Online Retailers: </strong><a href="#">Sample</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>My name is Joshua. I was born in the United States and am fluent in English and Mandarin Chinese. </p>
          <p>I have a degree in computer science from the University of North Carolina and have worked in the technical and business sectors in China and the United States for several years.</p>
          <p>I translate from Mandarin Chinese to English. The majority of my experience is in website and text translation (various topics). Keeping deadlines is a top priority for me.</p>
          <p>Some are the topics I specialize in are:</p>
          <p><strong>Technical<br/>Marketing<br/>SEO and SEM<br/>Online Retailers</strong></p>
          <p>As an English native speaker I guarantee that my translations will be correct and that you will be satisfied. Feel free to contact me any time!</p>
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
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
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
