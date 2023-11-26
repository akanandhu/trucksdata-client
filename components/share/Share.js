import React from 'react'
import {FacebookShareButton,FacebookIcon} from 'react-share'
function Share() {
  const facebookShareUrl = 'https://www.facebook.com/'
  return (
    <div className='d-flex'>
      <FacebookShareButton 
      quote={"Some quote"} 
      hashtag={'truck'}
      url={facebookShareUrl}
      >
        <FacebookIcon size={40} round={true}/>
      </FacebookShareButton>
    </div>
  )
}

export default Share
