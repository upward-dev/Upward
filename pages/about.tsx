import React from 'react'
import Head from 'next/head'
import SpotlightCard from '../components/SpotlightCard'

function About() {
  return (
    <div>
      <Head>
        <title>Upward</title>
        <meta name="description" content="Advancing women in tech" />
        <link rel="icon" href="/upward-logo.svg" />
      </Head>
      <div className="container page-margin-top">
        <h1 className="text-center">Our Mission </h1>
        <div>
          <p>
            Upward is a platform providing free mentorship for women engineers looking for a new role to level up their careers in diverse and inclusive companies.
            By signing up, you will get paired up with engineering leaders, access interview preparation materials and connect with awesome hiring managers.
          </p>
          <p>
             This platform is an open source project built by women engineers seeking to gain experience in new technologies 
             such as React and Node.js.        
          </p>
        </div>
        <hr className="dotted"/>
        <h1 className="text-center"> Leadership team </h1>
        <br/>
        <div className="container">
          <div className="row">
            <SpotlightCard
              name="Mariane Bekker"
              image="/marianebekker.jpeg"
              role="Founder &amp; CEO"
              linkedin="https://www.linkedin.com/in/marianebekker/"
              bio="Mariane is a software engineer leader with over a decade of experience building and managing diverse engineering team. She founded Upward to help bridge the gender gap in tech by providing free mentorship tools for women engineers."></SpotlightCard>
            <SpotlightCard
              name="Louise Lehman"
              role="Lead Software Engineer"
              image="/louiselehman.jpeg"
              linkedin="https://www.linkedin.com/in/louiselehman/"
              bio="Louise is a Full Stack Software Engineer working in the health industry who aspires to be a humble teacher, a trustworthy and helpful collaborator, a good listener, an analytical thinker, a good friend, and to be graceful amidst chaos."></SpotlightCard>
              <SpotlightCard
              name="Ainne Oum"
              role="Lead Front End Engineer"
              image="/ainneoum.png"
              linkedin="https://www.linkedin.com/in/ainneoum/"
              bio="Ainne is a Frontend Engineer with expertize in React and responsive design. She is passionate about mentoring other women and is currently managing and leading the Women Who Code SF chapter."></SpotlightCard>
          </div>
          <hr className="dotted"/> 
          <h1 className="text-center"> Contributors </h1>
          <br/>
          <div className="container">
            <div className="row">
              <SpotlightCard
                name="Alice Davis"
                image="/alicedavis.jpeg"  
                role="Full Stack Engineer"
                linkedin="https://www.linkedin.com/in/diffalot/"></SpotlightCard>
              <SpotlightCard
                name="Bailey Ritchie"
                image="/baileyritchie.jpeg"              
                role="Full Stack Engineer"

                linkedin="https://www.linkedin.com/in/bailey-ritchie-568569142/"></SpotlightCard>
              <SpotlightCard
                name="Eula Bengo"
                role="Full Stack Engineer"                
                image="/eulabengco.jpeg"              
                linkedin="https://www.linkedin.com/in/eulabengco/"></SpotlightCard>
            </div>
          </div>
          <hr className="dotted"/> 
          <br/>
          <h1 className="text-center"> Mentors </h1>
          <br/>
          <div className="container">
            <div className="row">
              <SpotlightCard
                name="Alex Robson"
                image="/alexrobson.jpeg"  
                role="Engineering Leader"                
                linkedin="https://www.linkedin.com/in/alexsrobson/"></SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
