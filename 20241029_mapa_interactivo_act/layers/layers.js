var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Clusters_1 = new ol.format.GeoJSON();
var features_Clusters_1 = format_Clusters_1.readFeatures(json_Clusters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusters_1.addFeatures(features_Clusters_1);
var lyr_Clusters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clusters_1, 
                style: style_Clusters_1,
                popuplayertitle: "Clusters",
                interactive: true,
                title: '<img src="styles/legend/Clusters_1.png" /> Clusters'
            });
var format_Alcaldas_2 = new ol.format.GeoJSON();
var features_Alcaldas_2 = format_Alcaldas_2.readFeatures(json_Alcaldas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alcaldas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alcaldas_2.addFeatures(features_Alcaldas_2);
var lyr_Alcaldas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alcaldas_2, 
                style: style_Alcaldas_2,
                popuplayertitle: "Alcaldías",
                interactive: true,
                title: '<img src="styles/legend/Alcaldas_2.png" /> Alcaldías'
            });
var format_Lesionesenesept_3 = new ol.format.GeoJSON();
var features_Lesionesenesept_3 = format_Lesionesenesept_3.readFeatures(json_Lesionesenesept_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lesionesenesept_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lesionesenesept_3.addFeatures(features_Lesionesenesept_3);
var lyr_Lesionesenesept_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lesionesenesept_3, 
                style: style_Lesionesenesept_3,
                popuplayertitle: "Lesiones ene - sept",
                interactive: true,
                title: '<img src="styles/legend/Lesionesenesept_3.png" /> Lesiones ene - sept'
            });
var format_Lesionesoctubre_4 = new ol.format.GeoJSON();
var features_Lesionesoctubre_4 = format_Lesionesoctubre_4.readFeatures(json_Lesionesoctubre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lesionesoctubre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lesionesoctubre_4.addFeatures(features_Lesionesoctubre_4);
var lyr_Lesionesoctubre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lesionesoctubre_4, 
                style: style_Lesionesoctubre_4,
                popuplayertitle: "Lesiones octubre",
                interactive: true,
                title: '<img src="styles/legend/Lesionesoctubre_4.png" /> Lesiones octubre'
            });
var format_Homicidiosenesept_5 = new ol.format.GeoJSON();
var features_Homicidiosenesept_5 = format_Homicidiosenesept_5.readFeatures(json_Homicidiosenesept_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Homicidiosenesept_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Homicidiosenesept_5.addFeatures(features_Homicidiosenesept_5);
var lyr_Homicidiosenesept_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Homicidiosenesept_5, 
                style: style_Homicidiosenesept_5,
                popuplayertitle: "Homicidios ene-sept",
                interactive: true,
                title: '<img src="styles/legend/Homicidiosenesept_5.png" /> Homicidios ene-sept'
            });
var format_Homicidiosoctubre_6 = new ol.format.GeoJSON();
var features_Homicidiosoctubre_6 = format_Homicidiosoctubre_6.readFeatures(json_Homicidiosoctubre_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Homicidiosoctubre_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Homicidiosoctubre_6.addFeatures(features_Homicidiosoctubre_6);
var lyr_Homicidiosoctubre_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Homicidiosoctubre_6, 
                style: style_Homicidiosoctubre_6,
                popuplayertitle: "Homicidios octubre",
                interactive: true,
                title: '<img src="styles/legend/Homicidiosoctubre_6.png" /> Homicidios octubre'
            });

