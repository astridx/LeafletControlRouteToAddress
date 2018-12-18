L.LeafletControlBoilerplate = L.Control.extend({
    options: {
        position: 'topright'
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
        // ...

    },

    onAdd: function (map) {
        var controlElementTag = 'div';
        var controlElementClass = 'leaflet-control-boilerplate';
        var controlElement = L.DomUtil.create(controlElementTag, controlElementClass);
        // ...
        return controlElement;
    },

    onRemove: function (map) {
        // ...
    },

});

L.leafletControlBoilerplate = function (options) {
    return new L.LeafletControlBoilerplate(options);
};
