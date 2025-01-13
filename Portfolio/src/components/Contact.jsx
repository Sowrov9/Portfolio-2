import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="ts-block ts-separate-bg-element" data-bg-image="assets/img/bg-man-wall.jpg" data-bg-image-opacity=".1">
    <div className="container">
      <div className="ts-title text-center">
        <h2 className="ts-bubble-border">Get In Touch</h2>
      </div>
      <div className="row ts-xs-text-center ">
        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp">
          <img src="assets/img/icon-pin.png" className="mb-4" alt />
          <h5>Address</h5>
          <div className="ts-opacity__50">
            <figure className="mb-0">999 Carter Street</figure>
            <figure>Sailor Springs, IL 62434</figure>
          </div>
          {/*end ts-opacity__50*/}
        </div>
        {/*end col-md-3*/}
        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".1s">
          <img src="assets/img/icon-phone-02.png" className="mb-4" alt />
          <h5>Phone</h5>
          <div className="ts-opacity__50">
            <figure className="mb-0">+1 618-689-9409</figure>
            <figure>+1 781-254-8437</figure>
          </div>
          {/*end ts-opacity__50*/}
        </div>
        {/*end col-md-3*/}
        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".2s">
          <img src="assets/img/icon-envelope.png" className="mb-4" alt />
          <h5>Email</h5>
          <div className="ts-opacity__50">
            <figure className="mb-0">hello@example.com</figure>
            <figure>support@example.com</figure>
          </div>
          {/*end ts-opacity__50*/}
        </div>
        {/*end col-md-3*/}
        <div className="col-sm-6 col-md-3 mb-4" data-animate="ts-fadeInUp" data-delay=".3s">
          <img src="assets/img/icon-talk-bubble.png" className="mb-4" alt />
          <h5>Facebook Chat</h5>
          <div className="ts-opacity__50">
            <figure>me.freelancer3</figure>
          </div>
          {/*end ts-opacity__50*/}
        </div>
        {/*end col-md-3*/}
      </div>
      {/*end row*/}
      <div className="pt-5">
        <div className="row">
          <div className="col-md-4">
            <h3>Let’s Connect</h3>
            <div className="ts-column-count-sm-2">
              <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                <span className="ts-circle__xs border border-white ts-border-light mr-4">
                  <i className="fab fa-facebook-f" />
                </span>
                <span>Facebook</span>
              </a>
              {/*end link*/}
              <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                <span className="ts-circle__xs border border-white ts-border-light mr-4">
                  <i className="fab fa-twitter" />
                </span>
                <span>Twitter</span>
              </a>
              {/*end link*/}
              <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                <span className="ts-circle__xs border border-white ts-border-light mr-4">
                  <i className="fab fa-instagram" />
                </span>
                <span>Instagram</span>
              </a>
              {/*end link*/}
              <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                <span className="ts-circle__xs border border-white ts-border-light mr-4">
                  <i className="fab fa-pinterest-p" />
                </span>
                <span>Pinterest</span>
              </a>
              {/*end link*/}
              <a href="#" className="mb-3 d-flex text-white ts-align__vertical">
                <span className="ts-circle__xs border border-white ts-border-light mr-4">
                  <i className="fab fa-skype" />
                </span>
                <span>Skype</span>
              </a>
              {/*end link*/}
            </div>
          </div>
          {/*end col-md-4*/}
          <div className="col-md-8">
            <h3>Send Me a Message</h3>
            <form id="form-contact" method="post" className="clearfix ts-form ts-form-email" data-php-path="assets/php/email.php">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="form-contact-name">Name *</label>
                    <input type="text" className="form-control" id="form-contact-name" name="name" placeholder="Name" required />
                  </div>
                  {/*end form-group */}
                </div>
                {/*end col-md-6 col-sm-6 */}
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label htmlFor="form-contact-email">Email *</label>
                    <input type="email" className="form-control" id="form-contact-email" name="email" placeholder="Email" required />
                  </div>
                  {/*end form-group */}
                </div>
                {/*end col-md-6 col-sm-6 */}
              </div>
              {/*end row */}
              <div className="form-group">
                <label htmlFor="form-contact-subject">Subject *</label>
                <input type="email" className="form-control" id="form-contact-subject" name="subject" placeholder="Subject" required />
              </div>
              {/*end form-group */}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="form-contact-message">Message *</label>
                    <textarea className="form-control" id="form-contact-message" rows={5} name="message" placeholder="Message" required defaultValue={""} />
                  </div>
                  {/*end form-group */}
                </div>
                {/*end col-md-12 */}
              </div>
              {/*end row */}
              <div className="form-group clearfix">
                <button type="submit" className="btn btn-primary float-right ts-btn-arrow" id="form-contact-submit">Send a Message</button>
              </div>
              {/*end form-group */}
              <div className="form-contact-status" />
            </form>
            {/*end form-contact */}
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
    {/*end container*/}
  </section>
  )
}

export default Contact
