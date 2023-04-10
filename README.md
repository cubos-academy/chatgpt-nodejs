<h1 align="center">
  <img alt="GoStack" src="https://i.imgur.com/DiyrQct.png" width="250px" />
</h1>

<h3 align="center">
  Integração do ChatGPT com o NodeJS
</h3>

<p align="center">Esse repositório trata de uma implementação da <strong>API do ChatGPT</strong> em um servidor NodeJS, realizada na 3ª edição do <strong color="#e5007b">Cubos Experience</strong>, com intuito de de apresentar o poder das IA's e como podemos usá-las em qualquer projeto.</p>


## 🖊️ Autor

- [Guido Cerqueira](https://github.com/guidocerqueira)

## 💻 Tecnologias Utilizadas

- NodeJS
- TypeScript
- Express
- Axios
- ChatGPT

## 🔥 Instruções de uso

1. Faça um clone desse repositório;

2. Entre na pasta `chatgpt-nodejs`;

3. Rode o comando `npm install` para instalar as dependências;

4. Adicione um arquivo `.env` a partir do `.env.example` e adicione seu token de autenticação da sua conta OpenAI;

```js
//.env
TOKEN_GPT=sk-abcdef...
```
5. Rode o comando `npm run dev` para inicializar o servidor em desenvolvimento;

6. Envie uma requisição com o verbo `POST` para `http://localhost:3000/question` com um objeto em JSON contendo a propriedade `question`;

```json
// POST http://localhost:3000/question
{
  "question": "Cite três dicas de como ganhar experiência como programador"
}
```

---

Feito com 💜 by Cubos Academy - [Entre para o Cubos On Demand!](https://cubos.academy/cubosondemand)
