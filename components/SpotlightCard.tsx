import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import customStyles from '../styles/SpotlightCard.module.scss'


function SpotlightCard(props: any) {
  const { name, image, role, linkedin, bio } = props

  return (
    <div className="col-sm text-center">
      {image ? <img src={image} alt={name} className={customStyles.profilePic}></img> : ""}
      <h4>{name}</h4>
      {role ? <h5>{role}</h5> : ""}
      <a href={linkedin}>
        <FontAwesomeIcon
          icon={faLinkedin}
          className={customStyles.icon}
          title="LinkedIn"
        />
      </a>
      <p>{bio}</p>
    </div>
  )
}

export default SpotlightCard
