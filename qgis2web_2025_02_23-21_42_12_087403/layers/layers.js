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
var format_IncidenciaDelictivaconViolencia_4 = new ol.format.GeoJSON();
var features_IncidenciaDelictivaconViolencia_4 = format_IncidenciaDelictivaconViolencia_4.readFeatures(json_IncidenciaDelictivaconViolencia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IncidenciaDelictivaconViolencia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncidenciaDelictivaconViolencia_4.addFeatures(features_IncidenciaDelictivaconViolencia_4);
var lyr_IncidenciaDelictivaconViolencia_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncidenciaDelictivaconViolencia_4, 
                style: style_IncidenciaDelictivaconViolencia_4,
                popuplayertitle: 'Incidencia Delictiva con Violencia',
                interactive: false,
    title: 'Incidencia Delictiva con Violencia<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_0.png" /> Homicidio doloso<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_1.png" /> Lesiones dolosas por disparo de arma de fuego<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_2.png" /> Robo a casa habitación con violencia<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_3.png" /> Robo a cuentahabiente saliendo del cajero con violencia<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_4.png" /> Robo a negocio con violencia<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_5.png" /> Robo a pasajero a bordo de taxi con violencia<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_6.png" /> Robo a transeúnte en vía pública con violencia<br />\
    <img src="styles/legend/IncidenciaDelictivaconViolencia_4_7.png" /> Robo de vehículo con violencia<br />' });
var format_Limitedealcaldias_5 = new ol.format.GeoJSON();
var features_Limitedealcaldias_5 = format_Limitedealcaldias_5.readFeatures(json_Limitedealcaldias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitedealcaldias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitedealcaldias_5.addFeatures(features_Limitedealcaldias_5);
var lyr_Limitedealcaldias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitedealcaldias_5, 
                style: style_Limitedealcaldias_5,
                popuplayertitle: 'Limite de alcaldias',
                interactive: false,
                title: '<img src="styles/legend/Limitedealcaldias_5.png" /> Limite de alcaldias'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_LimitedeCuadrante_2.setVisible(true);lyr_LimitedeSector_3.setVisible(true);lyr_IncidenciaDelictivaconViolencia_4.setVisible(true);lyr_Limitedealcaldias_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_LimitedeCuadrante_2,lyr_LimitedeSector_3,lyr_IncidenciaDelictivaconViolencia_4,lyr_Limitedealcaldias_5];
lyr_LimitedeCuadrante_2.set('fieldAliases', {'Deleg': 'Deleg', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'No_Region': 'No_Region', 'Sector': 'Sector', 'Cve_Sector': 'Cve_Sector', 'No_Cuadran': 'No_Cuadran', 'Nomenclatu': 'Nomenclatu', 'Area_Km2': 'Area_Km2', 'x': 'x', 'y': 'y', });
lyr_LimitedeSector_3.set('fieldAliases', {'Id': 'Id', 'Delegacion': 'Delegacion', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'Consec_Reg': 'Consec_Reg', 'Consec_Sec': 'Consec_Sec', 'Nombre_Sec': 'Nombre_Sec', 'CT': 'CT', 'X': 'X', 'Y': 'Y', });
lyr_IncidenciaDelictivaconViolencia_4.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_delito': 'categoria_delito', 'idCI': 'idCI', 'latitud': 'latitud', 'colonia_hecho': 'colonia_hecho', 'longitud': 'longitud', 'fecha_inicio': 'fecha_inicio', 'alcaldia_hecho_fuente': 'alcaldia_hecho_fuente', 'alcaldia_hecho': 'alcaldia_hecho', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'direccion': 'direccion', 'calle': 'calle', 'calle_limpia': 'calle_limpia', 'exordio': 'exordio', 'calle_hecho': 'calle_hecho', });
lyr_Limitedealcaldias_5.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_LimitedeCuadrante_2.set('fieldImages', {'Deleg': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'No_Region': 'TextEdit', 'Sector': 'TextEdit', 'Cve_Sector': 'TextEdit', 'No_Cuadran': 'TextEdit', 'Nomenclatu': 'TextEdit', 'Area_Km2': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_LimitedeSector_3.set('fieldImages', {'Id': 'TextEdit', 'Delegacion': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'Consec_Reg': 'TextEdit', 'Consec_Sec': 'TextEdit', 'Nombre_Sec': 'TextEdit', 'CT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_IncidenciaDelictivaconViolencia_4.set('fieldImages', {'field_1': 'Range', 'delito': 'TextEdit', 'categoria_delito': 'TextEdit', 'idCI': 'Range', 'latitud': 'TextEdit', 'colonia_hecho': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inicio': 'DateTime', 'alcaldia_hecho_fuente': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'direccion': 'TextEdit', 'calle': 'TextEdit', 'calle_limpia': 'TextEdit', 'exordio': 'TextEdit', 'calle_hecho': 'TextEdit', });
lyr_Limitedealcaldias_5.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_LimitedeCuadrante_2.set('fieldLabels', {'Deleg': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'No_Region': 'no label', 'Sector': 'no label', 'Cve_Sector': 'no label', 'No_Cuadran': 'no label', 'Nomenclatu': 'no label', 'Area_Km2': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_LimitedeSector_3.set('fieldLabels', {'Id': 'no label', 'Delegacion': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'Consec_Reg': 'no label', 'Consec_Sec': 'no label', 'Nombre_Sec': 'no label', 'CT': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_IncidenciaDelictivaconViolencia_4.set('fieldLabels', {'field_1': 'no label', 'delito': 'no label', 'categoria_delito': 'no label', 'idCI': 'no label', 'latitud': 'no label', 'colonia_hecho': 'no label', 'longitud': 'no label', 'fecha_inicio': 'no label', 'alcaldia_hecho_fuente': 'no label', 'alcaldia_hecho': 'no label', 'nombre_sec': 'no label', 'Nomenclatu': 'no label', 'direccion': 'no label', 'calle': 'no label', 'calle_limpia': 'no label', 'exordio': 'no label', 'calle_hecho': 'no label', });
lyr_Limitedealcaldias_5.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_Limitedealcaldias_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});