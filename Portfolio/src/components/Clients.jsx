import React from 'react'

const Clients = () => {
  return (
    <>
                    <div>
        <section id="testimonials" className="ts-block text-center pb-5">
            <div className="container">
            <div className="ts-title">
                <h2>Testimonials</h2>
            </div>
            {/*end ts-title*/}
            <div className="row">
                <div className="col-md-8 offset-md-2">
                <div className="owl-carousel" data-owl-dots={1} data-owl-loop={1} data-animate="ts-fadeInUp">
                    <div className="slide mb-5">
                    <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                        <i className="fa fa-quote-right" />
                    </figure>
                    <p className="ts-h5">
                        In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus
                        fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis
                    </p>
                    <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person.jpg" />
                    <h5>Jane Doe</h5>
                    <h6 className="ts-opacity__40">Bristol Creative</h6>
                    </div>
                    {/*end slide*/}
                    <div className="slide mb-5">
                    <figure className="d-inline-block p-3 ts-bg-primary text-white ts-has-talk-arrow">
                        <i className="fa fa-quote-right" />
                    </figure>
                    <p className="ts-h5">
                        Nam egestas porta posuere. Nunc velit lorem, vestibulum vitae massa nec, lacinia dictum
                        ligula. Quisque scelerisque nec dolor id convallis. Vestibulum porta ipsum pretium
                        turpis rhoncus, non fringilla ipsum mattis.
                    </p>
                    <div className="ts-circle__lg mb-3" data-bg-image="assets/img/person-02.jpg" />
                    <h5>John Brown</h5>
                    <h6 className="ts-opacity__40">ABC Architects</h6>
                    </div>
                    {/*end slide*/}
                </div>
                {/*end owl-carousel*/}
                </div>
                {/*end col-md-8*/}
            </div>
            {/*end row*/}
            </div>
            {/*end container*/}
        </section>
        <section id="partners" className="ts-block py-4">
            {/*container*/}
            <div className="container">
            {/*block of logos*/}
            <div className="d-block d-md-flex justify-content-between align-items-center text-center ts-partners py-3">
                <a href="#">
                <img src="assets/img/logo-01-w.png" alt />
                </a>
                <a href="#">
                <img src="assets/img/logo-02-w.png" alt />
                </a>
                <a href="#">
                <img src="assets/img/logo-03-w.png" alt />
                </a>
                <a href="#">
                <img src="assets/img/logo-04-w.png" alt />
                </a>
                <a href="#">
                <img src="assets/img/logo-05-w.png" alt />
                </a>
            </div>
            {/*end logos*/}
            </div>
            {/*end container*/}
        </section>
        </div>

    
    </>
  )
}

export default Clients