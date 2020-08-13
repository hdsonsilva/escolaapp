///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);

        // Enable to debug issues.
        // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
        
        

        var dadosnotificacao = jsonData.notification.payload.additionalData ;
          if(dadosnotificacao.appaba){
            window.location.href = 'app.html?objeto='+dadosnotificacao.appaba ;
          }
   
          if(localStorage.getItem('usuarios_salvos')){
            var usuarios = localStorage.getItem('usuarios_salvos') ;
            for(i in usuarios){
              window.plugins.OneSignal
                .startInit(localStorage.getItem('idonesignal'))
                .handleNotificationOpened(notificationOpenedCallback  )
                .endInit();

              window.plugins.OneSignal.sendTag("user", localStorage.getItem('unidade')+usuarios[i]['codigo'] );
            }
          }
}, false);