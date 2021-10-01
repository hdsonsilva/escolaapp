document.addEventListener('deviceready', function () {
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
    
    var notificationOpenedCallback = function(jsonData) {
       
       //alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    alert('Iniciando o push 2');
	    // Set your iOS Settings
		var iosSettings = {};
		iosSettings["kOSSettingsKeyAutoPrompt"] = false;
		iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
	    window.plugins.OneSignal
	      .startInit(localStorage.getItem('idonesignal'))
	      .handleNotificationOpened(notificationOpenedCallback  )
	      .iOSSettings(iosSettings)
	      .endInit();

    alert('Finalizando o push 2');
}, false);