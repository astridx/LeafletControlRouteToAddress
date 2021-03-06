document.addEventListener('DOMContentLoaded', function () {
    var placesAutocomplete = places({
        container: document.querySelector(".address-input")
    });
}, false);

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
                console.log('Die Enter Taste wurde geklickt');
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
