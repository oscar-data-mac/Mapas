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
var format_Nocturno0306_5 = new ol.format.GeoJSON();
var features_Nocturno0306_5 = format_Nocturno0306_5.readFeatures(json_Nocturno0306_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nocturno0306_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nocturno0306_5.addFeatures(features_Nocturno0306_5);
var lyr_Nocturno0306_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nocturno0306_5, 
                style: style_Nocturno0306_5,
                popuplayertitle: 'Nocturno 03:06',
                interactive: false,
                title: '<img src="styles/legend/Nocturno0306_5.png" /> Nocturno 03:06'
            });
var format_Nocturno0003_6 = new ol.format.GeoJSON();
var features_Nocturno0003_6 = format_Nocturno0003_6.readFeatures(json_Nocturno0003_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nocturno0003_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nocturno0003_6.addFeatures(features_Nocturno0003_6);
var lyr_Nocturno0003_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nocturno0003_6, 
                style: style_Nocturno0003_6,
                popuplayertitle: 'Nocturno 00:03',
                interactive: false,
                title: '<img src="styles/legend/Nocturno0003_6.png" /> Nocturno 00:03'
            });
var format_Nocturno2124_7 = new ol.format.GeoJSON();
var features_Nocturno2124_7 = format_Nocturno2124_7.readFeatures(json_Nocturno2124_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nocturno2124_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nocturno2124_7.addFeatures(features_Nocturno2124_7);
var lyr_Nocturno2124_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nocturno2124_7, 
                style: style_Nocturno2124_7,
                popuplayertitle: 'Nocturno 21:24',
                interactive: false,
                title: '<img src="styles/legend/Nocturno2124_7.png" /> Nocturno 21:24'
            });
var format_Vespertino1821_8 = new ol.format.GeoJSON();
var features_Vespertino1821_8 = format_Vespertino1821_8.readFeatures(json_Vespertino1821_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vespertino1821_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vespertino1821_8.addFeatures(features_Vespertino1821_8);
var lyr_Vespertino1821_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vespertino1821_8, 
                style: style_Vespertino1821_8,
                popuplayertitle: 'Vespertino 18:21',
                interactive: false,
                title: '<img src="styles/legend/Vespertino1821_8.png" /> Vespertino 18:21'
            });
var format_Vespertino1518_9 = new ol.format.GeoJSON();
var features_Vespertino1518_9 = format_Vespertino1518_9.readFeatures(json_Vespertino1518_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vespertino1518_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vespertino1518_9.addFeatures(features_Vespertino1518_9);
var lyr_Vespertino1518_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vespertino1518_9, 
                style: style_Vespertino1518_9,
                popuplayertitle: 'Vespertino 15:18',
                interactive: false,
                title: '<img src="styles/legend/Vespertino1518_9.png" /> Vespertino 15:18'
            });
var format_Matutino1215_10 = new ol.format.GeoJSON();
var features_Matutino1215_10 = format_Matutino1215_10.readFeatures(json_Matutino1215_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matutino1215_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matutino1215_10.addFeatures(features_Matutino1215_10);
var lyr_Matutino1215_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matutino1215_10, 
                style: style_Matutino1215_10,
                popuplayertitle: 'Matutino 12:15',
                interactive: false,
                title: '<img src="styles/legend/Matutino1215_10.png" /> Matutino 12:15'
            });
var format_Matutino0912_11 = new ol.format.GeoJSON();
var features_Matutino0912_11 = format_Matutino0912_11.readFeatures(json_Matutino0912_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matutino0912_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matutino0912_11.addFeatures(features_Matutino0912_11);
var lyr_Matutino0912_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matutino0912_11, 
                style: style_Matutino0912_11,
                popuplayertitle: 'Matutino 09:12',
                interactive: false,
                title: '<img src="styles/legend/Matutino0912_11.png" /> Matutino 09:12'
            });
