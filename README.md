

# Desafio 2 - Semana 08

## 📋 Descrição do Projeto

Este projeto foi desenvolvido para o desafio 3 - semana 12 da trilha PB Front-end (React) da Compass.Uol, onde o objetivo foi recriar um websie utilizando **React**, **TypeScript**, **TailwindCSS**. O foco principal é a criação de uma aplicação web responsiva e funcional, conforme as especificações fornecidas.

## 💻 Tecnologias Utilizadas
- **React**
- **TypeScript**
- **TailwindCSS**
- **Clerk** (para autenticação de usuários)
- **React Router** (para criação de rotas - necessário proteger as rotas)
- **JSON Server** (para simulação de banco de dados)
- **Splide** para Carousel.

## 📚 Requisitos obrigatórios do Projeto

- O carrinho deve ser criado com Redux ou Context API.
- Validações de todos formulários feitas manualmente (sem bibliotecas).
- Responsividade.
- Uso de loading spinners para requisições assíncronas.
- Utilize Clerk para lidar com a autenticação do usuário.
- React Router para criação das rotas, sendo que é necessário proteger as rotas.
- JSON Server para simular um database para controlar os produtos da loja.
- Aplicar loading spinners para mostrar que a página está carregando a cada requisição assíncrona.

###  Descrição de Página/Componente


### Header
- Os botões 'Home', 'Shop' e 'Contact' encaminham para suas respectivas páginas.
- O ícone de redireciona para a tela de Login.
- O ícone de carrinho abre um overlay com os produtos que foram adicionados no carrinho.
- Todas as páginas possuem Header.


### Footer
- Os ícones de ‘Facebook’, ‘Instagram’, ‘Twitter’ e ‘LinkedIn’ são **clicáveis**, e direcionam para a página inicial de cada rede social.
- Contém o input para preenchimento do e-mail.
- Todas as páginas possuem Footer.


### Carrinho
- Na página de carrinho o usuário pode remover todos os produtos, independente da quantidade, ao clicar no ícone de lixeira.
- Ao clicar no botão de ‘Check Out’, o usuário PRECISA estar logado para fazer o redirecionamento para a página de Check Out, essa rota específica deve estar protegida.
- Ao clicar no botão de carrinho deve redirecionar para a página de carrinho.

### Produtos
- Os produtos são populados através de dados vindo do banco de dados.
- Cada produto, ao ser 'clicado' em seu card, o usuário é redirecionado para a página ProductPage


### HomePage
- Possui uma seção com a lista de produtos, sendo possível adicioná-los ao carrinho.
- Possui uma seção de Carousel, onde o usuário pode deslizar imagems para o lado.
- As demais seções são apenas de layout.


### ShopPage
- Possui uma seção com a lista de produtos, sendo possível adicioná-los ao carrinho e também, filtrá-los de acordo com o título ou preço, de forma crescente ou decrescente.
- Os produtos dispostos nessa página contém paginação.


### ProductPage
- Possui informações detalhadas sobre o produto previamente selecionado.
- O usuário pode selecionar especificações para o produto.
- O usuário pode adicionar ao carrinho o produto.


### CartPage
- Possui informações detalhadas sobre os produtos previamente adicionados ao carrinho.
- É possível alterar a quantidade ou deletar os produtos.
- Tem um botão de Checkout para redirecionar o usuário para a página de Checkout.


### CheckoutPage
- O usuário pode cadastrar seus dados no forms.
- Ao digitar o CEP, será requisitada a API ViaCEP e preencherá alguns campos automaticamente.
- É possível visualizar o carrinho antes de finalizar a compra.


### ContactPage
- Contém informações sobre os dados do site e ao lado contém forms para ser preenchido com os dados do usuário.



### LoginPage
- Possui form para o usuário preencher seus dados de e-mail e senha.
- Ao clicar no botão 'Enter', haverá uma tentativa de Login.
- Caso a autenticação seja realizada com sucesso, o usuário será direcionado para a página Checkout.


### Rotas
- Se o usuário clicar no ícone de usuário do Header, será encaminhado para a LoginPage, e se lá for autenticado com sucesso, ele será redirecionado para a HomePage.

- Se o usuário clicar no botão de Checkout do carrinho, será encaminhado para a LoginPage, e se lá for autenticado com sucesso, ele será redirecionado para a CheckoutPage.




## 🔄 Funcionalidades

- **Autenticação de Usuário**: Utilizando Clerk para login e autenticação.
- **Gerenciamento de Produtos**: Adição, edição, e remoção de produtos em tempo real.
- **Responsividade**: Layout adaptado para múltiplos dispositivos.
- **Validações Customizadas**: Implementação de validações de formulários.
  

 


## 🛠 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/thiago-rgomes/desafio3-semana12-tirex.git
   ```

2. Instale as dependências:
   ```bash
   npm i  <============ a atualizar
   ```  

3. Inicie a aplicação:
   ```bash
   npm start
   ```  

