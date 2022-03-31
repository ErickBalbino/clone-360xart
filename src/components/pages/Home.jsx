import React, { useState } from 'react'
import * as styles from './css/Home.css.jsx'
import Zoom  from 'react-reveal/Zoom'

import './css/Home.css.jsx'

export default function Home() {

  {/* Control the visualization of the third section */}
  const[viewInfo, setViewInfo] = useState(false)

  return (
    <styles.Container>
      <styles.FirstSection>
        <h1>Articipate now in tokenized masterpieces</h1>
      </styles.FirstSection>

      <Zoom bottom>
        <styles.SecondSection id='about'>
          <styles.TextWrapper>
            <h2>About 360X Art</h2>
            <p>We are here to open up the art market. Soon we will be launching a new platform that enables art owners to tokenize their art and so they can share their artworks with communities of art enthusiasts and art lovers who want to own virtual pieces of real masterpieces in the form of art tokens. And if you find this opportunity as exciting as we do, here is how you can articipate!</p>
          </styles.TextWrapper>
        </styles.SecondSection>
      </Zoom>

      <styles.ThirdSection id='benefits'>
        <styles.GroupButtons>
          <button className='button__right' onClick={() => {setViewInfo(false)}}>
            Art Token Collectors
          </button>
          <button className='button__left' onClick={() => {setViewInfo(true)}}>
            Art Owners
          </button>
        </styles.GroupButtons>

        <styles.InfoWrapper>
          <styles.FirstInfo>
            <div className='text__container'>
              <h3>Why articipate as an art token collector?</h3>
              <p>
                Blue-chip art is one of the most valuable asset classes in the world. But up until now it has only been an investment opportunity for a select few. Our tokenization platform enables art owners to create digitally secured Art Tokens in order to access the 360X marketplace to give broader communities the chance to articipate in this high-growth market.
              </p>
            </div>
            
            <div>
              
            </div>
          </styles.FirstInfo>

          { viewInfo && (
            <styles.SecondInfo>
              <div className='text__container'>
                <h3>Why articipate as an owner?</h3>
                <p>
                  Our platform gives you the opportunity to share a defined percentage of your artwork in the form of digital art tokens with fellow art enthusiasts and exchange them versus fiat or crypto. It enables art token collectors to articipate in your masterpiece, while staying in a legally secure and technologically sophisticated environment, with the art being kept in a museum or secured storage.
                </p>
              </div>

              <div>

              </div>
            </styles.SecondInfo>
          )}
        </styles.InfoWrapper>
      </styles.ThirdSection>

      <Zoom bottom>
        <styles.FourthSection>
          <styles.TextWrapper>
            <h2>Our investors & partners</h2>
            <p>Our investors are 360X AG, which is backed by Deutsche Börse and Commerzbank, the renowned gallery owner Johann König, the art and financial market expert Rüdiger K. Weng, and Weng Fine Art AG as the only listed art trading company in Europe. Together with our investors and partners we combine years of know how in art market with deep financial and technological expertise to offer you the very best assets and experience.</p>
          </styles.TextWrapper>
        </styles.FourthSection>
      </Zoom>
    </styles.Container>
  )
}


