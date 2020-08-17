///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        

        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);
      
   
          var notificationOpenedCallback = function(jsonData) {
              
              ons.notification.alert(jsonData.notification.payload.message);
              /*
               //Teste de como pegar dados s no push
        //localStorage.setItem('pushInfo',jsonData.notification.payload.additionalData.sessao);

          document.querySelector('#myNavigator').pushPage('html/details_task.html',
            {
              animation: 'lift',
              data: {
                element:  jsonData.notification.payload.additionalData
              }
            }
          );*/

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
                  . (notificationOpenedCallback  )
                  .iOSSettings(iosSettings)
                  .endInit();


                window.plugins.OneSignal.sendTag("user", localStorage.getItem('unidade')+(usuarios[i]['usuario']) );
              }
            
          }

}, false);