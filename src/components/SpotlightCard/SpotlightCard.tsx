import React from 'react'
import styles from './SpotlightCard.module.css'

function SpotlightCard(props) {
  return (
    <div className={styles.spotlightCard}>
      <img
        src={props.image}
        alt={props.name}
        className={styles.profilePic}></img>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <a href={props.linkedin}>LinkedIn</a>
      <p>{props.bio}</p>
    </div>
  )
}

export default SpotlightCard
