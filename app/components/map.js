import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  get src() {
    // getter method for the src of map image based on the args passed into the Map Component

    let { lng, lat, width, height, zoom } = this.args; // this.args allows props from the component template to be passed down to js
    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    // getter method allows the access token to be passed into the component
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
