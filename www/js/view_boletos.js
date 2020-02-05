function view_boletos(retorno){
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
        conteudo_lista += "<ons-card>Parcela "+(retorno[i]['Parcela'])+".::. Vencimento "+(retorno[i]['Vencimento']);
        conteudo_lista += "<br>Emissao:" + retorno[i]['Emissao'];
        conteudo_lista += "<br>Valor:" + retorno[i]['Valor Emitido'];
        conteudo_lista += "<br>Pagamento:" + (retorno[i]['Pagamento'] == null ? "" : retorno[i]['Pagamento']);
        conteudo_lista += "</ons-card>";
    }

    $('#pageFinanceiroList').html(conteudo_lista);
}
