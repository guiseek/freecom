# Contribuindo com a Livre Comunicação

Adoraríamos que você contribuísse com o projeto e ajudasse a torná-la ainda melhor do que é hoje! Como contribuidor, aqui estão as diretrizes que gostaríamos que você seguisse:

- [Código de Conduta](#coc)
- [Como posso contribuir](#how-to)
- [Dúvidas ou problemas?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)

## <a name="coc"></a> Código de Conduta

Ajude-nos a manter a comunidade Freecom aberta e inclusiva. Por favor, leia e siga nosso [Código de Conduta](CODE_OF_CONDUCT.md).

## <a name="how-to"></a> Algumas opções sobre como você pode contribuir

- [Codificando](#code)
- [Desenhando](#design)
- [Divulgando](#adversiting)
- [Organizando um evento](#events)
- [Propondo uma oficina](#workshops)
- [Fazendo um treinamento](#trainings)

## <a name="question"></a> Tem alguma dúvida ou problema?

Não abra issues para questões gerais de suporte relacionadas a tecnologia WebRTC, pois queremos manter as issues do GitHub para relatórios de bugs. Em vez disso você pode [iniciar uma discussão](https://github.com/guiseek/freecom/discussions/new) com a comunidade freecom. Caso não funcione, recomendamos o uso do [Stack Overflow](https://stackoverflow.com/questions/tagged/freecom) para fazer perguntas relacionadas ao suporte. Ao criar uma nova pergunta no Stack Overflow, certifique-se de adicionar a `freecom` tag.

Stack Overflow é um lugar muito melhor para fazer perguntas, pois:

- existem milhares de pessoas dispostas a ajudar no Stack Overflow
- perguntas e respostas ficam disponíveis para visualização pública, então sua pergunta / resposta pode ajudar alguém
- O sistema de votação do Stack Overflow garante que as melhores respostas fiquem claramente visíveis.

Para economizar o seu e o nosso tempo, fecharemos sistematicamente todos as issues que são solicitações de suporte geral e redirecionaremos as pessoas para que abram uma discussão ou para o Stack Overflow.

Se você quiser conversar sobre a questão em tempo real, entre em contato por meio de [nosso servidor Discord][discord].

## <a name="issue"></a> Encontrou um Bug?

Se você encontrar um bug no código-fonte, pode nos ajudar [abrindo uma issue](https://github.com/guiseek/freecom/discussions/new) em nosso [repositório Github][github].
Melhor ainda, você pode [enviar um Pull Request](#submit-pr) com uma correção.

## <a name="feature"></a> Sente falta de algum recurso?

Você pode _solicitar_ um novo recurso [iniciar uma discussão](https://github.com/guiseek/freecom/discussions/new) para nosso Repositório GitHub.
Se você gostaria de _implementar_ um novo recurso, considere o tamanho da alteração para determinar as etapas corretas para prosseguir:

- Para um **Novo Recurso**, primeiro inicie uma discussão e esboce sua proposta para que possa ser avaliada.
  Esse processo nos permite coordenar melhor nossos esforços, evitar a duplicação de trabalho e ajudá-lo a elaborar a mudança para que seja aceita com sucesso no projeto.

  **Nota**: Adicionar um novo tópico à documentação, ou reescrever significativamente um tópico, conta como um novo recurso.

- **Pequenos recursos** podem ser criados e diretamente [enviados como um pull request](#submit-pr).

## <a name="submit-pr"></a>

> # Em desenvolvimento
>
> Em breve teremos mais informações sobre como contribuir, legal?
>
> -- Guilherme Visi

---

## Nossa stack

| Angular                                                                       | NestJS                                                                    | TS                                                                          | JavaScript                                                                  | HTML5                                                                    | CSS3                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| ![Angular](apps/docs/samples/peer-client/src/assets/images/logos/angular.svg) | ![NestJS](apps/docs/samples/peer-client/src/assets/images/logos/nest.svg) | ![TypeScript](apps/docs/samples/peer-client/src/assets/images/logos/ts.svg) | ![JavaScript](apps/docs/samples/peer-client/src/assets/images/logos/js.svg) | ![HTML5](apps/docs/samples/peer-client/src/assets/images/logos/html.svg) | ![HTML5](docs/assets/images/logos/css.svg) |

---

## Comando usados para geração de features até agora

## Peer

### Core

```sh

nx generate @nrwl/workspace:library --name=core --directory=peer --importPath=@freecom/peer-core
```

### PeerClient

```
nx generate @nrwl/angular:library --name=client --style=scss --directory=peer --buildable --importPath=@freecom/peer-client --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature --no-interactive

```

### Player

```
nx generate @nrwl/angular:library --name=player --style=scss --directory=peer --buildable --importPath=@freecom/peer-player --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature,scope:peer --no-interactive

```

### Peer Phone

```sh
nx generate @nrwl/angular:library --name=phone --style=scss --directory=peer --buildable --importPath=@freecom/peer-phone --prefix=peer --publishable --tags=side:client,type:feat,scope:peer --no-interactive --dry-run
```

# PeerClient, docs & samples

```
nx generate @nrwl/angular:application --name=peer-client --style=scss --directory=docs/samples --linter=eslint --prefix=sample --routing --tags=side:client,type:app --no-interactive

```

# Signaling, docs & samples

```
nx generate @nrwl/nest:application --name=signaling --directory=docs/samples --frontendProject=docs-samples-peer-client --tags=side:server,type:app --no-interactive
```

## Signaling

```
nx generate @nrwl/nest:library --name=signaling --buildable --importPath=@freecom/signaling --publishable --tags=side:server,type:feature --target=es2019 --no-interactive
```

# API Gateway

```
nx generate @nrwl/nest:application --name=gateway --directory=api --tags=side:server,type:app,scope:api --no-interactive

```

## Api Gateway User

```
nx generate @nestjs/schematics:resource --name=users --sourceRoot=apps/api/gateway/src --type=ws --no-interactive

```

### Class validator & class transformer

```
npm i --save class-validator class-transformer

```

### NestJS Config

```
npm i --save @nestjs/config

```

### NestJS Mapped types

```
npm i --save @nestjs/mapped-types
```

### Mongoose

```
npm install --save @nestjs/mongoose mongoose
```

## Media

### Media Audio

```
nx generate @nrwl/angular:library --name=audio --style=scss --directory=media --buildable --importPath=@freecom/media-audio --prefix=media --publishable --tags=side:client,type:feature,scope:media --no-interactive
```

# Core

## Core entities

```sh
nx generate @nrwl/workspace:library --name=entities --directory=core --importPath=@freecom/core-entities --tags=type:util,scope:core --no-interactive
```
