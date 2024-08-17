var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WP_Census2012_1 = new ol.format.GeoJSON();
var features_WP_Census2012_1 = format_WP_Census2012_1.readFeatures(json_WP_Census2012_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WP_Census2012_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WP_Census2012_1.addFeatures(features_WP_Census2012_1);
var lyr_WP_Census2012_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WP_Census2012_1, 
                style: style_WP_Census2012_1,
                popuplayertitle: "WP_Census2012",
                interactive: true,
    title: 'WP_Census2012<br />\
    <img src="styles/legend/WP_Census2012_1_0.png" /> 0 - 1008<br />\
    <img src="styles/legend/WP_Census2012_1_1.png" /> 1008 - 1762<br />\
    <img src="styles/legend/WP_Census2012_1_2.png" /> 1762 - 2853<br />\
    <img src="styles/legend/WP_Census2012_1_3.png" /> 2853 - 4786<br />\
    <img src="styles/legend/WP_Census2012_1_4.png" /> 4786 - 8893<br />\
    <img src="styles/legend/WP_Census2012_1_5.png" /> 8893 - 13455<br />\
    <img src="styles/legend/WP_Census2012_1_6.png" /> 13455 - 27776<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_WP_Census2012_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WP_Census2012_1];
lyr_WP_Census2012_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'TOT_POP': 'TOT_POP', });
lyr_WP_Census2012_1.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'GND_N': '', 'TOT_POP': '', });
lyr_WP_Census2012_1.set('fieldLabels', {'PROVINCE_N': 'inline label - visible with data', 'DISTRICT_N': 'inline label - visible with data', 'DSD_N': 'inline label - visible with data', 'GND_N': 'inline label - visible with data', 'TOT_POP': 'inline label - visible with data', });
lyr_WP_Census2012_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});