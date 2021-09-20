function cadastro(unidade, usuario, senha, foto, app_){
      console.log(unidade);
        var username = usuario ;
        var password = senha ;
        var ok = 0 ;  
        
            

            $.ajax({
              type: 'POST',
              url : server1 + unidade + '/' + url_auth,
              cache: false,
              timeout: 5000,
              data: {
                'usuario'  : username,
                'senha'  : password,
                'action'    : 'LOGIN'
              },
              success:function(ret){
                //Se retornar um token valido de acesso
                if(debug == 1){
                  console.log(ret);
                }

                //Localizou token... fez login
                if(ret.token){
                  auth_check  = 1 ;
                  
                  var usuarios = new Array();
                  var confere_insercao = 0 ;
                  var codigo = 1 ;
                  var msg = '';
                  dados = localStorage.getItem('usuarios_salvos');

                  //Se já existirem usuarios salvos
                  if(dados){

                    //Salvando os ados no array usuario
                    usuarios = JSON.parse(dados);
                    
                    for(i in usuarios){
                      console.log('verificando '+usuarios[i]['usuario']);
                      if(usuarios[i]['usuario'] == username){
                        confere_insercao = 1 ;
                      }

                      codigo = usuarios[i]['codigo'];
                    
                    }
                    
                    codigo = parseInt(codigo) + 1 ;
                    

                  }

                  if(confere_insercao == 1 ){
                      
                      msg = 'Usuário já existe.';
                    
                  }
                  else{

                    //Inserindo os dados, existindo ou nao usuarios já armazados. Somente adiciona se nao existir.
                    var novo =  {
                                  'codigo' : codigo, 
                                  'nome':ret.nome_aluno,
                                  'unidade': unidade, 
                                  'usuario' : ret.ra, 
                                  'senha' : password,
                                  'foto'  : foto
                                };  
                    
                    
                    usuarios.push(novo);
                    
                    localStorage.setItem('usuarios_salvos', JSON.stringify(usuarios));

                    msg = 'Usuário inserido com sucesso.';

                    /*Inserindo foto se houver*/
                    if(foto){
                      
                      $.ajax({
                        type: 'POST',
                        url : server1 + unidade + '/' + url_upload_foto + '?apitoken='+ ret.token,
                        cache: false,
                        timeout: 20000,
                        dataType:'json',
                        async: true,
                        data: {
                          'imagem'  : foto
                        },
                        success:function(ret){
                                  $('#progress').hide();
                                  ons.notification.toast(msg, {timeout: 3000});
                                  $('#button').show();
                                  setTimeout(direcionar, 1000, './index.html');
                                }
                        });
                    }
                    //Se não houver continua  o login
                    else{
                      $('#progress').hide();
                      ons.notification.toast(msg, {timeout: 3000});
                      $('#button').show();
                      setTimeout(direcionar, 1000, './index.html');
                    }

                    
                  }
                  
                    
                  

                }
                else{
                  
                  msg = 'Erro ao efetuar login.';

                  auth_check = -1 ;

                  $('#progress').hide();
                  ons.notification.toast(msg, {timeout: 3000});
                  $('#button').show();
                
                }
                
              
              },
              error:function(e){
                $('#progress').hide();
                ons.notification.toast('Falha ao conectar. Verifique sua conexão.', {timeout: 3000});
                $('#button').show();
              },
              dataType:'json',
              async: true
          }); 

        return ok ;
}

function exibir_usuarios(usuarios){
  var item = '' ;
  var foto = '';
  item += "<ons-list-header>Usuários Cadastrados:</ons-list-header>";
  for(i in usuarios){
    
    if(usuarios[i]['foto']){
      foto = usuarios[i]['foto'];
    }
    else{
      foto = './img/quad.png';
    }
    item+= "<ons-list-item modifier='chevron' tappable class='1usuario' codigo='"+(usuarios[i]['codigo'])+"'><div class='left'><img class='list-item__thumbnail' src='"+foto+"'></div><div class='center'>";
    item+= "    <span class='list-item__title'>"+(usuarios[i]['nome'])+"</span><span class='list-item__subtitle'>"+(usuarios[i]['usuario'])+"</span></div>";
    item+= "</ons-list-item>";

  }

  $('#exibicao_usuarios').html(item);
}