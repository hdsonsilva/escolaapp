///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        

        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);
      
   
          
          if(localStorage.getItem('usuarios_salvos')){
            ons.notification.alert('enreou');

            var usuarios = localStorage.getItem('usuarios_salvos') ;
             ons.notification.alert( localStorage.getItem('idonesignal') );
            for(i in usuarios){

              ons.notification.alert( 'usu' );
              ons.notification.alert( usuarios[i]['codigo'] +'ok');
              window.plugins.OneSignal
                .startInit(localStorage.getItem('idonesignal'))
               /* .handleNotificationOpened(notificationOpenedCallback  )*/
                .endInit();

              window.plugins.OneSignal.sendTag("user", localStorage.getItem('unidade')+(usuarios[i]['codigo']) );
            }
          }

          ons.notification.alert('depois');
}, false);