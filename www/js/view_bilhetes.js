function view_bilhetes(retorno){
    var i ;
    var conteudo_lista = '';
    for(i  in retorno){
        //ons.notification.alert(retorno[i]['Parcela']);
 /*       conteudo_lista += "<ons-list-header>Parcela "+(retorno[i]['Parcela'])+" Vencimento "+(retorno[i]['Vencimento'])+"</ons-list-header>";
        conteudo_lista += "    <ons-list-item expandable>";
        conteudo_lista += "  Detalhar";
        conteudo_lista += "    <div class='expandable-content'></div>";
        conteudo_lista += "    </ons-list-item>";
*/
        conteudo_lista += "<ons-card>"+(retorno[i]['Titulo'])+".::. "+(retorno[i]['Data']);
        conteudo_lista += "<br><br>";
        conteudo_lista += retorno[i]['Mensagem'];
        conteudo_lista += "</ons-card>";
    }

    $('#pageBilhetesList').html(conteudo_lista);
}
