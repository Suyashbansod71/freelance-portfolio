import React from 'react'
import "../styles/contact.css"
const Contact = () => {
  return (
    <div className='contact-page'>
        <h4>Now that you are here - <strong>Let’s connect!</strong></h4>

        <div className='social-grp'>
        <div className='social-colum'>
          <div className='social-resume'>
            <img 
            className='heart'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c15808c87913ee5badb737e54773e73b86b3e5bb8ccbba51517db5ec66502f1?"
               alt="Heart"
            />
            <div className='resume-text'><a href='https://drive.google.com/drive/folders/1WPANFbEUCRwAH4b3ozp9Sz-p339tppTY'></a>Resume</div>
            <div className='resume-border' />
          </div>
        </div>
        <div className='linkedin-colum'>
          <div className='social-linkedin'>
          <img
            className='heart'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36c6679952d6f1c34453c8a6e015fc0da774898f774de05c1287688ee5a6842b?"
              alt="Heart"
            />
            <div className='linkedin-text'><a href='https://www.linkedin.com/in/pranali-khatekar-470b4a279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>Linkedin</a></div>
            <div className='linkedin-border' />
          </div>
        </div>
        <div className='behance-colum'>
          <div className='social-behance'>
            <img
            className='heart'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36c6679952d6f1c34453c8a6e015fc0da774898f774de05c1287688ee5a6842b?"
              alt="Heart"
            />
            <div className='behance-text'><a href='https://www.behance.net/pranalikhatekar'>Behance</a>
            <div className='behance-border' />
            </div>
          </div>
        </div>
        <div className='email-colum'>
          <div className='social-email'>
            <img
            className='heart'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa80db40d0fa44df418bb075e864e2740adf9570356c3702d53815b6fa58d95?"
              alt="Heart"
              
            />
            <div className='email-text'>Email</div>
            <div className='email-border' />
          </div>
        </div>
      </div>

      <h1>CONTACT</h1>
      {/* <div className='contact'>CONTACT</div> */}


    </div>
  )
}

export default Contact