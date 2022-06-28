function abrirPDF(url){
	var options = {
	    title: "Documento",
	    documentView : {
	        closeLabel : 'Fechar'
	    },
	    navigationView : {
	        closeLabel : 'Fechar'
	    },
	    email : {
	        enabled : true
	    },
	    print : {
	        enabled : true
	    },
	    openWith : {
	        enabled : true
	    },
	    bookmarks : {
	        enabled : true
	    },
	    search : {
	        enabled : true
	    },
	    autoClose: {
	        onPause : false
	    }
	}
	document.addEventListener('deviceready', function () {
		cordova.plugins.SitewaertsDocumentViewer.canViewDocument(url, 'application/pdf', options, onPossible, onMissingApp, onImpossible, onError);
	}, false);
}

function onPossible(){
  window.console.log('document can be shown');
  //e.g. track document usage
}

function onClose(){
  window.console.log('document closed');
  //e.g. remove temp files
}

function onShow(){
  window.console.log('document shown');
  //e.g. track document usage
}

onMissingApp

function onMissingApp(appId, installer)
{
    if(confirm("Quer instalar o app "
            + appId + " ?"))
    {
        installer();
    }
} 

function onError(error){
  window.console.log(error);
  alert
  ("Desculpe! Não consigo abrir o documento.");
}

function onImpossible(){
  window.console.log('document cannot be shown');
  //e.g. track document usage
}