console.log(setCenter)
mapboxgl.accessToken = mapToken;


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard', // Use the standard style for the map
    zoom: 16, // initial zoom level, 0 is the world view, higher values zoom in
    center: setCenter// center the map on this longitude and latitude
});


map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});