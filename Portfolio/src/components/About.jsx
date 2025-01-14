import React from 'react'

const About = () => {
  return (
    <>
                <div>
        <section id="about-me" className="ts-block pb-4">
            <div className="container">
            <div className="ts-title text-center">
                <h2>About Me</h2>
            </div>
            {/*end ts-title*/}
            <div className="row ts-align__vertical">
                <div className="col-md-6">
                <img src="assets/img/abc.png" alt className="mw-100 mb-5" />
                </div>
                <div className="col-md-6">
                <h4 className="ts-bubble-border">Hi There</h4>
                <p>
                I'm Sowrov Ahammed, a passionate web developer dedicated to crafting visually appealing and highly functional websites. With expertise in modern web technologies like HTML, CSS, JavaScript, and frameworks such as React or Vue.js, I transform ideas into dynamic online experiences. My focus is on clean design, responsive layouts, and seamless user interactions to ensure every project stands out. Let’s collaborate to bring your vision to life online!"


                </p>
                <dl className="ts-column-count-2">
                    <dt>Name:</dt>
                    <dd>Sowrov Ahammed</dd>
                    <dt>Phone:</dt>
                    <dd>+880 1876429199</dd>
                    <dt>Email:</dt>
                    <dd>mdsowrovahmed@gmail.com</dd>
                    <dt>Twitter:</dt>
                    <dd>freelancer9</dd>
                </dl>
                <hr className="ts-hr-light mb-5" />
                <a href="#contact" className="ts-btn-effect mr-2">
                    <span className="ts-visible btn btn-primary ts-btn-arrow">Contact Me</span>
                    <span className="ts-hidden btn btn-primary ts-btn-arrow" data-bg-color="#d44729">Contact Me</span>
                </a>
                {/*<a href="#contact" class="btn btn-primary ts-btn-arrow mr-2">Contact Me</a>*/}
                {/*<a href="#contact" class="btn btn-outline-light ts-btn-border-light">*/}
                {/*<i class="fa fa-download small mr-2"></i>*/}
                {/*Download CV*/}
                {/*</a>*/}
                <a href="#contact" className="ts-btn-effect mr-2">
                    <span className="ts-visible btn btn-outline-light">
                    <i className="fa fa-download small mr-2" />
                    Download CV
                    </span>
                    <span className="ts-hidden btn btn-light bg-white">
                    <i className="fa fa-download small mr-2" />
                    Download CV
                    </span>
                </a>
                </div>
            </div>
            {/*end row*/}
            </div>
        </section>
        <section className="ts-block">
            <div className="container">
            <div className="text-center px-5 pt-5 position-relative">
                <h3 className="my-3">
                Let’s Work Together On Your Next Project!
                </h3>
                <a href="#contact" className="btn btn-primary mr-2 ts-push-down__50 ts-has-talk-arrow">Hire Me Now!</a>
                <div className="ts-background ts-opacity__20" data-bg-image="assets/img/bg-keyboard.jpg" />
            </div>
            </div>
        </section>
        </div>

    
    </>
  )
}

export default About