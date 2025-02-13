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
var format_DelitosdeAltoImpacto_2 = new ol.format.GeoJSON();
var features_DelitosdeAltoImpacto_2 = format_DelitosdeAltoImpacto_2.readFeatures(json_DelitosdeAltoImpacto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelitosdeAltoImpacto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelitosdeAltoImpacto_2.addFeatures(features_DelitosdeAltoImpacto_2);
var lyr_DelitosdeAltoImpacto_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelitosdeAltoImpacto_2, 
                style: style_DelitosdeAltoImpacto_2,
                popuplayertitle: 'Delitos de Alto Impacto',
                interactive: true,
    title: 'Delitos de Alto Impacto<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_0.png" /> Homicidio doloso<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_1.png" /> Lesiones dolosas por disparo de arma de fuego<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_2.png" /> Robo a casa habitación con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_3.png" /> Robo a cuentahabiente saliendo del cajero con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_4.png" /> Robo a negocio con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_5.png" /> Robo a pasajero a bordo de taxi con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_6.png" /> Robo a pasajero a bordo del metro sin violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_7.png" /> Robo a repartidor con y sin violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_8.png" /> Robo a transeúnte en vía pública con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_9.png" /> Robo a transeúnte en vía pública sin violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_2_10.png" /> Violación<br />' });
var format_DelitosdeAltoImpacto_3 = new ol.format.GeoJSON();
var features_DelitosdeAltoImpacto_3 = format_DelitosdeAltoImpacto_3.readFeatures(json_DelitosdeAltoImpacto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelitosdeAltoImpacto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelitosdeAltoImpacto_3.addFeatures(features_DelitosdeAltoImpacto_3);
var lyr_DelitosdeAltoImpacto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelitosdeAltoImpacto_3, 
                style: style_DelitosdeAltoImpacto_3,
                popuplayertitle: 'Delitos de Alto Impacto',
                interactive: true,
    title: 'Delitos de Alto Impacto<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_0.png" /> Robo a pasajero a bordo de pesero colectivo con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_1.png" /> Robo a pasajero a bordo de pesero colectivo sin violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_2.png" /> Robo de motocicleta con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_3.png" /> Robo de motocicleta sin violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_4.png" /> Robo de vehículo de servicio particular con violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_5.png" /> Robo de vehículo de servicio particular sin violencia<br />\
    <img src="styles/legend/DelitosdeAltoImpacto_3_6.png" /> Robo de vehículo de servicio público con violencia<br />' });
var format_LimitedeSectores_4 = new ol.format.GeoJSON();
var features_LimitedeSectores_4 = format_LimitedeSectores_4.readFeatures(json_LimitedeSectores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedeSectores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedeSectores_4.addFeatures(features_LimitedeSectores_4);
var lyr_LimitedeSectores_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedeSectores_4, 
                style: style_LimitedeSectores_4,
                popuplayertitle: 'Limite de Sectores',
                interactive: false,
                title: '<img src="styles/legend/LimitedeSectores_4.png" /> Limite de Sectores'
            });
var format_LimedeAlcaldas_5 = new ol.format.GeoJSON();
var features_LimedeAlcaldas_5 = format_LimedeAlcaldas_5.readFeatures(json_LimedeAlcaldas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimedeAlcaldas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimedeAlcaldas_5.addFeatures(features_LimedeAlcaldas_5);
var lyr_LimedeAlcaldas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimedeAlcaldas_5, 
                style: style_LimedeAlcaldas_5,
                popuplayertitle: 'Lime de Alcaldías',
                interactive: false,
                title: '<img src="styles/legend/LimedeAlcaldas_5.png" /> Lime de Alcaldías'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Positron_1.setVisible(true);lyr_DelitosdeAltoImpacto_2.setVisible(true);lyr_DelitosdeAltoImpacto_3.setVisible(true);lyr_LimitedeSectores_4.setVisible(true);lyr_LimedeAlcaldas_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Positron_1,lyr_DelitosdeAltoImpacto_2,lyr_DelitosdeAltoImpacto_3,lyr_LimitedeSectores_4,lyr_LimedeAlcaldas_5];
