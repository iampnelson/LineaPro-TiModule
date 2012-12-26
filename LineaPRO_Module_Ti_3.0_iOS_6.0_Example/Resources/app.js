/**
 * LineaPRO_Module_Ti_3.0_iOS_6.0_Example
 * v. 3.0
 */

var win = Ti.UI.createWindow({backgroundColor:'#FFF'}),

	barcodeLabel = Ti.UI.createLabel({
		text		: 'Scan something...',
		height		: 50,
		width		: Ti.UI.FILL,
		color		: '#336699',
		font		: {fontSize:22},
		top			: 0,
		left		: 0,
		textAlign	: 'center'
	}),

	barcodeTypeLabel = Ti.UI.createLabel({
		text		: '',
		height		: 50,
		width		: Ti.UI.FILL,
		color		: '#333',
		font		: {fontSize:22},
		top			: 50,
		left		: 0,
		textAlign	: 'center'
	}),
	
	batteryLevelLabel = Ti.UI.createLabel({
		text		: '',
		height		: 50,
		width		: Ti.UI.FILL,
		color		: '#336699',
		font		: {fontSize:22},
		top			: 100,
		left		: 0,
		textAlign	: 'center'
	}),
	
	connectionStateLabel = Ti.UI.createLabel({
		text		: '',
		height		: 50,
		width		: Ti.UI.FILL,
		color		: '#333',
		font		: {fontSize:22},
		top			: 150,
		left		: 0,
		textAlign	: 'center'
	}),
	
	magneticCardDataLabel = Ti.UI.createLabel({
		text		: '',
		height		: 50,
		width		: Ti.UI.FILL,
		color		: '#333',
		font		: {fontSize:12},
		top			: 200,
		left		: 0,
		textAlign	: 'center'
	});
	
	win.add(barcodeLabel);
	win.add(barcodeTypeLabel);
	win.add(batteryLevelLabel);
	win.add(connectionStateLabel);
	win.add(magneticCardDataLabel);
	
	win.open();
	
var linea = require('linea');

	/**
		 Notification sent when barcode is successfuly read.
		 @param barcode - string containing barcode data
		 @param barcodeType - string containing barcode type
	 **/
	linea.addEventListener('scannedBarcode', function(e) { 
		barcodeLabel.text 		= e.barcode;
		barcodeTypeLabel.text 	= e.barcodeType;
	});
	
	/**
		 Notification sent when magnetic card is successfuly read
		 @param track1 - data contained in track 1 of the magnetic card or nil
		 @param track2 - data contained in track 2 of the magnetic card or nil
		 @param track3 - data contained in track 3 of the magnetic card or nil
	 **/
	linea.addEventListener('magneticCardSwiped', function(e) {
		Ti.API.info(e);
		magneticCardDataLabel.text = e.track1 + e.track2;
		if (e.track3) {
			magneticCardDataLabel.text = e.track1 + e.track2 + e.track3;
		}
	});

batteryLevelLabel.text 		= linea.checkBatteryLevel() ? linea.checkBatteryLevel() : 'No battery info.';
connectionStateLabel.text 	= linea.checkConnectionState() ? linea.checkConnectionState() : 'No connection state.';

setInterval(function() {
	batteryLevelLabel.text 		= linea.checkBatteryLevel() ? linea.checkBatteryLevel() : 'No battery info.';
	connectionStateLabel.text 	= linea.checkConnectionState() ? linea.checkConnectionState() : 'No connection state.';
}, 1000);
