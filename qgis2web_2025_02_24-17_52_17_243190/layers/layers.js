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
var format_LimitedeCuadrante_2 = new ol.format.GeoJSON();
var features_LimitedeCuadrante_2 = format_LimitedeCuadrante_2.readFeatures(json_LimitedeCuadrante_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeCuadrante_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeCuadrante_2.addFeatures(features_LimitedeCuadrante_2);
var lyr_LimitedeCuadrante_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedeCuadrante_2, 
                style: style_LimitedeCuadrante_2,
                popuplayertitle: 'Limite de Cuadrante',
                interactive: false,
                title: '<img src="styles/legend/LimitedeCuadrante_2.png" /> Limite de Cuadrante'
            });
var format_LimitedeSector_3 = new ol.format.GeoJSON();
var features_LimitedeSector_3 = format_LimitedeSector_3.readFeatures(json_LimitedeSector_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeSector_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeSector_3.addFeatures(features_LimitedeSector_3);
var lyr_LimitedeSector_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedeSector_3, 
                style: style_LimitedeSector_3,
                popuplayertitle: 'Limite de Sector',
                interactive: false,
                title: '<img src="styles/legend/LimitedeSector_3.png" /> Limite de Sector'
            });
var format_LimitedeAlcaldas_4 = new ol.format.GeoJSON();
var features_LimitedeAlcaldas_4 = format_LimitedeAlcaldas_4.readFeatures(json_LimitedeAlcaldas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeAlcaldas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeAlcaldas_4.addFeatures(features_LimitedeAlcaldas_4);
var lyr_LimitedeAlcaldas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedeAlcaldas_4, 
                style: style_LimitedeAlcaldas_4,
                popuplayertitle: 'Limite de Alcaldías',
                interactive: false,
                title: '<img src="styles/legend/LimitedeAlcaldas_4.png" /> Limite de Alcaldías'
            });
var format_Diadelasemana_5 = new ol.format.GeoJSON();
var features_Diadelasemana_5 = format_Diadelasemana_5.readFeatures(json_Diadelasemana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diadelasemana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diadelasemana_5.addFeatures(features_Diadelasemana_5);
var lyr_Diadelasemana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diadelasemana_5, 
                style: style_Diadelasemana_5,
                popuplayertitle: 'Dia de la semana',
                interactive: true,
    title: 'Dia de la semana<br />\
    <img src="styles/legend/Diadelasemana_5_0.png" /> domingo<br />\
    <img src="styles/legend/Diadelasemana_5_1.png" /> jueves<br />\
    <img src="styles/legend/Diadelasemana_5_2.png" /> lunes<br />\
    <img src="styles/legend/Diadelasemana_5_3.png" /> martes<br />\
    <img src="styles/legend/Diadelasemana_5_4.png" /> miércoles<br />\
    <img src="styles/legend/Diadelasemana_5_5.png" /> sábado<br />\
    <img src="styles/legend/Diadelasemana_5_6.png" /> viernes<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_LimitedeCuadrante_2.setVisible(true);lyr_LimitedeSector_3.setVisible(true);lyr_LimitedeAlcaldas_4.setVisible(true);lyr_Diadelasemana_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_LimitedeCuadrante_2,lyr_LimitedeSector_3,lyr_LimitedeAlcaldas_4,lyr_Diadelasemana_5];
lyr_LimitedeCuadrante_2.set('fieldAliases', {'Deleg': 'Deleg', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'No_Region': 'No_Region', 'Sector': 'Sector', 'Cve_Sector': 'Cve_Sector', 'No_Cuadran': 'No_Cuadran', 'Nomenclatu': 'Nomenclatu', 'Area_Km2': 'Area_Km2', 'x': 'x', 'y': 'y', });
lyr_LimitedeSector_3.set('fieldAliases', {'Id': 'Id', 'Delegacion': 'Delegacion', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'Consec_Reg': 'Consec_Reg', 'Consec_Sec': 'Consec_Sec', 'Nombre_Sec': 'Nombre_Sec', 'CT': 'CT', 'X': 'X', 'Y': 'Y', });
lyr_LimitedeAlcaldas_4.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_Diadelasemana_5.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_delito': 'categoria_delito', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_hecho': 'colonia_hecho', 'longitud': 'longitud', 'fecha_inicio': 'fecha_inicio', 'alcaldia_hecho_fuente': 'alcaldia_hecho_fuente', 'alcaldia_hecho': 'alcaldia_hecho', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hecho': 'calle_hecho', 'fecha_hechos': 'fecha_hechos', 'hora_hechos': 'hora_hechos', 'categoria_hora': 'categoria_hora', 'dia_semana': 'dia_semana', });
lyr_LimitedeCuadrante_2.set('fieldImages', {'Deleg': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'No_Region': 'TextEdit', 'Sector': 'TextEdit', 'Cve_Sector': 'TextEdit', 'No_Cuadran': 'TextEdit', 'Nomenclatu': 'TextEdit', 'Area_Km2': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_LimitedeSector_3.set('fieldImages', {'Id': 'TextEdit', 'Delegacion': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'Consec_Reg': 'TextEdit', 'Consec_Sec': 'TextEdit', 'Nombre_Sec': 'TextEdit', 'CT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LimitedeAlcaldas_4.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Diadelasemana_5.set('fieldImages', {'field_1': 'Range', 'delito': 'TextEdit', 'categoria_delito': 'TextEdit', 'idCI': 'Range', 'latitud': 'TextEdit', 'colonia_hecho': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inicio': 'DateTime', 'alcaldia_hecho_fuente': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hecho': 'TextEdit', 'fecha_hechos': 'DateTime', 'hora_hechos': 'TextEdit', 'categoria_hora': 'TextEdit', 'dia_semana': 'TextEdit', });
lyr_LimitedeCuadrante_2.set('fieldLabels', {'Deleg': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'No_Region': 'no label', 'Sector': 'no label', 'Cve_Sector': 'no label', 'No_Cuadran': 'no label', 'Nomenclatu': 'no label', 'Area_Km2': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_LimitedeSector_3.set('fieldLabels', {'Id': 'no label', 'Delegacion': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'Consec_Reg': 'no label', 'Consec_Sec': 'no label', 'Nombre_Sec': 'no label', 'CT': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LimitedeAlcaldas_4.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Diadelasemana_5.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_delito': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_hecho': 'no label', 'longitud': 'no label', 'fecha_inicio': 'no label', 'alcaldia_hecho_fuente': 'no label', 'alcaldia_hecho': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hecho': 'no label', 'fecha_hechos': 'no label', 'hora_hechos': 'no label', 'categoria_hora': 'no label', 'dia_semana': 'no label', });
lyr_Diadelasemana_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});