var format_Matutino0609_12 = new ol.format.GeoJSON();
var features_Matutino0609_12 = format_Matutino0609_12.readFeatures(json_Matutino0609_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matutino0609_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matutino0609_12.addFeatures(features_Matutino0609_12);
var lyr_Matutino0609_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matutino0609_12, 
                style: style_Matutino0609_12,
                popuplayertitle: 'Matutino 06:09',
                interactive: false,
                title: '<img src="styles/legend/Matutino0609_12.png" /> Matutino 06:09'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_LimitedeCuadrante_2.setVisible(true);lyr_LimitedeSector_3.setVisible(true);lyr_LimitedeAlcaldas_4.setVisible(true);lyr_Nocturno0306_5.setVisible(true);lyr_Nocturno0003_6.setVisible(true);lyr_Nocturno2124_7.setVisible(true);lyr_Vespertino1821_8.setVisible(true);lyr_Vespertino1518_9.setVisible(true);lyr_Matutino1215_10.setVisible(true);lyr_Matutino0912_11.setVisible(true);lyr_Matutino0609_12.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_LimitedeCuadrante_2,lyr_LimitedeSector_3,lyr_LimitedeAlcaldas_4,lyr_Nocturno0306_5,lyr_Nocturno0003_6,lyr_Nocturno2124_7,lyr_Vespertino1821_8,lyr_Vespertino1518_9,lyr_Matutino1215_10,lyr_Matutino0912_11,lyr_Matutino0609_12];
lyr_LimitedeCuadrante_2.set('fieldAliases', {'Deleg': 'Deleg', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'No_Region': 'No_Region', 'Sector': 'Sector', 'Cve_Sector': 'Cve_Sector', 'No_Cuadran': 'No_Cuadran', 'Nomenclatu': 'Nomenclatu', 'Area_Km2': 'Area_Km2', 'x': 'x', 'y': 'y', });
lyr_LimitedeSector_3.set('fieldAliases', {'Id': 'Id', 'Delegacion': 'Delegacion', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'Consec_Reg': 'Consec_Reg', 'Consec_Sec': 'Consec_Sec', 'Nombre_Sec': 'Nombre_Sec', 'CT': 'CT', 'X': 'X', 'Y': 'Y', });
lyr_LimitedeAlcaldas_4.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_Nocturno0306_5.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Nocturno0003_6.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Nocturno2124_7.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Vespertino1821_8.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Vespertino1518_9.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Matutino1215_10.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Matutino0912_11.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_Matutino0609_12.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_': 'categoria_', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_he': 'colonia_he', 'longitud': 'longitud', 'fecha_inic': 'fecha_inic', 'alcaldia_h': 'alcaldia_h', 'alcaldia_1': 'alcaldia_1', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'exordio': 'exordio', 'calle_hech': 'calle_hech', 'hora_hecho': 'hora_hecho', 'categori_1': 'categori_1', });
lyr_LimitedeCuadrante_2.set('fieldImages', {'Deleg': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'No_Region': 'TextEdit', 'Sector': 'TextEdit', 'Cve_Sector': 'TextEdit', 'No_Cuadran': 'TextEdit', 'Nomenclatu': 'TextEdit', 'Area_Km2': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_LimitedeSector_3.set('fieldImages', {'Id': 'TextEdit', 'Delegacion': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'Consec_Reg': 'TextEdit', 'Consec_Sec': 'TextEdit', 'Nombre_Sec': 'TextEdit', 'CT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LimitedeAlcaldas_4.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_Nocturno0306_5.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Nocturno0003_6.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Nocturno2124_7.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Vespertino1821_8.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Vespertino1518_9.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Matutino1215_10.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Matutino0912_11.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_Matutino0609_12.set('fieldImages', {'field_1': 'TextEdit', 'delito': 'TextEdit', 'categoria_': 'TextEdit', 'idCI': 'TextEdit', 'latitud': 'TextEdit', 'colonia_he': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inic': 'DateTime', 'alcaldia_h': 'TextEdit', 'alcaldia_1': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'exordio': 'TextEdit', 'calle_hech': 'TextEdit', 'hora_hecho': 'TextEdit', 'categori_1': 'TextEdit', });
lyr_LimitedeCuadrante_2.set('fieldLabels', {'Deleg': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'No_Region': 'no label', 'Sector': 'no label', 'Cve_Sector': 'no label', 'No_Cuadran': 'no label', 'Nomenclatu': 'no label', 'Area_Km2': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_LimitedeSector_3.set('fieldLabels', {'Id': 'no label', 'Delegacion': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'Consec_Reg': 'no label', 'Consec_Sec': 'no label', 'Nombre_Sec': 'no label', 'CT': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LimitedeAlcaldas_4.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Nocturno0306_5.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Nocturno0003_6.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Nocturno2124_7.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Vespertino1821_8.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Vespertino1518_9.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Matutino1215_10.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Matutino0912_11.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Matutino0609_12.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_he': 'no label', 'longitud': 'no label', 'fecha_inic': 'no label', 'alcaldia_h': 'no label', 'alcaldia_1': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'exordio': 'no label', 'calle_hech': 'no label', 'hora_hecho': 'no label', 'categori_1': 'no label', });
lyr_Matutino0609_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});