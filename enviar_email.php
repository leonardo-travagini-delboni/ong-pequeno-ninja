<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Configuracoes de recebimento de FORMS:
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $whatsapp = $_POST["whatsapp"];
    $mensagem = $_POST["mensagem"];

    // Codigo para envio de email:
    $to = "leonardodelboni@gmail.com, l172102@dac.unicamp.br";
    $subject = "Formulário de Website - ONG PEQUENO NINJA";
    $body = "Nome: {$nome}\nE-mail: {$email}\nTelefone: {$telefone}\nWhatsApp: {$whatsapp}\nMensagem: {$mensagem}";

    $headers = "From: {$email}" . "\r\n" .
               "Reply-To: {$email}" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensagem enviada com sucesso!');</script>";
        header("Location: index.html");
        exit();
    } else {
        echo "Ocorreu um erro ao enviar a mensagem.";
    }
}
?>