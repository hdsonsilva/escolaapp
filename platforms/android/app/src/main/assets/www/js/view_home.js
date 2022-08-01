function view_home(retornos){
    let img ;
    let tabela ; 

    //Alterando título do app
    $('#tituloApp').html(appName);

    img = localStorage.getItem('login_foto') != 'undefined' ? "<img height='70px' src='"+localStorage.getItem('login_foto')+"'>" : "";
    
    if(img != ""){
        tabela  = "<div style='text-align:center;width:100%'><table width='100%'><tr>";
        tabela += "<td width='20%' height='70px' align='left'>"+img+"</td>";
        tabela += "<td width='80%' align='center'><font class='font_notastam1'>"+localStorage.getItem("login_nome")+"</font></td>";
        tabela += "</tr></table></div>";
    }
    else{
        tabela =  "<div style='text-align:center;width:100%'><table width='100%'><tr>";
        tabela += "<td width='100%' align='center'><font class='font_notastam1'>"+(localStorage.getItem("login_nome"))+"</font></td>";
        tabela += "</tr></table></div>";
    }
    

    $('#idNome').html(tabela);
    //$('#idNome').html(img+localStorage.getItem("login_nome"));

    var i ;
    var conteudo_lista = '';
     
    var retorno = retornos['murais'];
    var i ;
    var conteudo_lista = '';
    var imagem_view = '';
 if(retornos['murais']){     
    //Preenchendo a lista com cards
    for(i  in retorno){

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelhome' valor='"+(retorno[i]['url_destino'])+"'" : (retorno[i]['arquivo'] ? "class='imagemview' imagem='"+(retorno[i]['arquivo'])+"'" : " ")  )+"><font class='font_tam1'><span class='notification notification--material baloes_blue'>&nbsp;&nbsp;"+(retorno[i]['data_inicio'])+"&nbsp;&nbsp;</span>  <font class='font_tam3'>"+(retorno[i]['assunto'])+"</font> </font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<img width='100%' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"' loading='lazy'><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
        conteudo_lista += "</ons-card>";
    }


    $('#homePageList').html(conteudo_lista);

    $('.clicavelhome').click(function(){
        
        abrirURL($(this).attr('valor'), 1);
    });

    $('.imagemview').click(function(){
             
             imagem_view = $(this).attr('imagem');
            document.addEventListener('deviceready', function () {
                //PhotoViewer.show($(this).attr('url'));
               
                PhotoViewer.show(imagem_view,'',{share:true,closeButton: true,copyToReference: true, headers: '',piccasoOptions: { }});
            });
    });
}
else{
    conteudo_lista += "<ons-card><font class='font_tam1'>Sem avisos</font></ons-card>";
    $('#homePageList').html($('#homePageList').html()+conteudo_lista);
}

}
