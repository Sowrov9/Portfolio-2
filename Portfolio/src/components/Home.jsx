import React from 'react'

const Home = () => {
  return (
    <>
                <div id="ts-hero" className="ts-animate-hero-items">
  {/*HERO CONTENT *****************************************************************************************/}
  <div className="container position-relative h-100 ts-align__vertical">
    <div className="row w-100">
      <div className="col-md-8">
        {/*SOCIAL ICONS*/}
        <figure className="ts-social-icons mb-4">
          <a href="#" className="mr-3">
            <i className="fab fa-facebook" />
          </a>
          <a href="#" className="mr-3">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="mr-3">
            <i className="fab fa-pinterest" />
          </a>
          <a href="#" className="mr-3">
            <i className="fab fa-slack" />
          </a>
          <a href="#" className="mr-3">
            <i className="fab fa-instagram" />
          </a>
        </figure>
        {/*TITLE */}
        <h1>I am Jonathan Doe</h1>
        <h1 className="ts-bubble-border">
          <span className="ts-title-rotate">
            <span className="active">Designer</span>
            <span>Photographer</span>
            <span>Creative Person</span>
          </span>
        </h1>
      </div>
      {/*end col-md-8*/}
    </div>
    {/*end row*/}
    <a href="#my-services" className="ts-btn-effect position-absolute ts-bottom__0 ts-left__0 ts-scroll ml-3 mb-3">
      <span className="ts-visible ts-circle__sm rounded-0 ts-bg-primary">
        <i className="fa fa-arrow-down text-white" />
      </span>
      <span className="ts-hidden ts-circle__sm rounded-0">
        <i className="fa fa-arrow-down text-white" />
      </span>
    </a>
  </div>
  {/*end container*/}
  {/*END HERO CONTENT *************************************************************************************/}
  {/*HERO BACKGROUND **************************************************************************************/}
  <div className="ts-background">
    <div className="ts-background-image" data-bg-image="assets/img/bg-hero.jpg" />
  </div>
  {/*END HERO BACKGROUND **********************************************************************************/}
                </div>

    </>
  )
}

export default Home