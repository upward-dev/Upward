import React from 'react'
import styles from './SpotlightCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function SpotlightCard(props: any) {
  return (
    <div className={styles.spotlightCard}>
      <img
        src={props.image}
        alt={props.name}
        className={styles.profilePic}></img>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <a href={props.linkedin}>
        <FontAwesomeIcon
          icon={faLinkedin}
          className={styles.icon}
          title="LinkedIn"
        />
      </a>
      <p>{props.bio}</p>
    </div>
  )
}

export default SpotlightCard
