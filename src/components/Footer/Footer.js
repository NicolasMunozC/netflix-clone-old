import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='footer'>
        <h4>questions? Call 111 111 222 222</h4>
        <div className='footer__nav'>
            <div className='col1'>
                <ul>
                    <li>FAQ</li>
                    <li>accounts</li>
                    <li>Investor Relations</li>
                    <li>Redeem Gift Cards</li>
                    <li>Term of Use</li>
                    <li>Cookie Preferences</li>
                    <li>contact us</li>
                    <li>legal notices</li>
                </ul>
            </div>

            <div className='col2'>
                <ul>    
                    <li>Help Center</li>
                    <li>Media Center</li>
                    <li>jobs</li>
                    <li>Ways to Watch</li>
                    <li>privacy</li>
                    <li>Corporate Information</li>
                    <li>speed test</li>
                    <li>Only on Netflix</li>
                </ul>
            </div>
        </div>

    </div>

    <h3 className='lastFooterMessage'>Netflix made in Chile 🇨🇱</h3>
    </>
  )
}

export default Footer