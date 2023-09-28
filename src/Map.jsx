
import GoogleMapReact from 'google-map-react';
import { glApi } from '../mapAPIkey';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
    const defaultProps = {
        center: {
            lat: 24.670869723401303,
            lng: 90.84364657497453
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '800px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: glApi }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}