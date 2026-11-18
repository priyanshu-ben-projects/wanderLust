mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/standard',
    zoom: 16,
    center: setCenter
});

const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML("<h4>Most welcome!</h4>")
    .setMaxWidth("300px");

const marker = new mapboxgl.Marker({
    color: '#FF4D4D',
    scale: 1.2,
    draggable: true,
    anchor: 'bottom',
    rotation: 0
})
    .setLngLat(setCenter)
    .setPopup(popup)
    .addTo(map);


map.addControl(new mapboxgl.NavigationControl());


map.on('style.load', () => {
    map.setFog({});
});
