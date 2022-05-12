import React, { useRef, useState } from 'react'
import { GoogleMap, LoadScript, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api'
import './GoogleMaps.css'

const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAmmWJNb7A4k2isO6AeW5YsJ7JtxkBsGv0",
    })
    const [map, setMap] = useState(null)
    const [location, setLocation] = useState({
        lat: -12.04318,
        lng: -77.02824
    })
    if (!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <div className="googlemap-content">
            <div className="map-search-container">
                <div className="map-search">
                    <div className="map-search-input">
                        <input type="text" placeholder="Search" />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="map-center-map">
                        <button onClick={() => map.panTo(location)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="paper-airleplane-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <GoogleMap
                center={location}
                zoom={16}
                mapContainerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: false
                }}
                onLoad={(map) => setMap(map)}
                onClick={(e) => {
                    setLocation({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng()
                    })
                }
                }
            >
                <Marker position={location} />
            </GoogleMap>
        </div>
    )
}

export default GoogleMaps
