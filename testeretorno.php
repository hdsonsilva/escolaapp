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
        'Parcela' => '3',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[4] = array(
        'Codigo' => '45445',
        'Parcela' => '3',
        'Valor Emitido' => '100.00',
        'Valor Pago' => NULL,
        'Emissao' => '10/10/2019',
        'Vencimento' => '10/11/2019',
        'Pagamento' => NULL
    );
    $boletos[5] = array(
        'Codigo' => '45445',
        'Parcela' => '3',
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

?>