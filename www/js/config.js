var server1 = 'https://financeiro.doctum.edu.br/sicof/webservice/';
var server = "http://localhost/escolaapp/";

var server_auth = server1 + 'logintoken.php';
var server_action = server + 'testeretorno.php';

var idonesignal = "e259628e-f324-44a2-a029-09d47774ef6d";
var debug = 0 ; 


var controle_mensagem_atualizar = 1;

localStorage.setItem('app_timeverify_auth', 5000);
localStorage.setItem('server_auth', server_auth);
localStorage.setItem('idonesignal', idonesignal);