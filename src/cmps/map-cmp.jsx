import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import { div } from '@material-ui/core';
console.log(GoogleMapReact)

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class MapCmp extends Component {
    state = {
        center: {
            lat: this.props.stay.address.location.lan,
            lng: this.props.stay.address.location.lat
        },
        zoom: 12
    };



    
    render() {
        return (
            <div className='map-container'>
                <div className='map' style={{ height: '50vh', width: '80%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCefItHyzOVLUAS0G1QzyoRhd0uEHy-TIA' }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    >
                        <AnyReactComponent
                            lat={this.props.stay.address.location.lan}
                            lng={this.props.stay.address.location.lat}
                            text={<span style={{color: '#DD2162'}} class="material-icons">home</span>}
                            
                        />
                        
                        
                        
                    </GoogleMapReact>
                </div>
                
            </div>
        );
    }
}

