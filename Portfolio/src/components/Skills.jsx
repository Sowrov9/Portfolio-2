import React from 'react'

const Skills = () => {
  return (
    <>
        <div>
  <section id="my-skills" className="ts-block pb-5">
    <div className="container">
      <div className="ts-title text-center">
        <h2>My Skills</h2>
      </div>
      {/*end ts-title*/}
      <h4>Every Day is a  New Challenge</h4>
      <div className="row">
        <div className="col-md-6">
          <p>
          As a web developer, I bring a versatile skill set to the table, including proficiency in HTML, CSS, JavaScript, and frameworks like React and Angular. I excel in creating responsive and user-friendly interfaces, ensuring websites look great and perform seamlessly on any device. Beyond front-end development, I have experience with back-end technologies like Node.js and database management with MongoDB or MySQL. My skills also extend to version control with Git, enabling efficient collaboration and streamlined project workflows.
          </p>
          
          <a href="#contact" className="btn btn-outline-light mb-5">Contact Me</a>
        </div>
        {/*end col-md-6*/}
        <div className="col-md-6">
          <div className="progress" data-progress-width="100%">
            <h5 className="ts-progress-title">Web development</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
          <div className="progress" data-progress-width="80%">
            <h5 className="ts-progress-title">Web Design</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
          <div className="progress" data-progress-width="90%">
            <h5 className="ts-progress-title">Solving problem</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
          <div className="progress" data-progress-width="60%">
            <h5 className="ts-progress-title">Coding</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
        </div>
        {/*end col-md-6*/}
      </div>
      {/*end row*/}
    </div>
    {/*end container*/}
  </section>
  
  
  
</div>

    </>
  )
}

export default Skills
