L.LeafletControlRoutingtoaddress = L.Control.extend({
    options: {
        position: 'topright',
        placeholder: 'Please insert your address here.',
        target: 'Koblenz, Rheinland-Pfalz, Deutschland'
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
        // ...

    },

    onAdd: function (map) {
        var controlElementTag = 'div';
        var controlElementClass = 'leaflet-control-routingtoaddress';
        var controlElement = L.DomUtil.create(controlElementTag, controlElementClass);

        input = this._input = L.DomUtil.create('input');
        input.type = 'text';
        input.placeholder = this.options.placeholder;
        input.classList.add("address-input");

        controlElement.appendChild(input);

        L.DomEvent.addListener(input, 'keydown', this._keydown, this);

        return controlElement;
    },

    _keydown: function (e) {

        switch (e.keyCode) {
            // Enter
            case 13:
                /*$.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + this.options.target, function(data) {
                    var item1 = [];
                    $.each(data, function(key, val) {
                        item1.push( val.lat + ", " + val.lon);
                        //console.log(item1);
                        return false;
                    });
                });        
                $.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + input.value, function(data) {
                    var item2 = [];
                    $.each(data, function(key, val) {
                        item2.push( val.lat + ", " + val.lon);
                        //console.log(item2);
                        return false;
                    });
                });  */
            
                var json_obj_target = JSON.parse(Get('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + this.options.target));
                var json_obj_startingpoint = JSON.parse(Get('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + input.value));
                console.log(json_obj_target[0].lat + ' - ' + json_obj_target[0].lon);
                console.log(json_obj_startingpoint[0].lat + ' - ' + json_obj_startingpoint[0].lon);

                function Get(url){
                    var Httpreq = new XMLHttpRequest(); // a new request
                    Httpreq.open("GET",url,false);
                    Httpreq.send(null);
                    return Httpreq.responseText;          
                }            

        }
        return true;
    },

    onRemove: function (map) {
        // ...
    },

});

L.leafletControlRoutingtoaddress = function (options) {
    return new L.LeafletControlRoutingtoaddress(options);
};
