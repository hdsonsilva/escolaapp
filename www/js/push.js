///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        

        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);
      
   
          var usuarios ;
          if(localStorage.getItem('usuarios_salvos')){
            usuarios = JSON.parse(localStorage.getItem('usuarios_salvos'));
              for(i in usuarios){

                window.plugins.OneSignal
                  .startInit(localStorage.getItem('idonesignal'))
                  .handleNotificationOpened(notificationOpenedCallback  )
                  .endInit();


                window.plugins.OneSignal.sendTag("user", localStorage.getItem('unidade')+(usuarios[i]['usuario']) );
              }
            
          }

          ons.notification.alert('depois');
}, false);