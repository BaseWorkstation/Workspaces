import { Box } from "@chakra-ui/react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

function Map({ space }) {
  return (
    <GoogleMap
      defaultZoom={13}
      center={{ lat: 6.4309596, lng: 3.4604976 }}
      defaultCenter={{ lat: 6.4309596, lng: 3.4604976 }}
    >
      <Marker position={{ lat: 6.4309596, lng: 3.4604976 }} />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SpaceOnMap({ space }) {
  const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <Box
      w="full"
      maxW="6xl"
      border="1px solid"
      borderColor="gray.300"
      h={[231, 300, 461]}
      rounded={20}
    >
      <WrappedMap
        space={space}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAPS_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, borderRadius: 20 }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: 20 }} />}
      />
    </Box>
  );
}
