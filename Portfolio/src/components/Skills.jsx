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
            In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum
            ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta
            sem turpis quis leo. Nulla in feugiat elit.
          </p>
          <p>
            Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin
            turpis in enim elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae
          </p>
          <a href="#contact" className="btn btn-outline-light mb-5">Contact Me</a>
        </div>
        {/*end col-md-6*/}
        <div className="col-md-6">
          <div className="progress" data-progress-width="100%">
            <h5 className="ts-progress-title">Webdesign</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
          <div className="progress" data-progress-width="80%">
            <h5 className="ts-progress-title">Photography</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
          <div className="progress" data-progress-width="90%">
            <h5 className="ts-progress-title">Coding</h5>
            <figure className="ts-progress-value" />
            <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
          </div>
          {/*end progress*/}
          <div className="progress" data-progress-width="60%">
            <h5 className="ts-progress-title">Copywriting</h5>
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
