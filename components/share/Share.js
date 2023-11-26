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
  const shareUrl = typeof window !== undefined && window.location.href;

  return (
    <div className="d-flex justify-content-between ps-5 pe-5 pb-2">
      {console.log("location", window.location.href)}
      <FacebookShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
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
        hashtag={"truck"}
        url={shareUrl}

        // via={`neeraj648317720`}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <PinterestShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
      >
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton>

      <TelegramShareButton
        quote={"Some quote"}
        hashtag={"truck"}
        url={shareUrl}
      >
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
    </div>
  );
}

export default Share;
