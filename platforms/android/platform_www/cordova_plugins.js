cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-camera-preview.CameraPreview",
      "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
      "pluginId": "cordova-plugin-camera-preview",
      "clobbers": [
        "CameraPreview"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-pdf-viewer.PDFViewer",
      "file": "plugins/cordova-plugin-pdf-viewer/www/pdfviewer.js",
      "pluginId": "cordova-plugin-pdf-viewer",
      "clobbers": [
        "PDFViewer"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "com-sarriaroman-photoviewer.PhotoViewer",
      "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
      "pluginId": "com-sarriaroman-photoviewer",
      "clobbers": [
        "PhotoViewer"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignalPlugin",
      "file": "plugins/onesignal-cordova-plugin/dist/index.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.NotificationReceivedEvent",
      "file": "plugins/onesignal-cordova-plugin/dist/NotificationReceivedEvent.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.Subscription",
      "file": "plugins/onesignal-cordova-plugin/dist/Subscription.js",
      "pluginId": "onesignal-cordova-plugin"
    },
    {
      "id": "onesignal-cordova-plugin.OSNotification",
      "file": "plugins/onesignal-cordova-plugin/dist/OSNotification.js",
      "pluginId": "onesignal-cordova-plugin"
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-app-version": "0.1.14",
    "cordova-plugin-camera-preview": "0.12.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-pdf-viewer": "0.0.1",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-statusbar": "3.0.0",
    "com-sarriaroman-photoviewer": "1.3.0",
    "onesignal-cordova-plugin": "3.3.1"
  };
});