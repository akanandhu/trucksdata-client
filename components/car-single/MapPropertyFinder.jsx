import GoogleMapReact from "google-map-react";
import ReactPlayer from "react-player";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Alwys set the container height explicitlya

    // <GoogleMapReact
    //   bootstrapURLKeys={{ key: "" }}
    //   defaultCenter={defaultProps.center}
    //   defaultZoom={defaultProps.zoom}
    // >
    //   <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    // </GoogleMapReact>
    <ReactPlayer
      url="https://www.youtube.com/watch?v=tb4oJnar4pg"
      height="100%"
      width="100%"
    />
  );
}
