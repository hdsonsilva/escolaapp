<?php
header('Content-Type: application/json');

if($_POST['action'] == 'boletos'){
    $boletos[0] = array(
        'Codigo' => '45443',
        'Parcela' => '1',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[1] = array(
        'Codigo' => '45444',
        'Parcela' => '2',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[2] = array(
        'Codigo' => '45445',
        'Parcela' => '3',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[3] = array(
        'Codigo' => '45445',
        'Parcela' => '4',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[4] = array(
        'Codigo' => '45445',
        'Parcela' => '5',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[5] = array(
        'Codigo' => '45445',
        'Parcela' => '6',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    echo json_encode(  $boletos  );
}

if($_POST['action'] == 'bilhetes'){
    $bilhete[0] = array(
        'Data' => '01/02/2020',
        'Titulo' => 'Sejam Bem vindos',
        'Mensagem' => 'A Escolar Liber agradece a você por ter nos escolhuido.<br>Fique tranquilo, aqui seu filho será muito bem cuidado.'
    );

    echo json_encode( $bilhete);
}

if($_POST['action'] == 'agenda'){
    $bilhete[0] = array(
        'Data' => '01/02/2020',
        
        'Mensagem' => "Seu filho hoje comeu: <br>Arroz: comeu bem<br>Feijão: comeu bem.<br>Iogurte: Comeu bem.<br><br>Fez cocô direitinho.<br><br><img src='https://www.designerd.com.br/wp-content/uploads/2019/04/imagens-blogs-chamar-atencao-publico-3.jpg' width='100%'> Aprendeu a usar o piniquinho para fazer xixi."
    );
    $bilhete[1] = array(
        'Data' => '31/01/2020',
        
        'Mensagem' => "Seu filho hoje comeu: <br>Arroz: comeu bem<br>Feijão: comeu bem.<br>Iogurte: Comeu bem.<br><br>Fez cocô direitinho.<br><br> Aprendeu a usar o piniquinho para fazer xixi."
    );
    echo json_encode( $bilhete);
}

?>