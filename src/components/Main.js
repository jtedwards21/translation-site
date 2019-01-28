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
          <h2 className="major">Services</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Marketing</h3>
          <p>For companies interested in marketing their product in China we offer WeChat account setup and management. More and more companies are now developing distinct profiles on WeChat to promote their brand and do so through the creation and management of WeChat mini-sites.</p>
          <h3>Translation</h3>
          <p>We offer both Chinese-English and English-Chinese translation with fast turnaround. All projects are done by native speakers with relevant experience. Our areas of experience include: Technical, Marketing, Travel and Online Retail.</p>
          <h3>Localization</h3>
          <p>In addition to translation, we offer localization services, working with our customers to prepare web pages and mobile applications for the Chinese market.</p>
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
