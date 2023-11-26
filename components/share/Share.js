import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestIcon,
  PinterestShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
function Share() {
  const facebookShareUrl = "https://www.facebook.com/";
  return (
    <div className="d-flex justify-content-between ps-5 pe-5 pb-2">
      <FacebookShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={facebookShareUrl}
        title="Title"
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={facebookShareUrl}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <TwitterShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={`https://twitter.com/`}
        title="Title"
        // via={`neeraj648317720`}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <PinterestShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={facebookShareUrl}
      >
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton>

      <TelegramShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={facebookShareUrl}
      >
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
    </div>
  );
}

export default Share;
