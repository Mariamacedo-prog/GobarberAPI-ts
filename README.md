# Recuperação de Senha

**RF / Requisitos Funcionais!**
-O usuario deve poder recuperar sua senha informando o seu e-mail;
-O usuario deve receber um e-mail com instruções de como recuperar sua senha;
-O usuario deve poder resetar sua senha;

**RNF / Requisitos Não Funcionais!**
-Utilizar Mailtrap para testar envio em ambiente de Desenvolvimento.
-Utilizar Amazon SES para envios de produção.
-Envio de e-mails deve acontecer em segundo plano (background).

**RN / Regras de negocio!**
-O link enviado por e-mail paa resetar a senha deve durar no máximo 2 horas;
-O usuario precisar confirmar a nova senha ao resetar a senha;

# Atualização do perfil

**RF / Requisitos Funcionais!**
-O usuario deve poder atualizar seu nome, email e senha;

**RNF / Requisitos Não Funcionais!**

**RN / Regras de negocio!**
-O usuario não pode alterar seu e-mail para email que já esteja sendo utilizado;
-Para atualizar a senha, deve informar a senha antiga;
-Para atualizar a senha, deve confirmar a nova senha;

# Painel do prestador

**RF / Requisitos Funcionais!**
-O usuario deve poder listar seus agendamentos de um dia específico;
-O prestador deve receber uma notificação sempre que houver um novo agendamento;
-O prestador deve poder visualizar as notificações não lidas.

**RNF / Requisitos Não Funcionais!**
-Os agendamentos do prestador no dia, devem ser armazenados em Cash.
-As notificações do prestador devem ser armazenadas no MongoDB;
-As notificações do prestador devem ser enviadas em tempo-real utilizando o Socket.io;

**RN / Regras de negocio!**
-A notificação deve ter um Status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF / Requisitos Funcionais!**
-O usuario deve poder listar todos prestadores de serviços cadastrados;
-O usuario deve poder listar os dias de um mês com pelo menos um horários disponíveis de um prestador;
-O usuario deve poder listar horarios disponiveis de um dia específico de um pretador;
-Usuario deve poder realizar um novo agendamento com prestador.

**RNF / Requisitos Não Funcionais!**
-A listagem de prestadores deve ser armazenados em cache;

**RN / Regras de negocio!**
-Cada agendamento deve durar 1 hora;
-Os agendamentos devem estar disponíveis entre 8h as 18h (primeiro as 8h ultimo as 17h);
-Usuario não pode agendar em um horário já ocupado;
-Usuario não pode agendar em um horário que já passou;
-Usuario não pode agendar consigo mesmo;
