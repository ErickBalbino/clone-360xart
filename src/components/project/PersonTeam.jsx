import React from 'react'
import * as styles from './css/PersonTeam.css.jsx'
import { FaArrowRight } from 'react-icons/fa'

export default function PersonTeam( {srcImage, alt, name, job, title_author, name_artwork, linkedinUrl} ) {
  return (
    <styles.Container>
        <img src={srcImage} alt={alt} />

        <div className='title__container'>
            <h3>{name}</h3>
            <p>{job}</p>
        </div>

        <div className='description__container'>
            <p>{title_author}</p>
            <span>{name_artwork}</span>
        </div>

        {
            linkedinUrl != '' && (
                <a href=''>
                    <FaArrowRight className='icon' /> LINKEDIN
                </a>
            )
        }
    </styles.Container>
  )
}