lyr_Positron_0.setVisible(true);lyr_Clusters_1.setVisible(true);lyr_Alcaldas_2.setVisible(true);lyr_Lesionesenesept_3.setVisible(true);lyr_Lesionesoctubre_4.setVisible(true);lyr_Homicidiosenesept_5.setVisible(true);lyr_Homicidiosoctubre_6.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Clusters_1,lyr_Alcaldas_2,lyr_Lesionesenesept_3,lyr_Lesionesoctubre_4,lyr_Homicidiosenesept_5,lyr_Homicidiosoctubre_6];
lyr_Clusters_1.set('fieldAliases', {'id': 'id', 'CLUSTER_ID': 'CLUSTER_ID', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Alcaldas_2.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_Lesionesenesept_3.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha iniciox', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'id_delito_': 'id_delito_', 'lugar_comi': 'lugar_comi', 'total_vict': 'total_vict', 'alcaldia_h': 'Alcaldía', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'mes': 'mes', });
lyr_Lesionesoctubre_4.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'id_delito_': 'id_delito_', 'alcaldia_h': 'Alcaldía', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', });
lyr_Homicidiosenesept_5.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'id_delito_': 'id_delito_', 'lugar_comi': 'lugar_comi', 'total_vict': 'total_vict', 'alcaldia_h': 'Alcaldía', 'colonia_he': 'Colonia', 'lat': 'lat', 'lon': 'lon', 'mes': 'mes', });
lyr_Homicidiosoctubre_6.set('fieldAliases', {'id_ci': 'id_ci', 'carpeta_in': 'Carpeta', 'fecha_inic': 'Fecha inicio', 'hora_inici': 'hora_inici', 'fecha_hech': 'Fecha hechos', 'hora_hecho': 'Hora hechos', 'exordio': 'Exordio', 'categoria_': 'categoria_', 'delito': 'delito', 'id_delito_': 'id_delito_', 'lugar_comi': 'lugar_comi', 'total_vict': 'total_vict', 'fiscalia_i': 'fiscalia_i', 'agencia_in': 'agencia_in', 'unidad_inv': 'unidad_inv', 'alcaldia_h': 'Alcaldía', 'colonia_he': 'Colonia', 'geox': 'geox', 'geoy': 'geoy', 'lat': 'lat', 'lon': 'lon', 'mes': 'mes', });
lyr_Clusters_1.set('fieldImages', {'id': 'TextEdit', 'CLUSTER_ID': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Alcaldas_2.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Lesionesenesept_3.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'DateTime', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'id_delito_': 'TextEdit', 'lugar_comi': 'TextEdit', 'total_vict': 'TextEdit', 'alcaldia_h': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'mes': 'TextEdit', });
lyr_Lesionesoctubre_4.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'DateTime', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'id_delito_': 'TextEdit', 'alcaldia_h': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr_Homicidiosenesept_5.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'DateTime', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'id_delito_': 'CheckBox', 'lugar_comi': 'TextEdit', 'total_vict': 'TextEdit', 'alcaldia_h': 'TextEdit', 'colonia_he': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'mes': 'TextEdit', });
lyr_Homicidiosoctubre_6.set('fieldImages', {'id_ci': 'TextEdit', 'carpeta_in': 'TextEdit', 'fecha_inic': 'DateTime', 'hora_inici': 'TextEdit', 'fecha_hech': 'DateTime', 'hora_hecho': 'TextEdit', 'exordio': 'TextEdit', 'categoria_': 'TextEdit', 'delito': 'TextEdit', 'id_delito_': 'CheckBox', 'lugar_comi': 'TextEdit', 'total_vict': 'TextEdit', 'fiscalia_i': 'TextEdit', 'agencia_in': 'TextEdit', 'unidad_inv': 'TextEdit', 'alcaldia_h': 'TextEdit', 'colonia_he': 'TextEdit', 'geox': 'TextEdit', 'geoy': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'mes': 'TextEdit', });
lyr_Clusters_1.set('fieldLabels', {'id': 'no label', 'CLUSTER_ID': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Alcaldas_2.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Lesionesenesept_3.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'hidden field', 'id_delito_': 'hidden field', 'lugar_comi': 'hidden field', 'total_vict': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'mes': 'hidden field', });
lyr_Lesionesoctubre_4.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'hidden field', 'id_delito_': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'colonia_he': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', });
lyr_Homicidiosenesept_5.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'inline label - always visible', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'hidden field', 'id_delito_': 'hidden field', 'lugar_comi': 'hidden field', 'total_vict': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'colonia_he': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'mes': 'hidden field', });
lyr_Homicidiosoctubre_6.set('fieldLabels', {'id_ci': 'hidden field', 'carpeta_in': 'inline label - always visible', 'fecha_inic': 'inline label - always visible', 'hora_inici': 'hidden field', 'fecha_hech': 'hidden field', 'hora_hecho': 'inline label - always visible', 'exordio': 'inline label - always visible', 'categoria_': 'hidden field', 'delito': 'hidden field', 'id_delito_': 'hidden field', 'lugar_comi': 'hidden field', 'total_vict': 'hidden field', 'fiscalia_i': 'hidden field', 'agencia_in': 'hidden field', 'unidad_inv': 'hidden field', 'alcaldia_h': 'inline label - always visible', 'colonia_he': 'inline label - always visible', 'geox': 'hidden field', 'geoy': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'mes': 'hidden field', });
lyr_Homicidiosoctubre_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});