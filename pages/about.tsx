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
              website="https://ainneoum.netlify.app/"
              linkedin="https://www.linkedin.com/in/ainneoum/"
              bio="Ainne is a Frontend Engineer with expertize in React and responsive design. She is passionate about mentoring other women and is currently managing and leading the Women Who Code SF chapter."></SpotlightCard>
          </div>

          <br/>
          <div className="container">
            <div className="row">
              <SpotlightCard
               name='Rachael Concessio'
               image="/rachaelconcessio.jpeg"
               role="Front End Engineer"
               linkedin="https://www.linkedin.com/in/rachael-concessio-1272441a7/"
               bio="Rachael is a Frontend Engineer with experience in React and creating well-designed websites. She is passionate about using her skills to create an impact and loves to network and collaborate with other developers.">
               </SpotlightCard>             
              <SpotlightCard
                name="Bailey Ritchie"
                image="/baileyritchie.jpeg"              
                role="Full Stack Engineer"
                bio="Bailey is a full-stack developer with experience in developing responsive web applications in React and Node. As a career transitioner herself, she is focused on helping women succeed in the tech industry through mentorship, education and her contributions to various open source projects."
                website="http://baileyritchie.com/"
                linkedin="https://www.linkedin.com/in/bailey-ritchie-568569142/"></SpotlightCard>
              <SpotlightCard
                name="Eula Bengo"
                role="Full Stack Engineer"                
                image="/eulabengco.jpeg"    
                bio="Eula is a well-accomplished full stack engineer with experience in building web applications from conceptualization, architecture, development all the way to release. She has a passion for clean code and intuitive UI that elevate user experience. A forward thinker and problem solver, she loves learning new things and sharing her knowledge through networking and mentoring."   
                website="https://eulabeng.co/"       
                linkedin="https://www.linkedin.com/in/eulabengco/"></SpotlightCard>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <SpotlightCard
                name="Nicole Pasquale"
                role="Full Stack Engineer"                
                image="/nicole.jpeg"     
                bio="Full Stack Developer with a passion for learning and working to find optimal solutions for difficult to solve problems. Skilled in HTML, CSS, JavaScript, ReactJS, TypeScript, WordPress, Node.js, Express.js, MySQL, and additional technologies. Collaborative and dependable team-player with a desire to develop dynamic, efficient, and responsive full stack web applications."         
                linkedin="https://www.linkedin.com/in/nicole-pasquale//"></SpotlightCard>

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
