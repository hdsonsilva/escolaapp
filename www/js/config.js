var server1 = 'https://adx.doctum.edu.br/adx/unidades/';
var server = "https://adx.doctum.edu.br/adx/unidades/";

//URL AUTENTICACAO
var url_auth =  'fer/apitoken/cria_token.php';

var server_action = server + 'testeretorno.php';

var idonesignal = "4c03d205-c832-43ba-b816-c850b8773f04";
var debug = 1 ;

var servicos = new Array();


var controle_mensagem_atualizar = 1;

localStorage.setItem('app_timeverify_auth', 60000);
localStorage.setItem('idonesignal', idonesignal);
localStorage.setItem('periodoletivo', '2020');