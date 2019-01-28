import React from 'react'
import PropTypes from 'prop-types'
import tn from '../images/logos/clear_long_logo.png'
import logo from '../images/logos/header.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <span className="image"></span>
                <span className=""><img src={logo} alt="" /><h1>SCRIPPT</h1></span>
                <p>A Chinese-based ageny handling translation, localization and marketing.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Services</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
