var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_readeTrabajoCaptacinCochrane_1 = new ol.format.GeoJSON();
var features_readeTrabajoCaptacinCochrane_1 = format_readeTrabajoCaptacinCochrane_1.readFeatures(json_readeTrabajoCaptacinCochrane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeTrabajoCaptacinCochrane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeTrabajoCaptacinCochrane_1.addFeatures(features_readeTrabajoCaptacinCochrane_1);
var lyr_readeTrabajoCaptacinCochrane_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeTrabajoCaptacinCochrane_1, 
                style: style_readeTrabajoCaptacinCochrane_1,
                popuplayertitle: 'Área de Trabajo - Captación Cochrane',
                interactive: true,
                title: '<img src="styles/legend/readeTrabajoCaptacinCochrane_1.png" /> Área de Trabajo - Captación Cochrane'
            });
var format_readeTrabajoCaptacinLaMochita_2 = new ol.format.GeoJSON();
var features_readeTrabajoCaptacinLaMochita_2 = format_readeTrabajoCaptacinLaMochita_2.readFeatures(json_readeTrabajoCaptacinLaMochita_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeTrabajoCaptacinLaMochita_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeTrabajoCaptacinLaMochita_2.addFeatures(features_readeTrabajoCaptacinLaMochita_2);
var lyr_readeTrabajoCaptacinLaMochita_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeTrabajoCaptacinLaMochita_2, 
                style: style_readeTrabajoCaptacinLaMochita_2,
                popuplayertitle: 'Área de Trabajo - Captación La Mochita',
                interactive: true,
                title: '<img src="styles/legend/readeTrabajoCaptacinLaMochita_2.png" /> Área de Trabajo - Captación La Mochita'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_readeTrabajoCaptacinCochrane_1.setVisible(true);lyr_readeTrabajoCaptacinLaMochita_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_readeTrabajoCaptacinCochrane_1,lyr_readeTrabajoCaptacinLaMochita_2];
lyr_readeTrabajoCaptacinCochrane_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id2': 'id2', });
lyr_readeTrabajoCaptacinLaMochita_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id2': 'id2', 'NOMBRE': 'NOMBRE', });
lyr_readeTrabajoCaptacinCochrane_1.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id2': '', });
lyr_readeTrabajoCaptacinLaMochita_2.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'id2': '', 'NOMBRE': '', });
lyr_readeTrabajoCaptacinCochrane_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id2': 'hidden field', });
lyr_readeTrabajoCaptacinLaMochita_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'id2': 'hidden field', 'NOMBRE': 'hidden field', });
lyr_readeTrabajoCaptacinLaMochita_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});