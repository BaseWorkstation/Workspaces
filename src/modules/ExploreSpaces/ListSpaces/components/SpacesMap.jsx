import React from "react";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import theme from "theme";
import Router from "next/router";

function Map({ spaces, selectedSpace, setSelectedSpace }) {
  const viewSpaceDetails = () => {
    Router.push(`spaces/${1}`);
  };

  return (
    <GoogleMap
      defaultZoom={14}
      center={selectedSpace || { lat: 6.4309596, lng: 3.4604976 }}
      defaultCenter={{ lat: 6.4309596, lng: 3.4604976 }}
    >
      <Marker
        position={{ lat: 6.4309596, lng: 3.4604976 }}
        onClick={() => setSelectedSpace({ lat: 6.4309596, lng: 3.4604976 })}
      />

      {selectedSpace && (
        <InfoWindow
          position={selectedSpace}
          onCloseClick={() => setSelectedSpace(null)}
        >
          <Box spacing={4}>
            <HStack>
              <Text fontWeight={700} color="blue.800" fontSize="xl">
                Venia Business Hub
              </Text>
            </HStack>
            <Image
              my={8}
              w={200}
              h={120}
              borderRadius={12}
              objectFit="cover"
              src="/images/space.png"
            />

            <Button
              onClick={viewSpaceDetails}
              color={theme.colors.primary[500]}
              variant="link"
              colorScheme="primary"
            >
              View Details
            </Button>
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SpacesMap({ spaces, selectedSpace, setSelectedSpace }) {
  const MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <Box
      pos="sticky"
      top="6rem"
      h="calc(100vh - 7rem)"
      borderRadius={20}
      w="full"
    >
      <WrappedMap
        spaces={spaces}
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${MAPS_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%`, borderRadius: 20 }} />}
        mapElement={<div style={{ height: `100%`, borderRadius: 20 }} />}
      />
    </Box>
  );
}
