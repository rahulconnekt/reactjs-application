import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
	render() {
		return (
			<Map
				google={this.props.google}
				initialCenter={{
					lat: 40.854885,
					lng: -88.081807,
				}}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "GoogleJavascriptAPIkey",
})(MapContainer);
