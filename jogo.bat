@echo off
rem Abre o terminal, navega até a pasta do projeto e executa os comandos para iniciar o React.

rem Caminho para o projeto React
set PROJECT_PATH=C:\Users\vinic\Documents\GitHub\jogo-memoria-libras\

rem Navega até a pasta do projeto
cd /d %PROJECT_PATH%


echo Iniciando o projeto...
npm start

rem Mantém o terminal aberto após rodar o comando
pause