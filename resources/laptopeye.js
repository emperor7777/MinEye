var map;
var markers = [];

function createMarker(lat, lng) {
  var name = "Waypoint " + lat + ", " + lng;
  var marker = new google.maps.Marker
      ({
         position: new google.maps.LatLng(lat, lng),
         map: map,
         title: name,
         draggable: true,
       });
  markers.push(marker);
  console.log("Beta");
  mainwindow.print("Gamma");

  google.maps.event.addListener(marker, 'dragend', function() {
    var tname = marker.title;
    var nlat = this.getPosition().lat();
    var nlng = this.getPosition().lng();
    drawPath();
  });
}

// THIS FUNCTION IS CALLED WHEN FIRST LOADING THE WEBPAGE
function initialize() {
  chan = new QWebChannel(qt.webChannelTransport, function(channel) {
    console.log("alpha");
    mainwindow = channel.objects.mainwindow;
  });

  var pos = new google.maps.LatLng(43.0, -71.0);
  var myOptions = {
    center: pos,
    zoom: 10,
    scale: 2,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    tilt: 0,
    disableDefaultUI: true,
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  // allows clicks to add markers
  google.maps.event.addListener(map, 'dblclick', function(event) {
    createMarker(event.latLng.lat(), event.latLng.lng());
  });
}
