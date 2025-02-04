var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pemukiman_1 = new ol.format.GeoJSON();
var features_Pemukiman_1 = format_Pemukiman_1.readFeatures(json_Pemukiman_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_1.addFeatures(features_Pemukiman_1);
var lyr_Pemukiman_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_1, 
                style: style_Pemukiman_1,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_1.png" /> Pemukiman'
            });
var format_AdministrasiMalinau15_2 = new ol.format.GeoJSON();
var features_AdministrasiMalinau15_2 = format_AdministrasiMalinau15_2.readFeatures(json_AdministrasiMalinau15_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiMalinau15_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiMalinau15_2.addFeatures(features_AdministrasiMalinau15_2);
var lyr_AdministrasiMalinau15_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdministrasiMalinau15_2, 
                style: style_AdministrasiMalinau15_2,
                popuplayertitle: 'Administrasi Malinau 15',
                interactive: true,
    title: 'Administrasi Malinau 15<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_0.png" /> KECAMATAN BAHAU HULU<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_1.png" /> KECAMATAN KAYAN HILIR<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_2.png" /> KECAMATAN KAYAN HULU<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_3.png" /> KECAMATAN KAYAN SELATAN<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_4.png" /> KECAMATAN MALINAU BARAT<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_5.png" /> KECAMATAN MALINAU KOTA<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_6.png" /> KECAMATAN MALINAU SELATAN<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_7.png" /> KECAMATAN MALINAU SELATAN HILIR<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_8.png" /> KECAMATAN MALINAU SELATAN HULU<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_9.png" /> KECAMATAN MALINAU UTARA<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_10.png" /> KECAMATAN MENTARANG<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_11.png" /> KECAMATAN PUJUNGAN<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_12.png" /> KECAMATAN SUNGAI BOH<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_13.png" /> KECAMATAN SUNGAI TUBU<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_14.png" /> MENTARANG HULU<br />\
    <img src="styles/legend/AdministrasiMalinau15_2_15.png" /> <br />'
        });
var format_RENCANAREALISASI_3 = new ol.format.GeoJSON();
var features_RENCANAREALISASI_3 = format_RENCANAREALISASI_3.readFeatures(json_RENCANAREALISASI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RENCANAREALISASI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RENCANAREALISASI_3.addFeatures(features_RENCANAREALISASI_3);
var lyr_RENCANAREALISASI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RENCANAREALISASI_3, 
                style: style_RENCANAREALISASI_3,
                popuplayertitle: 'RENCANA & REALISASI',
                interactive: true,
    title: 'RENCANA & REALISASI<br />\
    <img src="styles/legend/RENCANAREALISASI_3_0.png" /> Realisasi Jalan<br />\
    <img src="styles/legend/RENCANAREALISASI_3_1.png" /> Rencana Jalan<br />\
    <img src="styles/legend/RENCANAREALISASI_3_2.png" /> <br />'
        });
