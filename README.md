<h1 align="center">Desafio BeMobile</h1>

<div align="center">
  <img src="assets/gifs/home.gif" width="200px">
  <img src="assets/gifs/name.gif" width="200px">
  <img src="assets/gifs/stack.gif" width="200px">
  <img src="assets/gifs/phone.gif" width="200px">
</div>

<h1 align="center">:sparkles: Tecnologias</h1>
<p align="center">Esse projeto foi desenvolvido com</h1>
<br />

<p align="center"><a href="https://reactnative.dev/">React Native</a></p>
<p align="center"><a href="https://www.typescriptlang.org/">Typescript</a></p>
<p align="center"><a href="https://expo.io/">Expo</a></p>
<br />

<h1 align="center">:computer: Sobre o Projeto</h1>
<p align="center">Projeto desenvolvido com o intuito de mostrar e gerenciar usuários cadastrados em um banco de dados. Podendo pesquisá-los por <strong>Nome</strong>,
<strong>Stack</strong> e <strong>Telefone</strong></p>
<br />

<h1 align="center">:ballot_box_with_check: Layout</h1>
<p align="center">Caso você queira ver o layout desse projeto, basta clicar <a href="https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste---Be-mobile?node-id=1%3A3">aqui</a> para ir ao <strong>figma</strong> e observar com mais detalhes :)</p>
<br />

<h1 align="center">:rocket: Executando o Projeto</h1>
<p align="center">Comece clonando o repositório para sua máquina, usando</p>
<pre><strong>$ git clone https://github.com/marlleyck/desafio-BeMobile/tree/master</strong></pre>

<p align="center">Após isso, vá até a pasta do projeto</p>
<pre><strong>$ cd desafio-BeMobile</strong></pre>

<p align="center">Instale todas as dependências, usando o seu gerenciador de pacotes preferido</p>
<pre><strong>$ npm install</strong></pre>
<pre><strong>$ yarn</strong></pre>
<pre><strong>$ expo install</strong></pre>

<p align="center">Para quem vem do ReactJs pode não saber, mas o React Native não reconhece o famoso <strong>localhost</strong>, então, temos que configurar nosso json-server com o nosso IPLocal e a porta de sua preferência. Para isso, vá até <strong>'src/services/api.js'</strong> e mude o <strong>'IP'</strong> para seu IPLocal</p>
<p align="center">Não sabe qual seu IP Local? Tudo bem!</p>
<pre>Windows: <strong>$ ipconfig</strong></pre>
<pre>Linux: <strong>$ hostname -I</strong></pre>
<pre>MacOs: <strong>$ ipconfig getifaddr en0</strong></pre>

<p align="center">Após mudar o <strong>'IP'</strong> em <strong>'src/services/api.js'</strong>, vá até <strong>'package.json'</strong>, depois procure na área <strong>'scripts'</strong> -> <strong>'server'</strong> e troque para o seu IpLocal lá também</p>

<br />

<p align="center">Por fim, basta iniciar o servidor, usando</p>
<pre><strong>$ npm run server</strong></pre>
<pre><strong>$ yarn server</strong></pre>
