mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: findListing.geometry.coordinates, // starting position [lng, lat]
  zoom: 8, // starting zoom
});

// console.log(coordinates);

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(findListing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${findListing.title}</h4><p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);

