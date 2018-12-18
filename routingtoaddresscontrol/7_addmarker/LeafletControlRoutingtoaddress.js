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
        this._map = map;
        
        var controlElementTag = 'div';
        var controlElementClass = 'leaflet-control-routingtoaddress';
        var controlElement = L.DomUtil.create(controlElementTag, controlElementClass);

        marker_startingpoint = this._marker_startingpoint = L.marker([0, 0]);
        marker_target = this._marker_tarket = L.marker([0, 0]);

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
                if (this._marker_startingpoint) {
                    this._map.removeLayer(this._marker_startingpoint);
                }
                if (this._marker_target) {
                    this._map.removeLayer(this._marker_target);
                }
            
                var json_obj_target = JSON.parse(Get('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + this.options.target));
                var json_obj_startingpoint = JSON.parse(Get('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + input.value));
                console.log(json_obj_target[0].lat + ' - ' + json_obj_target[0].lon);
                console.log(json_obj_startingpoint[0].lat + ' - ' + json_obj_startingpoint[0].lon);
                
                this._marker_target = L.marker([json_obj_target[0].lat, json_obj_target[0].lon]).addTo(this._map);
                this._marker_startingpoint = L.marker([json_obj_startingpoint[0].lat, json_obj_startingpoint[0].lon]).addTo(this._map);

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
