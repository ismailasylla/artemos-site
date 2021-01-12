import React from 'react'
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	PinterestShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'
import {
	EmailIcon,
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
	WhatsappIcon,
	PinterestIcon,
} from 'react-share'

const socialShare = () => {
	return (
		<div className='m-2 mt-3'>
			<FacebookShareButton className='m-1' onClick={socialShare}>
				<FacebookIcon size={32} round={true} />
			</FacebookShareButton>
			<TwitterShareButton className='m-1' onClick={socialShare}>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
			<LinkedinShareButton className='m-1' onClick={socialShare}>
				<LinkedinIcon size={32} round={true} />
			</LinkedinShareButton>
			<EmailShareButton className='m-1' onClick={socialShare}>
				<EmailIcon size={32} round={true} />
			</EmailShareButton>
			<WhatsappShareButton className='m-1' onClick={socialShare}>
				<WhatsappIcon size={32} round={true} />
			</WhatsappShareButton>
			<PinterestShareButton>
				<PinterestIcon size={32} round={true} />
			</PinterestShareButton>
		</div>
	)
}

export default socialShare
