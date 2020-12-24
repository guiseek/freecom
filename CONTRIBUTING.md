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

## <a name="submit-pr"></a> Diretrizes de submissão

### Enviando um problema

Antes de enviar um problema, verifique issues abertas ou recentemente fechadas, talvez já exista uma issue para o seu problema e a discussão pode informá-lo sobre as soluções alternativas disponíveis.

Queremos corrigir todos os problemas o mais rápido possível, mas antes de corrigir um bug, precisamos reproduzi-lo e confirmá-lo. Para reproduzir bugs, exigimos que você forneça uma reprodução mínima. Ter um cenário reproduzível mínimo nos dá uma riqueza de informações importantes, sem ir e voltar para você com perguntas adicionais.

Uma reprodução mínima nos permite confirmar rapidamente um bug (ou apontar um problema de codificação), bem como confirmar que estamos corrigindo o problema certo.

Infelizmente, não podemos investigar / corrigir bugs sem uma reprodução mínima, então, se não recebermos uma resposta sua, vamos encerrar um problema que não tem informações suficientes para ser reproduzido.

Você pode registrar novos problemas selecionando um dos nossos [novos modelos de problemas](https://github.com/guiseek/freecom/issues/new/choose) e preenchendo o modelo de problemas.

---

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Antes de enviar sua solicitação de pull (PR), considere as seguintes diretrizes:

1. Pesquise no [GitHub](https://github.com/huiseek/freecom/pulls) um PR aberto ou fechado relacionado ao seu envio.
   Você não quer duplicar os esforços existentes.

2. Certifique-se de que um problema descreve o problema que você está corrigindo ou documenta o design do recurso que você deseja adicionar.
   Discutir o design antecipadamente ajuda a garantir que estamos prontos para aceitar seu trabalho.

3. Faça um fork o repo guiseek/freecom.

4. Faça suas alterações em um novo branch git:

   ```shell
   git checkout -b my-fix-branch master
   ```

5. Crie seu patch, **incluindo casos de teste apropriados**.

6. Siga nossas [Regras de codificação] (#rules).

7. Faça commit de suas mudanças usando uma mensagem de commit descritiva que segue nossas [convenções de mensagem de commit](#commit).
   A adesão a essas convenções é necessária porque as notas de versão são geradas automaticamente a partir dessas mensagens.

   ```shell
   git commit --all
   ```

   > **\*Nota**: a opção de linha de comando opcional commit `-a` irá automaticamente" adicionar "e" rm "os arquivos editados.\*

8. Envie seu branch para o GitHub:

   ```shell
   git push origin my-fix-branch
   ```

9. No GitHub, envie uma solicitação de pull para `freecom:main`.

### Revisão de uma solicitação pull

A equipe Freecom reserva-se o direito de não aceitar solicitações de pull de membros da comunidade que não tenham sido bons cidadãos da comunidade. Tal comportamento inclui não seguir o [código de conduta Freecom](https://github.com/angular/code-of-conduct) e se aplica dentro ou fora dos canais gerenciados Freecom.

#### Como abordar o feedback da revisão

Se solicitarmos alterações por meio de revisões de código:

1. Faça as atualizações necessárias para o código.

2. Execute novamente os conjuntos de teste Freecom para garantir que os testes ainda estejam passando.

3. Crie um commit de correção e envie para seu repositório GitHub (isso atualizará sua solicitação de pull):

   ```shell
   git commit --all --fixup HEAD
   git push
   ```

   <!-- Para obter mais informações sobre como trabalhar com commits de correção, consulte [aqui](docs/FIXUP_COMMITS.md). -->

É isso aí! Obrigado pela sua contribuição!

##### Atualizando a mensagem de confirmação

Um revisor pode frequentemente sugerir mudanças em uma mensagem de confirmação (por exemplo, para adicionar mais contexto para uma mudança ou aderir às nossas [diretrizes de mensagem de confirmação] (# commit)).
Para atualizar a mensagem de commit do último commit em seu branch:

1. Confira sua filial:

   ```shell
   git checkout my-fix-branch
   ```

2. Corrija o último commit e modifique a mensagem de commit:

   ```shell
   git commit --amend
   ```

3. Envie para seu repositório GitHub:

   ```shell
   git push --force-with-lease
   ```

> NOTA: <br />
> Se você precisa atualizar a mensagem de commit de um commit anterior, você pode usar `git rebase` no modo interativo.
> Consulte os [documentos git](https://git-scm.com/docs/git-rebase#_interactive_mode) para obter mais detalhes.

#### Depois que sua solicitação pull for mesclada

Depois que sua solicitação pull for mesclada, você pode excluir com segurança seu branch e extrair as alterações do repositório principal (upstream):

- Exclua o branch remoto no GitHub por meio da IU da Web do GitHub ou do shell local da seguinte maneira:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Confira o branch master:

  ```shell
  git checkout master -f
  ```

- Exclua a filial local:

  ```shell
  git branch -D my-fix-branch
  ```

- Atualize seu mestre com a versão upstream mais recente:

  ```shell
  git pull --ff upstream master
  ```

## <a name="rules"></a> Regras de codificação

Para garantir a consistência em todo o código-fonte, lembre-se destas regras enquanto trabalha:

- Todos os recursos ou correções de bugs **devem ser testados** por uma ou mais especificações (testes de unidade).
- Todos os métodos de API públicos **devem ser documentados**.
- Seguimos o [Guia de estilo JavaScript do Google][guia-estilo-js], mas agrupamos todo o código em **100 caracteres**.

  Um formatador automatizado está disponível, see [DEVELOPER.md](docs/DEVELOPER.md#clang-format).

Formato de mensagem de confirmação

_Esta especificação é inspirada e substitui o [formato de mensagem de confirmação FreecomJS] [formato de mensagem de confirmação] ._

Temos regras muito precisas sobre como nossas mensagens de commit do Git devem ser formatadas.
Este formato leva ao **histórico de commits mais fácil de ler**.

Cada mensagem de confirmação consiste em um **cabeçalho**, um **corpo** e um **rodapé**.

```
<cabeçalho>
<LINHA EM BRANCO>
<body>
<LINHA EM BRANCO>
<footer>
```

O `header` é obrigatório e deve estar de acordo com o formato [Commit Message Header] (#commit-header).

O `body` é obrigatório para todos os commits exceto para aqueles do tipo" docs ".
Quando o corpo está presente, deve ter pelo menos 20 caracteres e deve estar em conformidade com o formato [Corpo da Mensagem de Confirmação](#corpo de confirmação).

O `rodapé` é opcional. O formato [Commit Message Footer] (# commit-footer) descreve para que o rodapé é usado e a estrutura que deve ter.

## Qualquer linha da mensagem de confirmação não pode ter mais de 100 caracteres.

> # Em desenvolvimento
>
> Em breve teremos mais informações sobre como contribuir, legal?
>
> -- Guilherme Visi

---

## Nossa stack

| Freecom                                                                       | NestJS                                                                    | TS                                                                          | JavaScript                                                                  | HTML5                                                                    | CSS3                                       |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------ |
| ![Freecom](apps/docs/samples/peer-client/src/assets/images/logos/angular.svg) | ![NestJS](apps/docs/samples/peer-client/src/assets/images/logos/nest.svg) | ![TypeScript](apps/docs/samples/peer-client/src/assets/images/logos/ts.svg) | ![JavaScript](apps/docs/samples/peer-client/src/assets/images/logos/js.svg) | ![HTML5](apps/docs/samples/peer-client/src/assets/images/logos/html.svg) | ![HTML5](docs/assets/images/logos/css.svg) |

---

## Comando usados para geração de features até agora

<span style="color: orange"> esses comandos já foram usados e não é necessário o uso deles na contribuição, apenas estou guardando como backup para futuros cursos / workshops </span>

## Peer

### Core

```sh

nx generate @nrwl/workspace:library --name=core --directory=peer --importPath=@freecom/peer-core
```

### PeerClient

```sh
nx generate @nrwl/angular:library --name=client --style=scss --directory=peer --buildable --importPath=@freecom/peer-client --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature --no-interactive

```

### Player

```sh
nx generate @nrwl/angular:library --name=player --style=scss --directory=peer --buildable --importPath=@freecom/peer-player --linter=eslint --prefix=peer --publishable --tags=side:client,type:feature,scope:peer --no-interactive

```

### Peer Phone

```sh
nx generate @nrwl/angular:library --name=phone --style=scss --directory=peer --buildable --importPath=@freecom/peer-phone --prefix=peer --publishable --tags=side:client,type:feat,scope:peer --no-interactive --dry-run
```

# PeerClient, docs & samples

```sh
nx generate @nrwl/angular:application --name=peer-client --style=scss --directory=docs/samples --linter=eslint --prefix=sample --routing --tags=side:client,type:app --no-interactive

```

# Signaling, docs & samples

```sh
nx generate @nrwl/nest:application --name=signaling --directory=docs/samples --frontendProject=docs-samples-peer-client --tags=side:server,type:app --no-interactive
```

## Signaling

```sh
nx generate @nrwl/nest:library --name=signaling --buildable --importPath=@freecom/signaling --publishable --tags=side:server,type:feature --target=es2019 --no-interactive
```

# API Gateway

```sh
nx generate @nrwl/nest:application --name=gateway --directory=api --tags=side:server,type:app,scope:api --no-interactive

```

## Api Gateway User

```sh
nx generate @nestjs/schematics:resource --name=users --sourceRoot=apps/api/gateway/src --type=ws --no-interactive

```

### Class validator & class transformer

```sh
npm i --save class-validator class-transformer

```

### NestJS Config

```sh
npm i --save @nestjs/config

```

### NestJS Mapped types

```sh
npm i --save @nestjs/mapped-types
```

### Mongoose

```sh
npm install --save @nestjs/mongoose mongoose
```

## Media

### Media Audio

```sh
nx generate @nrwl/angular:library --name=audio --style=scss --directory=media --buildable --importPath=@freecom/media-audio --prefix=media --publishable --tags=side:client,type:feature,scope:media --no-interactive
```

# Core

## Core entities

```sh
nx generate @nrwl/workspace:library --name=entities --directory=core --importPath=@freecom/core-entities --tags=type:util,scope:core --no-interactive
```
