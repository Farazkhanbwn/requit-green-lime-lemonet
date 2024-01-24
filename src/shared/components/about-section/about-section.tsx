import React from 'react'
import styles from './about-section.module.css'
import PlayButton from '@/shared/icons/play-button'

const AboutSection = () => {
  return (
    <section className={styles['about-section']}>
      <h2 className={styles['about-section__title']}>About LEMONET</h2>
      <p className={styles['about-section__description']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias.
      </p>
      <div className={styles['about-section__video-box']}>
        <div className={styles['overlay']}></div>
        <span>
          <PlayButton />
        </span>
      </div>
    </section>
  )
}

export default AboutSection
