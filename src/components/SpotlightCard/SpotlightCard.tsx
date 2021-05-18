import React from 'react'
import styles from './SpotlightCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SpotlightCard(props: any) {
  const { name, image, role, linkedin, bio } = props

  return (
    <div className={styles.spotlightCard}>
      <img src={image} alt={name} className={styles.profilePic}></img>
      <h2>{name}</h2>
      <h3>{role}</h3>
      <a href={linkedin}>
        <FontAwesomeIcon
          icon={faLinkedin}
          className={styles.icon}
          title="LinkedIn"
        />
      </a>
      <p>{bio}</p>
    </div>
  )
}

export default SpotlightCard
