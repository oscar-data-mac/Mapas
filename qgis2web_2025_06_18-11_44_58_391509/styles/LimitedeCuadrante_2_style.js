var size = 0;
var placement = 'point';

var style_LimitedeCuadrante_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "18.2px \'Cabin\', sans-serif";
    var labelFill = "#bc955c";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nomenclatu") !== null) {
        labelText = String(feature.get("Nomenclatu"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(188,149,92,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(183,72,75,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
