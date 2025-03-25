var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_RangoHorarioCriminolgico_2 = new ol.format.GeoJSON();
var features_RangoHorarioCriminolgico_2 = format_RangoHorarioCriminolgico_2.readFeatures(json_RangoHorarioCriminolgico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RangoHorarioCriminolgico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RangoHorarioCriminolgico_2.addFeatures(features_RangoHorarioCriminolgico_2);
var lyr_RangoHorarioCriminolgico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RangoHorarioCriminolgico_2, 
                style: style_RangoHorarioCriminolgico_2,
                popuplayertitle: 'Rango Horario Criminológico',
                interactive: true,
    title: 'Rango Horario Criminológico<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_0.png" /> 00:00 - 03:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_1.png" /> 03:01 - 06:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_2.png" /> 06:01 - 09:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_3.png" /> 09:01 - 12:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_4.png" /> 12:01 - 15:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_5.png" /> 15:01 - 18:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_6.png" /> 18:01 - 21:00<br />\
    <img src="styles/legend/RangoHorarioCriminolgico_2_7.png" /> 21:01 - 24:00<br />' });
var format_LimitedeAlcaldas_3 = new ol.format.GeoJSON();
var features_LimitedeAlcaldas_3 = format_LimitedeAlcaldas_3.readFeatures(json_LimitedeAlcaldas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeAlcaldas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeAlcaldas_3.addFeatures(features_LimitedeAlcaldas_3);
var lyr_LimitedeAlcaldas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedeAlcaldas_3, 
                style: style_LimitedeAlcaldas_3,
                popuplayertitle: 'Limite de Alcaldías',
                interactive: false,
                title: '<img src="styles/legend/LimitedeAlcaldas_3.png" /> Limite de Alcaldías'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_RangoHorarioCriminolgico_2.setVisible(true);lyr_LimitedeAlcaldas_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_RangoHorarioCriminolgico_2,lyr_LimitedeAlcaldas_3];
lyr_RangoHorarioCriminolgico_2.set('fieldAliases', {'field_1': 'field_1', 'idCI': 'idCI', 'categoria_delito': 'categoria_delito', 'delito': 'delito', 'fecha_inicio': 'fecha_inicio', 'fecha_hecho': 'fecha_hecho', 'hora_hecho': 'hora_hecho', 'categoria_horaria': 'categoria_horaria', 'latitud': 'latitud', 'longitud': 'longitud', 'alcaldia_hecho': 'alcaldia_hecho', 'CTHecho': 'CTHecho', 'colonia_hecho': 'colonia_hecho', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'hora': 'hora', 'rango_horario': 'rango_horario', });
lyr_LimitedeAlcaldas_3.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_RangoHorarioCriminolgico_2.set('fieldImages', {'field_1': 'Range', 'idCI': 'Range', 'categoria_delito': 'TextEdit', 'delito': 'TextEdit', 'fecha_inicio': 'DateTime', 'fecha_hecho': 'DateTime', 'hora_hecho': 'DateTime', 'categoria_horaria': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'CTHecho': 'TextEdit', 'colonia_hecho': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'hora': 'DateTime', 'rango_horario': 'TextEdit', });
lyr_LimitedeAlcaldas_3.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_RangoHorarioCriminolgico_2.set('fieldLabels', {'field_1': 'hidden field', 'idCI': 'hidden field', 'categoria_delito': 'hidden field', 'delito': 'inline label - always visible', 'fecha_inicio': 'inline label - always visible', 'fecha_hecho': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'categoria_horaria': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'alcaldia_hecho': 'inline label - always visible', 'CTHecho': 'hidden field', 'colonia_hecho': 'inline label - always visible', 'nombre_sec': 'inline label - always visible', 'Nomenclatu': 'inline label - always visible', 'hora': 'hidden field', 'rango_horario': 'hidden field', });
lyr_LimitedeAlcaldas_3.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_LimitedeAlcaldas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});