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
        conteudo_lista += "<ons-card><font class='font_tam1'>"+(retorno[i]['Titulo'])+".::. "+(retorno[i]['Data'])+"</font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+retorno[i]['Mensagem']+"</font>";
        conteudo_lista += "<br>";
        conteudo_lista += "<div class='right'; style='text-align:right;'><ons-button class='botaocheck_bilhete' "+(retorno[i]['Lido'] == 'Sim' ? "modifier='light'" : "")+"><ons-icon icon='"+(retorno[i]['Lido'] == 'Sim' ? "fa-check" : "fa-check")+"'></ons-icon></ons-button></div>";
        conteudo_lista += "</ons-card>";
    }

    $('#pageBilhetesList').html(conteudo_lista);
}
