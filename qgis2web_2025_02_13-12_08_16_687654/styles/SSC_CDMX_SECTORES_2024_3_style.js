var size = 0;
var placement = 'point';

var style_SSC_CDMX_SECTORES_2024_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "20.8px \'Cabin\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.40000000000000013;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nombre_Sec") !== null) {
        labelText = String(feature.get("Nombre_Sec"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,31,72,0.5725490196078431)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(213,180,60,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
