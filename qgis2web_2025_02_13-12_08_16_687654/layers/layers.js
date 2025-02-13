var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positron_1 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ranking_calles_ermita_2 = new ol.format.GeoJSON();
var features_ranking_calles_ermita_2 = format_ranking_calles_ermita_2.readFeatures(json_ranking_calles_ermita_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ranking_calles_ermita_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ranking_calles_ermita_2.addFeatures(features_ranking_calles_ermita_2);
var lyr_ranking_calles_ermita_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ranking_calles_ermita_2, 
                style: style_ranking_calles_ermita_2,
                popuplayertitle: 'ranking_calles_ermita',
                interactive: true,
    title: 'ranking_calles_ermita<br />\
    <img src="styles/legend/ranking_calles_ermita_2_0.png" /> Robo a pasajero a bordo de pesero colectivo con violencia<br />\
    <img src="styles/legend/ranking_calles_ermita_2_1.png" /> Robo a pasajero a bordo de pesero colectivo sin violencia<br />\
    <img src="styles/legend/ranking_calles_ermita_2_2.png" /> Robo de motocicleta con violencia<br />\
    <img src="styles/legend/ranking_calles_ermita_2_3.png" /> Robo de motocicleta sin violencia<br />\
    <img src="styles/legend/ranking_calles_ermita_2_4.png" /> Robo de vehículo de servicio particular con violencia<br />\
    <img src="styles/legend/ranking_calles_ermita_2_5.png" /> Robo de vehículo de servicio particular sin violencia<br />\
    <img src="styles/legend/ranking_calles_ermita_2_6.png" /> Robo de vehículo de servicio público con violencia<br />' });
var format_SSC_CDMX_SECTORES_2024_3 = new ol.format.GeoJSON();
var features_SSC_CDMX_SECTORES_2024_3 = format_SSC_CDMX_SECTORES_2024_3.readFeatures(json_SSC_CDMX_SECTORES_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSC_CDMX_SECTORES_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSC_CDMX_SECTORES_2024_3.addFeatures(features_SSC_CDMX_SECTORES_2024_3);
var lyr_SSC_CDMX_SECTORES_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SSC_CDMX_SECTORES_2024_3, 
                style: style_SSC_CDMX_SECTORES_2024_3,
                popuplayertitle: 'SSC_CDMX_SECTORES_2024',
                interactive: false,
                title: '<img src="styles/legend/SSC_CDMX_SECTORES_2024_3.png" /> SSC_CDMX_SECTORES_2024'
            });
var format_limite_de_las_alcaldias_4 = new ol.format.GeoJSON();
var features_limite_de_las_alcaldias_4 = format_limite_de_las_alcaldias_4.readFeatures(json_limite_de_las_alcaldias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_de_las_alcaldias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_de_las_alcaldias_4.addFeatures(features_limite_de_las_alcaldias_4);
var lyr_limite_de_las_alcaldias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_de_las_alcaldias_4, 
                style: style_limite_de_las_alcaldias_4,
                popuplayertitle: 'limite_de_las_alcaldias',
                interactive: false,
                title: '<img src="styles/legend/limite_de_las_alcaldias_4.png" /> limite_de_las_alcaldias'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_ranking_calles_ermita_2.setVisible(true);lyr_SSC_CDMX_SECTORES_2024_3.setVisible(true);lyr_limite_de_las_alcaldias_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_ranking_calles_ermita_2,lyr_SSC_CDMX_SECTORES_2024_3,lyr_limite_de_las_alcaldias_4];
lyr_ranking_calles_ermita_2.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_delito': 'categoria_delito', 'idCI': 'idCI', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_inicio': 'fecha_inicio', 'alcaldia_hecho_fuente': 'alcaldia_hecho_fuente', 'alcaldia_hecho': 'alcaldia_hecho', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'direccion': 'direccion', 'calle': 'calle', 'calle_limpia': 'calle_limpia', });
lyr_SSC_CDMX_SECTORES_2024_3.set('fieldAliases', {'Id': 'Id', 'Delegacion': 'Delegacion', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'Consec_Reg': 'Consec_Reg', 'Consec_Sec': 'Consec_Sec', 'Nombre_Sec': 'Nombre_Sec', 'CT': 'CT', 'X': 'X', 'Y': 'Y', });
lyr_limite_de_las_alcaldias_4.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_ranking_calles_ermita_2.set('fieldImages', {'field_1': 'Range', 'delito': 'TextEdit', 'categoria_delito': 'TextEdit', 'idCI': 'Range', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inicio': 'DateTime', 'alcaldia_hecho_fuente': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'direccion': 'TextEdit', 'calle': 'TextEdit', 'calle_limpia': 'TextEdit', });
lyr_SSC_CDMX_SECTORES_2024_3.set('fieldImages', {'Id': 'TextEdit', 'Delegacion': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'Consec_Reg': 'TextEdit', 'Consec_Sec': 'TextEdit', 'Nombre_Sec': 'TextEdit', 'CT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_limite_de_las_alcaldias_4.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_ranking_calles_ermita_2.set('fieldLabels', {'field_1': 'hidden field', 'delito': 'inline label - always visible', 'categoria_delito': 'hidden field', 'idCI': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_inicio': 'hidden field', 'alcaldia_hecho_fuente': 'inline label - always visible', 'alcaldia_hecho': 'hidden field', 'nombre_sec': 'inline label - always visible', 'Nomenclatu': 'inline label - always visible', 'direccion': 'hidden field', 'calle': 'hidden field', 'calle_limpia': 'hidden field', });
lyr_SSC_CDMX_SECTORES_2024_3.set('fieldLabels', {'Id': 'no label', 'Delegacion': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'Consec_Reg': 'no label', 'Consec_Sec': 'no label', 'Nombre_Sec': 'no label', 'CT': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_limite_de_las_alcaldias_4.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_limite_de_las_alcaldias_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});