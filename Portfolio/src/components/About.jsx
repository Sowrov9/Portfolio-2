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
                <img src="assets/img/img-man-looking.jpg" alt className="mw-100 mb-5" />
                </div>
                <div className="col-md-6">
                <h4 className="ts-bubble-border">Hi There</h4>
                <p>
                    In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
                    ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
                    sem turpis quis leo. Nulla in feugiat elit.
                </p>
                <dl className="ts-column-count-2">
                    <dt>Name:</dt>
                    <dd>Jonathan Doe</dd>
                    <dt>Phone:</dt>
                    <dd>+1 908-736-1801</dd>
                    <dt>Email:</dt>
                    <dd>hello@example.com</dd>
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