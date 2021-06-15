///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        

        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);
      
   
          var notificationOpenedCallback = function(jsonData) {
              
              //ons.notification.alert(jsonData.notification.payload.additionalData.dados.tiposolicitacao );
              var abba = jsonData.notification.payload.additionalData.dados.app_tab ;

              /*Verificando se tem usuario cadastrado para logar e direcionar a aba certa*/
              if(localStorage.getItem('usuarios_salvos')){
                usuarios = JSON.parse(localStorage.getItem('usuarios_salvos'));
                buscarDadosUsuario(usuarios[0]['codigo']);
                //Loga no sistema
                auth_check = 0 ;
                /*Tentando logar usuario*/
                login(localStorage.getItem('login_username'),localStorage.getItem('login_password'), abba, localStorage.getItem('login_unidade'),  localStorage.getItem('login_nome'));

                window.location.href = 'app.html?objeto='+ abba ;
              }
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
                  .handleNotificationOpened(notificationOpenedCallback  )
                  .iOSSettings(iosSettings)
                  .endInit();


                window.plugins.OneSignal.sendTag("user", localStorage.getItem('unidade')+(usuarios[i]['usuario']) );
              }
            
          }

}, false);