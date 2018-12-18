L.LeafletControlRoutingtoaddress = L.Control.extend({
    options: {
        position: 'topright'
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
        input.placeholder = 'Please enter the address from which you want to route.';
        input.classList.add("address-input");

        controlElement.appendChild(input);

        return controlElement;
    },

    onRemove: function (map) {
        // ...
    },

});

L.leafletControlRoutingtoaddress = function (options) {
    return new L.LeafletControlRoutingtoaddress(options);
};
