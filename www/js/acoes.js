function buscaAcoes(acao,dados, tipo){
    
    var acao_new = acao ;    
    var unid = localStorage.getItem('unidade')+"/" ;
    var url ;
    
    url = server+unid+acao_new ;
    /*Tratando dadosadicionais  enviados na rota */
   if(complemento && complemento != ''){
        url += "/"+complemento;
   }
   /*Resetando complemento*/
   complemento = '';

    $.ajax({
        type: tipo,
        dataType: 'json',
        url: url,
        cache: false, //Nao fazer cache
        timeout: 20000, //10 segundos
        data: dados,
        dataType: 'json',
        async: true, //Esperar retorno para continuar codigo
        beforeSend: function (e) {
            //Colocando para transformar e tratar o resultado todo como um resultado iso
            //e.overrideMimeType("text/plain;charset=iso-8859-1");
            //Sempre exive modal de busca de dados
            showModal('show');
        },
        success: function (ret) {
            if(debug == 1){
                console.log(ret);
            }
            showModal('hide');
            if (ret) {
                retornoAcao(acao,ret) ;
            } else {
                //$('#pending-list').html("<ons-list id='listaNotifications'><ons-list-item modifier='nodivider'><label class='center' for='inner-highlight-input'><ons-icon icon='fa-thumbs-down'></ons-icon>Nenhuma tarefa localizada</label></ons-list-item></ons-list-item></ons-list>");
                retornoAcao(acao,false) ;
            }
            controle_mensagem_atualizar = 0;
        },
        error: function (e, erro) {

            showModal('hide');
            //
            ons.notification.toast('.' + acao, {timeout: 1000});
            retornoAcao(acao,false) ;
        }
        
    });
    

}
/*
Funcao para tratar retorno de requisicao assincrona e realizar ação correta
 */
function retornoAcao(acao, retorno){
   // ons.notification.alert(retorno);
   
    if(acao == 'alunos/api/financeiro/boletos') {
        view_boletos(retorno);
    }
    else if(acao == 'alunos/api/mural/ver-recados'){
        
        view_bilhetes(retorno);
    }
    else if(acao == 'alunos/api/mural/ver-agenda'){
        view_agenda(retorno);
    }
    else if(acao == 'alunos/api/horario'){
        view_horario(retorno);
    }
    else if(acao == 'alunos/api/mural/ver-avisos'){
     view_home(retorno);   
    }
    else if(acao == 'alunos/api/notas/ver-notas'){
     view_academico(retorno);   
    }
    else if(acao == 'alunos/api/mural/historico-recados'){
     view_recadoenviado(retorno);   
    }

    else if(acao.substring(0,28) == 'alunos/api/notas/ver-materia'){
        
     view_detalhesnotas(retorno);   
    }


}