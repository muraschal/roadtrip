"use client";

import { GoogleMap, LoadScript, Polyline, Marker } from '@react-google-maps/api';

const center = {
  lat: 29.8833,  // Ungefähr in der Mitte zwischen Austin und Miami
  lng: -90.7791
};

const tripStops = [
  { position: { lat: 30.2672, lng: -97.7431 }, name: "Austin, TX" },
  { position: { lat: 29.9511, lng: -90.0715 }, name: "New Orleans, LA" },
  { position: { lat: 30.3322, lng: -81.6557 }, name: "Jacksonville, FL" },
  { position: { lat: 25.7617, lng: -80.1918 }, name: "Miami, FL" },
];

const path = tripStops.map(stop => stop.position);

export default function TripMap() {
  return (
    <div className="w-full h-[600px] relative">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <GoogleMap
          mapContainerClassName="w-full h-full rounded-xl"
          center={center}
          zoom={5}
        >
          <Polyline
            path={path}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 3,
            }}
          />
          {tripStops.map((stop, index) => (
            <Marker
              key={index}
              position={stop.position}
              title={stop.name}
              label={{
                text: (index + 1).toString(),
                color: "white",
                fontWeight: "bold",
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
} 