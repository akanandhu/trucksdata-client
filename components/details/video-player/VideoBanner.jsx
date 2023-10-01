import GoogleMapReact from "google-map-react";
import ReactPlayer from "react-player";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function VideoBanner() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Alwys set the container height explicitlya
    <ReactPlayer
      url="https://www.youtube.com/watch?v=tb4oJnar4pg"
      height="100%"
      width="100%"
    />
  );
}
