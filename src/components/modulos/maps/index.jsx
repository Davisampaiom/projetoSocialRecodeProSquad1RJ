import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


import './mapinha.css';


export default function Mapinha(){
    return (
        <div className="mapa">
       <MapContainer center={[-22.8289386,-43.0567354]}
        zoom={14} scrollWheelZoom={true}>
       <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

       </MapContainer>
        </div>
    );
}