var format_Identifikasi_Dampingan_4 = new ol.format.GeoJSON();
var features_Identifikasi_Dampingan_4 = format_Identifikasi_Dampingan_4.readFeatures(json_Identifikasi_Dampingan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Identifikasi_Dampingan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identifikasi_Dampingan_4.addFeatures(features_Identifikasi_Dampingan_4);
var lyr_Identifikasi_Dampingan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identifikasi_Dampingan_4, 
                style: style_Identifikasi_Dampingan_4,
                popuplayertitle: 'Identifikasi_Dampingan',
                interactive: true,
    title: 'Identifikasi_Dampingan<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_0.png" /> Agung Baru<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_1.png" /> Apau Ping<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_2.png" /> Belayan<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_3.png" /> Data Baru<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_4.png" /> Data Dian<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_5.png" /> Dumu Mahak<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_6.png" /> Kec. Lumbis Hulu<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_7.png" /> Labanyarit<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_8.png" /> Lidung Payau<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_9.png" /> Long Alango<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_10.png" /> Long Apung<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_11.png" /> Long Berini<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_12.png" /> Long Jalan<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_13.png" /> Long Kemuat<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_14.png" /> Long Lake<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_15.png" /> Long Lebusan<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_16.png" /> Long Metun<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_17.png" /> Long Nawang<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_18.png" /> Long Nyau<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_19.png" /> Long Pada<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_20.png" /> Long Payau<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_21.png" /> Long Pipa<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_22.png" /> Long Ranau<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_23.png" /> Long Rat<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_24.png" /> Long Sule<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_25.png" /> Long Tebulo<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_26.png" /> Long Top<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_27.png" /> Long Uli<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_28.png" /> Long Uro<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_29.png" /> Mahak Baru<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_30.png" /> Metulang<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_31.png" /> Metut<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_32.png" /> Nahakramo Baru<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_33.png" /> Pelancau<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_34.png" /> Pelancau Hilir<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_35.png" /> Punan Mirau<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_36.png" /> Sei Anai<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_37.png" /> Sungai Barang<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_38.png" /> Tanjung Nanga<br />\
    <img src="styles/legend/Identifikasi_Dampingan_4_39.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pemukiman_1.setVisible(true);lyr_AdministrasiMalinau15_2.setVisible(true);lyr_RENCANAREALISASI_3.setVisible(true);lyr_Identifikasi_Dampingan_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pemukiman_1,lyr_AdministrasiMalinau15_2,lyr_RENCANAREALISASI_3,lyr_Identifikasi_Dampingan_4];
lyr_Pemukiman_1.set('fieldAliases', {'WIL_ADAT': 'WIL_ADAT', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'JML_PDD': 'JML_PDD', 'KK': 'KK', 'NAMA_DESA': 'NAMA_DESA', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'STA_PEMUKI': 'STA_PEMUKI', 'SIS_PERKOT': 'SIS_PERKOT', 'Ket_Ibukot': 'Ket_Ibukot', 'Ibukota_No': 'Ibukota_No', 'Lab_Desa': 'Lab_Desa', 'Sis_Kot': 'Sis_Kot', 'y_dms': 'y_dms', 'x_dms': 'x_dms', });
lyr_AdministrasiMalinau15_2.set('fieldAliases', {'Id': 'Id', 'KECAMATAN': 'KECAMATAN', 'LUAS_HA': 'LUAS_HA', 'Kawasan': 'Kawasan', 'Luas_M2': 'Luas_M2', 'Luas_Km': 'Luas_Km', 'Wil_Adat': 'Wil_Adat', });
lyr_RENCANAREALISASI_3.set('fieldAliases', {'Id': 'Id', 'NAMA_JALAN': 'NAMA_JALAN', 'RUAS_JALAN': 'RUAS_JALAN', 'PJG_JALAN': 'PJG_JALAN', 'PERUNTUKAN': 'PERUNTUKAN', 'SISTEM_JAL': 'SISTEM_JAL', 'FUNGSI_JAL': 'FUNGSI_JAL', 'STATUS_JAL': 'STATUS_JAL', 'KELAS_JAL': 'KELAS_JAL', 'Lebar_Mtr': 'Lebar_Mtr', 'RENC_REAL': 'RENC_REAL', 'Panjang_Mt': 'Panjang_Mt', 'RTRW_KALTA': 'RTRW_KALTA', 'Panjang_jl': 'Panjang_jl', });
lyr_Identifikasi_Dampingan_4.set('fieldAliases', {'WIL_ADAT': 'WIL_ADAT', 'KECAMATAN': 'KECAMATAN', 'NAMA_DESA': 'NAMA_DESA', 'Lab_Desa': 'Lab_Desa', 'y_dms': 'y_dms', 'x_dms': 'x_dms', 'No_urut': 'No_urut', 'Peoject': 'Peoject', });
lyr_Pemukiman_1.set('fieldImages', {'WIL_ADAT': '', 'KECAMATAN': '', 'KABUPATEN': '', 'JML_PDD': '', 'KK': '', 'NAMA_DESA': '', 'POINT_X': '', 'POINT_Y': '', 'STA_PEMUKI': '', 'SIS_PERKOT': '', 'Ket_Ibukot': '', 'Ibukota_No': '', 'Lab_Desa': '', 'Sis_Kot': '', 'y_dms': '', 'x_dms': '', });
lyr_AdministrasiMalinau15_2.set('fieldImages', {'Id': 'Range', 'KECAMATAN': 'TextEdit', 'LUAS_HA': 'Range', 'Kawasan': 'TextEdit', 'Luas_M2': 'TextEdit', 'Luas_Km': 'TextEdit', 'Wil_Adat': 'TextEdit', });
lyr_RENCANAREALISASI_3.set('fieldImages', {'Id': 'Range', 'NAMA_JALAN': 'TextEdit', 'RUAS_JALAN': 'TextEdit', 'PJG_JALAN': 'Range', 'PERUNTUKAN': 'TextEdit', 'SISTEM_JAL': 'TextEdit', 'FUNGSI_JAL': 'TextEdit', 'STATUS_JAL': 'TextEdit', 'KELAS_JAL': 'TextEdit', 'Lebar_Mtr': 'TextEdit', 'RENC_REAL': 'TextEdit', 'Panjang_Mt': 'TextEdit', 'RTRW_KALTA': 'TextEdit', 'Panjang_jl': 'TextEdit', });
lyr_Identifikasi_Dampingan_4.set('fieldImages', {'WIL_ADAT': 'TextEdit', 'KECAMATAN': 'TextEdit', 'NAMA_DESA': 'TextEdit', 'Lab_Desa': 'TextEdit', 'y_dms': 'TextEdit', 'x_dms': 'TextEdit', 'No_urut': 'Range', 'Peoject': 'TextEdit', });
lyr_Pemukiman_1.set('fieldLabels', {'WIL_ADAT': 'hidden field', 'KECAMATAN': 'inline label - visible with data', 'KABUPATEN': 'hidden field', 'JML_PDD': 'hidden field', 'KK': 'hidden field', 'NAMA_DESA': 'inline label - visible with data', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'STA_PEMUKI': 'hidden field', 'SIS_PERKOT': 'hidden field', 'Ket_Ibukot': 'hidden field', 'Ibukota_No': 'hidden field', 'Lab_Desa': 'hidden field', 'Sis_Kot': 'hidden field', 'y_dms': 'no label', 'x_dms': 'no label', });
lyr_AdministrasiMalinau15_2.set('fieldLabels', {'Id': 'hidden field', 'KECAMATAN': 'inline label - visible with data', 'LUAS_HA': 'inline label - visible with data', 'Kawasan': 'hidden field', 'Luas_M2': 'hidden field', 'Luas_Km': 'hidden field', 'Wil_Adat': 'hidden field', });
lyr_RENCANAREALISASI_3.set('fieldLabels', {'Id': 'hidden field', 'NAMA_JALAN': 'hidden field', 'RUAS_JALAN': 'hidden field', 'PJG_JALAN': 'hidden field', 'PERUNTUKAN': 'inline label - visible with data', 'SISTEM_JAL': 'hidden field', 'FUNGSI_JAL': 'hidden field', 'STATUS_JAL': 'inline label - visible with data', 'KELAS_JAL': 'hidden field', 'Lebar_Mtr': 'hidden field', 'RENC_REAL': 'no label', 'Panjang_Mt': 'hidden field', 'RTRW_KALTA': 'hidden field', 'Panjang_jl': 'hidden field', });
lyr_Identifikasi_Dampingan_4.set('fieldLabels', {'WIL_ADAT': 'hidden field', 'KECAMATAN': 'inline label - visible with data', 'NAMA_DESA': 'inline label - visible with data', 'Lab_Desa': 'hidden field', 'y_dms': 'inline label - visible with data', 'x_dms': 'inline label - visible with data', 'No_urut': 'hidden field', 'Peoject': 'hidden field', });
lyr_Identifikasi_Dampingan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});