lyr_DelitosdeAltoImpacto_2.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_delito': 'categoria_delito', 'idCI': 'idCI', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_inicio': 'fecha_inicio', 'alcaldia_hecho_fuente': 'alcaldia_hecho_fuente', 'alcaldia_hecho': 'alcaldia_hecho', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'direccion': 'direccion', 'calle': 'calle', 'calle_limpia': 'calle_limpia', });
lyr_DelitosdeAltoImpacto_3.set('fieldAliases', {'field_1': 'field_1', 'delito': 'delito', 'categoria_delito': 'categoria_delito', 'idCI': 'idCI', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_inicio': 'fecha_inicio', 'alcaldia_hecho_fuente': 'alcaldia_hecho_fuente', 'alcaldia_hecho': 'alcaldia_hecho', 'nombre_sec': 'nombre_sec', 'Nomenclatu': 'Nomenclatu', 'direccion': 'direccion', 'calle': 'calle', 'calle_limpia': 'calle_limpia', });
lyr_LimitedeSectores_4.set('fieldAliases', {'Id': 'Id', 'Delegacion': 'Delegacion', 'Zona': 'Zona', 'Cve_Zona': 'Cve_Zona', 'Consec_Reg': 'Consec_Reg', 'Consec_Sec': 'Consec_Sec', 'Nombre_Sec': 'Nombre_Sec', 'CT': 'CT', 'X': 'X', 'Y': 'Y', });
lyr_LimedeAlcaldas_5.set('fieldAliases', {'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', 'frecuencia': 'frecuencia', });
lyr_DelitosdeAltoImpacto_2.set('fieldImages', {'field_1': 'Range', 'delito': 'TextEdit', 'categoria_delito': 'TextEdit', 'idCI': 'Range', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inicio': 'DateTime', 'alcaldia_hecho_fuente': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'direccion': 'TextEdit', 'calle': 'TextEdit', 'calle_limpia': 'TextEdit', });
lyr_DelitosdeAltoImpacto_3.set('fieldImages', {'field_1': 'Range', 'delito': 'TextEdit', 'categoria_delito': 'TextEdit', 'idCI': 'Range', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_inicio': 'DateTime', 'alcaldia_hecho_fuente': 'TextEdit', 'alcaldia_hecho': 'TextEdit', 'nombre_sec': 'TextEdit', 'Nomenclatu': 'TextEdit', 'direccion': 'TextEdit', 'calle': 'TextEdit', 'calle_limpia': 'TextEdit', });
lyr_LimitedeSectores_4.set('fieldImages', {'Id': 'TextEdit', 'Delegacion': 'TextEdit', 'Zona': 'TextEdit', 'Cve_Zona': 'TextEdit', 'Consec_Reg': 'TextEdit', 'Consec_Sec': 'TextEdit', 'Nombre_Sec': 'TextEdit', 'CT': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LimedeAlcaldas_5.set('fieldImages', {'nomgeo': 'TextEdit', 'cve_mun': 'Range', 'g_pnt_2': 'TextEdit', 'geo_shp': 'TextEdit', 'frecuencia': 'TextEdit', });
lyr_DelitosdeAltoImpacto_2.set('fieldLabels', {'field_1': 'hidden field', 'delito': 'hidden field', 'categoria_delito': 'inline label - always visible', 'idCI': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_inicio': 'hidden field', 'alcaldia_hecho_fuente': 'inline label - always visible', 'alcaldia_hecho': 'hidden field', 'nombre_sec': 'inline label - always visible', 'Nomenclatu': 'inline label - always visible', 'direccion': 'hidden field', 'calle': 'hidden field', 'calle_limpia': 'hidden field', });
lyr_DelitosdeAltoImpacto_3.set('fieldLabels', {'field_1': 'hidden field', 'delito': 'inline label - always visible', 'categoria_delito': 'hidden field', 'idCI': 'hidden field', 'latitud': 'hidden field', 'longitud': 'hidden field', 'fecha_inicio': 'hidden field', 'alcaldia_hecho_fuente': 'inline label - always visible', 'alcaldia_hecho': 'hidden field', 'nombre_sec': 'inline label - always visible', 'Nomenclatu': 'inline label - always visible', 'direccion': 'hidden field', 'calle': 'hidden field', 'calle_limpia': 'hidden field', });
lyr_LimitedeSectores_4.set('fieldLabels', {'Id': 'no label', 'Delegacion': 'no label', 'Zona': 'no label', 'Cve_Zona': 'no label', 'Consec_Reg': 'no label', 'Consec_Sec': 'no label', 'Nombre_Sec': 'no label', 'CT': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LimedeAlcaldas_5.set('fieldLabels', {'nomgeo': 'no label', 'cve_mun': 'no label', 'g_pnt_2': 'no label', 'geo_shp': 'no label', 'frecuencia': 'no label', });
lyr_LimedeAlcaldas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});