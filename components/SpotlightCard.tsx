import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import customStyles from '../styles/SpotlightCard.module.scss'


function SpotlightCard(props: any) {
  const { name, image, role, linkedin, website, bio } = props

  return (
    <div className="col-sm-4 text-center">
      {image ? <img src={image} alt={name} className={customStyles.profilePic}></img> : ""}
      <h4>{name}</h4>
      {role ? <h5>{role}</h5> : ""}
        <div class="row justify-content-md-center">
      <a href={linkedin} class="col-sm-2" target="_blank">     
        <FontAwesomeIcon       
          icon={faLinkedin}
          className={customStyles.icon}
          title="LinkedIn"          
        />
      </a>
      {
        website ?
        (
        <a href={website} class="col-sm-2" target="_blank">     
          <FontAwesomeIcon       
            icon={faGlobe}
            className={customStyles.icon}
            title="Portfolio"
          />
      </a>
      ) 
      : ""
      } 
      </div> 
      <p>{bio}</p>
    </div>
  )
}

export default SpotlightCard
