// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {

  // CODE IN HERE!
  $.ajax({
    url: weekly_quakes_endpoint,
    success: onSuccess
  });

  function onSuccess(quakes) {
    console.log(quakes);
    $.map(quakes.features, function (quake,idx) {
      console.log(quake, idx);
      $('#info').append(`<p>${quake.properties.title}</p>`);
      // initMap();

    });
  }
}
);
