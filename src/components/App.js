
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
 
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import '../styles/App.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWx5b25hMzY5IiwiYSI6ImNqdjJpNmJtYTB5Z2Y0M3FvOWhmaXNjaGMifQ.txRzLjUoPfWI6PdECMIQdw';
//https://api.mapbox.com/styles/v1/alyona369/cjxe5a5et0d041cmo2hhaofuh.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYWx5b25hMzY5IiwiYSI6ImNqdjJpNmJtYTB5Z2Y0M3FvOWhmaXNjaGMifQ.txRzLjUoPfWI6PdECMIQdw#0.4/0.000000/36.872511/0
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            lng: 0,
            lat: 0,
            zoom: 0
        }
    }
  
    componentDidMount(){
    //     const {lng, lat, zoom} = this.state;
       
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
            
    //         style: 'mapbox://styles/alyona369/cjxe5a5et0d041cmo2hhaofuh',
    //         center:[lng,lat],
    //         zoom,
    //         maxBounds:[-175,-60.051129,191,84.051129]
    // })
    // map.resize()
    // console.log('------',map)
    // console.log('THIS', this)
    //     map.on('move', ()=>{
    //         const {lng,lat,zoom} = map.getCenter()

    //         this.setState({
    //             lng: lng.toFixed(4),
    //             lat: lat.toFixed(4),
    //             zoom: map.getZoom().toFixed(2)
    //         })
    //     })
    //     map.addControl(new mapboxgl.FullscreenControl());
    }
    render() {
        const Map = ReactMapboxGl({
            accessToken: 'pk.eyJ1IjoiYWx5b25hMzY5IiwiYSI6ImNqdjJpNmJtYTB5Z2Y0M3FvOWhmaXNjaGMifQ.txRzLjUoPfWI6PdECMIQdw'
          });
        return (
            <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: "100vh",
    width: "100vw"
  }}>
    <Layer
      type="symbol"
      id="marker"
      layout={{ "icon-image": "marker-15" }}>
      <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
    </Layer>
</Map>
        )
    //     console.log('MAP', this.mapContainer)
    //     const {lng,lat,zoom}=this.state
    //     return (
    //         <div>
    //             {/* <h1>My React App!</h1> */}
    //             <div>
    //     <div >
    //       <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div> 
    //       {/* className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold" */}
    //     </div>
    //     <div ref={el => this.mapContainer = el}  />
    //     {/* className="absolute top right left bottom" */}
    //   </div>
      
    //         </div>
    //     );
    }
}

export default App;

