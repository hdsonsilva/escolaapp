function view_home(retornos){
    let img = "";
    let tabela ; 

   

    //Alterando título do app
    $('#tituloApp').html(appName);

    //if(sistemaoperacional() != 'Ios'){
        img = localStorage.getItem('imagem') != 'undefined' ? "<img class='imagem' height='70px' src='"+localStorage.getItem('imagem')+"'>" : "";
    //}
    
    if(img != ""){
        tabela  = "<div style='text-align:center;width:100%'><table width='100%'><tr>";
        tabela += "<td width='20%' height='70px' align='right'>"+img+"&nbsp;</td>";
        tabela += "<td width='80%' align='left'>&nbsp;<font class='font_notastam1'>"+localStorage.getItem("login_nome")+"</font></td>";
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
    let imagembusca = '';
 if(retornos['murais']){     
    //Preenchendo a lista com cards
    for(i  in retorno){

        conteudo_lista += "<ons-card "+(retorno[i]['url_destino'] ? "class='clicavelhome' valor='"+(retorno[i]['url_destino'])+"'" : (retorno[i]['arquivo'] ? "class='imagemview' imagem='"+(retorno[i]['arquivo'])+"'" : " ")  )+"><font class='font_tam1'><span class='notification notification--material baloes_blue'>&nbsp;&nbsp;"+(retorno[i]['data_inicio'])+"&nbsp;&nbsp;</span>  <font class='font_tam3'>"+(retorno[i]['assunto'])+"</font> </font>";
        conteudo_lista += "<br><br>";
        conteudo_lista += "<font class='font_text'>"+(retorno[i]['arquivo'] ? "<div id='notimg_"+i+"'><img width='100%' pos='"+i+"' src='./img/carregando.gif'></div><div id='myimg_"+i+"' ><img width='1%'  class='imagens' pos='"+i+"' src='"+(retorno[i]['arquivo']).replace("http://", "https://")+"' loading='lazy'></div><br>" : "")+quebraLinha(retorno[i]['mensagem'])+"</font>";
        conteudo_lista += "</ons-card>";
        imagembusca = retorno[i]['arquivo'] ? retorno[i]['arquivo'] : imagembusca ;
    }



    $('#homePageList').html(conteudo_lista);

    $('.clicavelhome').click(function(){
        
        abrirURL($(this).attr('valor'), 1);
    });
    //Fazendo aparecer as imagens
    
    
        $('body').off('load', '.imagens');
        $('.imagens').on('load',function(){
            let este = $(this);
            let pos = $(this).attr('pos');
            //alert('ok');
            //alert(pos);
            $('#notimg_'+pos).hide();
            este.width('100%');
            $('#myimg_'+pos).show();
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
