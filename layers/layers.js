var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BATASWP_1 = new ol.format.GeoJSON();
var features_BATASWP_1 = format_BATASWP_1.readFeatures(json_BATASWP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASWP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASWP_1.addFeatures(features_BATASWP_1);
var lyr_BATASWP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASWP_1, 
                style: style_BATASWP_1,
                interactive: true,
                title: '<img src="styles/legend/BATASWP_1.png" /> BATAS WP'
            });
var format_TOPONIMI_2 = new ol.format.GeoJSON();
var features_TOPONIMI_2 = format_TOPONIMI_2.readFeatures(json_TOPONIMI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_2.addFeatures(features_TOPONIMI_2);
var lyr_TOPONIMI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOPONIMI_2, 
                style: style_TOPONIMI_2,
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_2.png" /> TOPONIMI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BATASWP_1.setVisible(true);lyr_TOPONIMI_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BATASWP_1,lyr_TOPONIMI_2];
lyr_BATASWP_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', });
lyr_TOPONIMI_2.set('fieldAliases', {'NAME': 'NAME', 'FOTO': 'FOTO', });
lyr_BATASWP_1.set('fieldImages', {'Kecamatan': 'TextEdit', });
lyr_TOPONIMI_2.set('fieldImages', {'NAME': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_BATASWP_1.set('fieldLabels', {'Kecamatan': 'inline label', });
lyr_TOPONIMI_2.set('fieldLabels', {'NAME': 'inline label', 'FOTO': 'inline label', });
lyr_TOPONIMI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});