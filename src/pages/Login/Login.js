import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import SignIn from '../../components/SignIn/SignIn'
import './Login.css'

function Login() {

    const [signIn, setSignIn] = useState(false)

  return (
    <div className='login'>
        <div className='login__background' >
            <div className='login__gradient'>
                <div className='login__nav'>
                    <img className='login__logo' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png' alt=''/>
                    <button className='login__button' onClick={() => setSignIn(true)}>Sign In</button>
                </div>
                <div className='login__body'>
                    {signIn ? 
                    <SignIn />
                    :
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready-to-watch? Enter your email to create or restart your membership.</h3>
                        <div className='login__input'>
                            <form>
                                <input type='email' placeholder='email address'  />
                                <button onClick={() => setSignIn(true)}>Get Started</button>
                            </form>
                        </div>

                    </>}
                </div>
            </div>
        </div>

        <div className='login__divider' />

        <div className='login__info'>
            <div className='text'>
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
            <div className='login__TV'>
                <video autoPlay muted loop> <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v' type='video/mp4'/></video>
                <img className='tv' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='' ></img>
            </div>
        </div>

        <div className='login__divider' />

        <div className='login__phoneInfo'>
            <div className='phoneInfoText'>
                <h1>Download your shows to watch offline.</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>
            </div>

            <div className='login__phone'>
                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='' />

                <div className='downloadCard'>
                    <img className='showImg' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'  alt=''/>
                    <div className='textCard'>
                        <h1>stranger things</h1>
                        <h2>Download...</h2>
                    </div>
                    <img className='downloadImg' src='https://gameplanet-53f8.kxcdn.com/media/download-digital.gif' alt=''/>

                </div>

            </div>

        </div>

        <div className='login__divider' />

        <div className='login__everywhere'>
            <div className='info'>
                <h1>Watch everywhere.</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
            </div>

            <div className='devices'>
                <video autoPlay muted loop><source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v' type='video/mp4'/></video>

                <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt=''/>
            </div>

        </div>

        <div className='login__divider' />

        <div className='login__kids'>
            <div className='info'>
                <h1>Create profiles for kids.</h1>
                <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>
            <img src='https://occ-0-33-3211.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f' alt='' />
        </div>

        <div className='login__divider' />

        <div className='login__faq'>
            <h1>Frequently Asked Questions</h1>
            <div className='faq__fakeButton'>
                <h2><span>What is Netflix?</span><span>+</span></h2>
            </div>
            <div className='faq__fakeButton'>
                <h2><span>How much does Netflix cost?</span><span>+</span></h2>
            </div>
            <div className='faq__fakeButton'>
                <h2><span>Where can I watch?</span><span>+</span></h2>
            </div>
            <div className='faq__fakeButton'>
                <h2><span>How do I cancel?</span><span>+</span></h2>
            </div>
            <div className='faq__fakeButton'>
                <h2><span>What can I watch on Netflix?</span><span>+</span></h2>
            </div>
            <div className='faq__fakeButton'>
                <h2><span>Is Netflix good for kids?</span><span>+</span></h2>
            </div>

            <div className='getStarter'>
            <h3>Ready-to-watch? Enter your email to create or restart your membership.</h3>
                <form>
                    <input type='email' placeholder='email address'  />
                    <button onClick={() => setSignIn(true)}>Get Started</button>
                </form>
            </div>

        </div>

        <div className='login__divider' />


        <Footer />

    </div>
  )
}

export default Login