/* eslint-disable */

export const displayMap = (locations) => {
  maptilersdk.config.apiKey = 'dTT7Lw5RpqdoXjP4nZMV';
  const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element to render the map
    style: '1eada76a-51b1-4619-b7dd-260208efb3bd',
    scrollZoom: false,
    // center: [-118.251543, 34.573767], // starting position [lng, lat]
    // zoom: 1, // starting zoom
    // interactive: false,
  });

  const bounds = new maptilersdk.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new maptilersdk.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new maptilersdk.Popup({
      offset: 30,
      closeOnClick: false,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.on('load', () => {
    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });
  });
};
