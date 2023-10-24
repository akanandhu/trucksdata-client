import ReactPlayer from "react-player";

export default function VideoBanner() {
  return (
    // Important! Alwys set the container height explicitlya
    <ReactPlayer
      url="https://www.youtube.com/watch?v=tb4oJnar4pg"
      height="100%"
      width="100%"
    />
  );
}
