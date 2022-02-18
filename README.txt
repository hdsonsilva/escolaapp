Instalar os seguintes plugins:
com-sarriaroman-photoviewer 1.2.4 "PhotoViewer"
cordova-plugin-android-permissions 1.1.2 "Permissions" (somente no android)
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
Versão do plugin onesignal no IOS tem que ser 2.11.4
Apos instalar abrir o workspace e configurar no xcode, a versao do Pods, de 8 para 10
Ajustar os dados de desenvolvedor
ajustar o ID do app


Como resolver problemas de PODS:
Geralmente é so abrir o xcode e configurar o PODS do onesignal para usar ios 10:
Selecione a Pasta Pods no menu à esquerda, procure na sessão "build settings" e ache onde pede versao 8 ou 4.3 e altere para 10

Se ele der erro no Pods_nomedoproojeto: 
Selecione a Pasta com o nome do projeto no menu à esquerda. Na sessão "build settings" procure bem embaixo o termo Pods_nomedoprojeto e delete essa linha

Outro erro comum é falar que nao encontrou pods. Nesse caso entrar no workspace e em build settings procurar a opção "Build Active Architecture Only" e colocar  Yes
