var server1 = 'https://adx.doctum.edu.br/adx/unidades/';
var server =  "https://adx.doctum.edu.br/adx/unidades/";

//Nome do Aplicativo
var appName = 'Agenda Escola Liber' ;

//URL AUTENTICACAO
var url_auth =  'fer/apitoken/cria_token.php';
var url_upload_foto = 'alunos/api/embarque/atualiza-foto' ;

var server_action = server + 'testeretorno.php';

var idonesignal = "4c03d205-c832-43ba-b816-c850b8773f04";
var debug = 0 ;

var controle_mensagem_atualizar = 1;

//Complemento para ser usado nos servicos chamados via GET
var complemento = '';

//Controle de paginacao agenda
var agendacontrole = 0 ;

//Controle de paginacao recados
var recadocontrole = 0 ;
var recadotipo = 'nao-lidos';

localStorage.setItem('app_timeverify_auth', 180000);
localStorage.setItem('idonesignal', idonesignal);

var Xmas = new Date();
var year = Xmas.getFullYear(); //Começamos sempre com o ano atual


if(!localStorage.getItem('periodoletivo')){
	localStorage.setItem('periodoletivo', year);
}