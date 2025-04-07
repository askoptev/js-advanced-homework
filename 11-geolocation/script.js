"use strict";

function renderPosition(latitude, longitude) {
  const elementLat = document.createElement("div");
  const elementLong = document.createElement("div");
  elementLat.innerHTML = `Latitude: ${latitude}`;
  elementLong.innerHTML = `Longitude: ${longitude}`;
  document.querySelector("body").appendChild(elementLat);
  document.querySelector("body").appendChild(elementLong);
}

const geolocationPromise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => resolve(position),
    (error) => reject(error)
  );
});

geolocationPromise
  .then((data) => {
    const coords = data.coords;
    renderPosition(coords.latitude, coords.longitude);
  })
  .catch((error) => console.log(error));
