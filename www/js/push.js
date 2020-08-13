///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        

        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);
      
   
          var notificationOpenedCallback = function(jsonData) {
           
              ons.notification.alert(JSON.stringify(jsonData));

            };

          // Set your iOS Settings
          var iosSettings = {};
          iosSettings["kOSSettingsKeyAutoPrompt"] = false;
          iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;


          if(localStorage.getItem('usuarios_salvos')){
            var usuarios ;
            usuarios = JSON.parse(localStorage.getItem('usuarios_salvos'));
              for(i in usuarios){

                window.plugins.OneSignal
                  .startInit(localStorage.getItem('idonesignal'))
                  .handleNotificationOpened(notificationOpenedCallback  )
                  .iOSSettings(iosSettings)
                  .endInit();


                window.plugins.OneSignal.sendTag("user", localStorage.getItem('unidade')+(usuarios[i]['usuario']) );
              }
            
          }

}, false);