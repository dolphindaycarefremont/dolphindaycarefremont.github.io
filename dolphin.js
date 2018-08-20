var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.5312340, lng: -121.9552940},
        zoom: 8
    });
    
    var marker = new google.maps.Marker({
        position: { lat: 37.5312340, lng: -121.9552940 },
        map: map,
        title: "Dolphin Daycare"
    })
    
}