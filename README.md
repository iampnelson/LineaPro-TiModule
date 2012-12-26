LineaPro-TiModule
===========================================

LineaPro Titanium module designed for iOS 6.x and Ti SDK 3.x

RELEASE NOTES
-------------

	2012-12-26 - LineaPro-TiModule version 3.0
	-------------------------------------------
		- Barcode Support
			- Barcode and barcode type is returned.
		- Magnetic Card Support
			- Raw data is returned for tracks 1,2 and 3.
		- Connection Status Support
			- Connected/disconnected Linea device.
		- Battery Level Support
			- Display current battery level of Linea device.

GET STARTED
-----------

Please reference the LineaPRO_Module_Ti_3.0_iOS_6.0_Example.

NOTE: You will see the example application has an info.plist.  This is needed for the Linea device to work.  If you open this file and scroll to the bottom, you will see the following lines:
	<key>UISupportedExternalAccessoryProtocols</key>
	<array>
	    <string>com.datecs.linea.pro.msr</string>
	    <string>com.datecs.linea.pro.bar</string>
	</array>
Your Linea device WILL NOT work unless you have specified the above lines in your info.plist.


