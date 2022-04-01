import React, { useState } from 'react'
import * as styles from './css/Home.css.jsx'
import Zoom  from 'react-reveal/Zoom'
import { FaArrowRight } from 'react-icons/fa'

import './css/Home.css.jsx'
import PersonTeam from '../project/PersonTeam'
import Input from '../project/form/Input'
import Textarea from '../project/form/Textarea'
import ItemSlider from '../project/ItemSlider'
import Square from '../project/Square'

export default function Home() {

  {/* Control the visualization of the third section */}
  const[viewInfo, setViewInfo] = useState(false)

  const submit = (e) => {
    e.preventDefault()
  }

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

          <styles.SquareContainer>
            <Square title='I am interested in tokenizing my artwork' btnText='GET IN TOUCH' cssConditional='FirstSquare' />

            <Square title='I am interested in buying art tokens on the marketplace of 360X AG' btnText='JOIN WAITING LIST' cssConditional='SecondSquare' />
          </styles.SquareContainer>
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
            
            <div className='images__container'>
              <ItemSlider 
                srcImage='/images/svg1.svg' 
                alt='svg 1' 
                title='Quality Access' 
                description='Access to curated, high-value artworks via digitally secured Art Tokens (on the 360X marketplace)' 
                textCondition='FirstSlide'
              />

              <ItemSlider 
                srcImage='/images/svg2.svg' 
                alt='svg 2' 
                title='Security' 
                description='Highly secure and insured artworks, legally secured contract, externally audited technology'
                textCondition='FirstSlide' 
              />

              <ItemSlider 
                srcImage='/images/svg3.svg' 
                alt='svg 3' 
                title='Expertise' 
                description='Best practice art due diligence and evaluations by external partners and domain experts' 
                textCondition='FirstSlide'
              />

              <ItemSlider 
                srcImage='/images/svg4.svg' 
                alt='svg 4' 
                title='Simplicity' 
                description='Simple, seamless and efficient processes, no technological knowledge required' 
                textCondition='FirstSlide'
              />
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

              <div className='images__container'>
                <ItemSlider 
                  srcImage='/images/svg5.svg' 
                  alt='svg 5' 
                  title='Flexibility' 
                  description='Tech and Token Terms are tailored to your artwork and needs' 
                  textCondition='SecondSLide'
                />

                <ItemSlider 
                  srcImage='/images/svg6.svg' 
                  alt='svg 6' 
                  title='Security' 
                  description='Share stakes in your artworks with fellow art enthusiasts and exchange them against fiat or crypto' 
                  textCondition='SecondSLide'
                />

                <ItemSlider 
                  srcImage='/images/svg7.svg' 
                  alt='svg 7' 
                  title='Expertise' 
                  description='Seasoned art market professionals, technological and legal experts ready your artwork and guide you through the process' 
                  textCondition='SecondSLide'
                />
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

      <styles.TeamContainer id='team'>
        <Zoom bottom>
          <styles.TextDescription>
              <div className='title__team'>
                <h2>Our team</h2>
              </div>
              <div className='description__team'>
                <p>
                We are 360X ART - We combine our expertise and passion for art, finance and new technologies to enable everyone to articipate in tokenized masterpieces.
                </p>
                <button>
                  <FaArrowRight className='icon' /> JOIN OUR TEAM
                </button>
              </div>
          </styles.TextDescription>
        </Zoom>

        <styles.ImagesDescription>
            <PersonTeam 
              srcImage='/images/shirin-marquart.jpg' alt='imagem ceo da empresa' 
              name='Shirin Marquart'
              job='CEO'
              title_author='FAVOURITE ARTWORK:'
              name_artwork='Dynamism of a Dog on a Leash - Giacomo Balla'
              linkedinUrl='https://linkedin.com'
            />
            
            <PersonTeam 
              srcImage='/images/katharina-helena-schulz.jpg' alt='imagem coo da empresa' 
              name='Katharina Helena Schulz'
              job='COO'
              title_author='FAVOURITE ARTWORK:'
              name_artwork='Untitled, 1961 - Robert Ryman'
              linkedinUrl='https://linkedin.com'
            />

            <PersonTeam 
              srcImage='/images/albane-beauregard.jpg' alt='imagem coo da empresa' 
              name='Albane de Bareugard'
              job='WORKING STUDENT BUSINESS OPERATIONS'
              title_author='FAVOURITE ARTWORK:'
              name_artwork='Woman Power - Maria Lassnig'
              linkedinUrl=''
            />
        </styles.ImagesDescription>
      </styles.TeamContainer>

      <styles.FormContainer id='contact'>
        <div className='title__container'>
            <h2>Articipate now in tokenized art</h2>
        </div>

        <form className='form__container' onSubmit={submit}>
          <fieldset>
            <Input text='Firstname' type='text' name='txtfirstname' id='txtfirstname' />

            <Input text='Lastname' type='text' name='txtsecondname' id='txtsecondname' />
          </fieldset>

          <fieldset>
            <Input text='Email' type='email' name='txtemail' id='txtemail' />

            <Input text='Profession' type='text' name='txtprofession' id='txtprofession' />
          </fieldset>

          <Textarea text='Message' name='txtmessage' id='txtmessage' />

          <div className='container__send'>
            <label className='send__button'>
              <button>SEND</button>
            </label>

            <div className='send_confirmTerms'>
              <label htmlFor="confirmTerms" className='label'>
                <input type="checkbox" name="confirmTerms" id="confirmTerms" /> 
                <span className='span'>Ich habe die Datenschutzerklärung zur Kenntnis genommen. Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen gespeichert werden.*</span> 
              </label>

              <p>Please note that we share information you submit through this contact form with our partner 360X AG. For more information, please refer to our Data Protection Notice.</p>
            </div>
          </div>
        </form>
      </styles.FormContainer>
    </styles.Container>
  )
}


