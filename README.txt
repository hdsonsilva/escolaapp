Instalar os seguintes plugins:
com-sarriaroman-photoviewer 1.2.4 "PhotoViewer"
cordova-plugin-android-permissions 1.1.2 "Permissions"
cordova-plugin-camera-preview 0.12.3 "cordova-plugin-camera-preview"
cordova-plugin-camera 5.0.3 "Camera"
cordova-plugin-geolocation 4.1.0 "Geolocation"
cordova-plugin-inappbrowser 5.0.0 "InAppBrowser"
cordova-plugin-splashscreen 6.0.0 "Splashscreen"
onesignal-cordova-plugin 2.11.4 "OneSignal Push Notifications"
cordova-plugin-whitelist (esse dá erro no cordova 10 no android. Deve ser usado apenas no ios)
cordova-plugin-device

No MACOS instalar o plugin abaixo para funcionar o diretorio e o app achar os arquivos de paginas. O outro é para acesso à internet
cordova plugin add https://github.com/globules-io/cordova-plugin-ios-xhr
cordova plugin add cordova-plugin-whitelist

Como resolver problemas de PODS:
Geralmente é so abrir o xcode e configurar o PODS do onesignal para usar ios 11
abrir o arquivo .wcworkspace
Outro erro comum é falar que nao encontrou pods. Nesse caso entrar no workspace e em build settings procurar a opção "Build Active Architecture Only" e colocar  Yes
