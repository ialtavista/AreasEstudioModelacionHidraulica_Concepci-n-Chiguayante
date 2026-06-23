var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_reaFotogrametra2CaptacinCochrane_1 = new ol.format.GeoJSON();
var features_reaFotogrametra2CaptacinCochrane_1 = format_reaFotogrametra2CaptacinCochrane_1.readFeatures(json_reaFotogrametra2CaptacinCochrane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaFotogrametra2CaptacinCochrane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaFotogrametra2CaptacinCochrane_1.addFeatures(features_reaFotogrametra2CaptacinCochrane_1);
var lyr_reaFotogrametra2CaptacinCochrane_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaFotogrametra2CaptacinCochrane_1, 
                style: style_reaFotogrametra2CaptacinCochrane_1,
                popuplayertitle: 'Área Fotogrametría 2- Captación Cochrane',
                interactive: true,
                title: '<img src="styles/legend/reaFotogrametra2CaptacinCochrane_1.png" /> Área Fotogrametría 2- Captación Cochrane'
            });
var format_reaFotogrametra1CaptacinLaMochita_2 = new ol.format.GeoJSON();
var features_reaFotogrametra1CaptacinLaMochita_2 = format_reaFotogrametra1CaptacinLaMochita_2.readFeatures(json_reaFotogrametra1CaptacinLaMochita_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaFotogrametra1CaptacinLaMochita_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaFotogrametra1CaptacinLaMochita_2.addFeatures(features_reaFotogrametra1CaptacinLaMochita_2);
var lyr_reaFotogrametra1CaptacinLaMochita_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaFotogrametra1CaptacinLaMochita_2, 
                style: style_reaFotogrametra1CaptacinLaMochita_2,
                popuplayertitle: 'Área Fotogrametría 1- Captación La Mochita',
                interactive: true,
                title: '<img src="styles/legend/reaFotogrametra1CaptacinLaMochita_2.png" /> Área Fotogrametría 1- Captación La Mochita'
            });
var format_InfraestructuraSanitariaEssbio_3 = new ol.format.GeoJSON();
var features_InfraestructuraSanitariaEssbio_3 = format_InfraestructuraSanitariaEssbio_3.readFeatures(json_InfraestructuraSanitariaEssbio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfraestructuraSanitariaEssbio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfraestructuraSanitariaEssbio_3.addFeatures(features_InfraestructuraSanitariaEssbio_3);
var lyr_InfraestructuraSanitariaEssbio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfraestructuraSanitariaEssbio_3, 
                style: style_InfraestructuraSanitariaEssbio_3,
                popuplayertitle: 'Infraestructura Sanitaria Essbio',
                interactive: true,
    title: 'Infraestructura Sanitaria Essbio<br />\
    <img src="styles/legend/InfraestructuraSanitariaEssbio_3_0.png" /> Planta La Mochita<br />\
    <img src="styles/legend/InfraestructuraSanitariaEssbio_3_1.png" /> Panta Cochrane<br />' });

lyr_GoogleSatelite_0.setVisible(true);lyr_reaFotogrametra2CaptacinCochrane_1.setVisible(true);lyr_reaFotogrametra1CaptacinLaMochita_2.setVisible(true);lyr_InfraestructuraSanitariaEssbio_3.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_reaFotogrametra2CaptacinCochrane_1,lyr_reaFotogrametra1CaptacinLaMochita_2,lyr_InfraestructuraSanitariaEssbio_3];
lyr_reaFotogrametra2CaptacinCochrane_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id2': 'id2', });
lyr_reaFotogrametra1CaptacinLaMochita_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id2': 'id2', 'NOMBRE': 'NOMBRE', });
lyr_InfraestructuraSanitariaEssbio_3.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', });
lyr_reaFotogrametra2CaptacinCochrane_1.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id2': '', });
lyr_reaFotogrametra1CaptacinLaMochita_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id2': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_InfraestructuraSanitariaEssbio_3.set('fieldImages', {'fid': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_reaFotogrametra2CaptacinCochrane_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id2': 'hidden field', });
lyr_reaFotogrametra1CaptacinLaMochita_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id2': 'hidden field', 'NOMBRE': 'hidden field', });
lyr_InfraestructuraSanitariaEssbio_3.set('fieldLabels', {'fid': 'hidden field', 'NOMBRE': 'inline label - always visible', });
lyr_InfraestructuraSanitariaEssbio_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});