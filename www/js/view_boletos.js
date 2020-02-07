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
        conteudo_lista += "<ons-card><font class='font_tam1'>Parcela "+(retorno[i]['Parcela'])+".::. Vencimento "+(retorno[i]['Vencimento'])+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Emissao:" + retorno[i]['Emissao']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Valor:" + retorno[i]['Valor Emitido']+"</font>";
        conteudo_lista += "<br><font class='font_tam2'>Pagamento:" + (retorno[i]['Pagamento'] == null ? "" : retorno[i]['Pagamento'])+"</font>";
        conteudo_lista += "<div class='right'; style='text-align:right;'><ons-button><ons-icon icon='fa-barcode'></ons-icon></ons-button> <ons-button ><ons-icon icon='fa-print'></ons-icon></ons-button></div>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageFinanceiroList').html(conteudo_lista);
}
