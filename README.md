# Integração Contínua e Automação de Testes - Serviço de Pagamentos

Este repositório contém o projeto prático desenvolvido para a disciplina de Integração Contínua e Testes Automatizados. O objetivo central do projeto é demonstrar a aplicação de práticas modernas de CI/CD para garantir a qualidade, estabilidade e confiabilidade de um serviço de validação de regras de negócio (`ServicoDePagamentoDeBoleto.js`).

>**[Acessar o Relatório de Testes Interativo (Allure Report)](https://jessicasantos13.github.io/trabalho-conclusao-programacao-para-automacao-testes/)**

---

## Arquitetura e Práticas Aplicadas

A esteira de integração foi projetada visando resolver problemas comuns na engenharia de software, como integrações tardias e quebras de código em produção. O projeto implementa os seguintes padrões técnicos:

* **Pipeline as Code:** Toda a infraestrutura de CI/CD está definida e versionada via código no arquivo `.github/workflows/automated-tests.yml`, permitindo escalabilidade e rastreabilidade.
* **Shift Left Testing & Feedback Rápido:** Configuração de validações automatizadas nas etapas iniciais do desenvolvimento, mitigando riscos de regressão e fornecendo feedback contínuo.
* **Estratégia Multigatilho (Triggers):** A automação suporta diferentes eventos de disparo para cenários distintos: *Push* (integração a cada alteração), *Schedule* (monitoramento contínuo via Cron) e *Workflow Dispatch* (execução sob demanda).
* **Observabilidade:** Geração automatizada e hospedagem de relatórios de execução utilizando Allure Report em conjunto com o GitHub Pages.

---

## Estrutura do Projeto

Para facilitar a navegação e a avaliação técnica, a arquitetura do repositório está organizada da seguinte maneira:

* **`.github/workflows/`**: Diretório contendo a declaração estrutural da esteira no GitHub Actions.
* **`src/`**: Diretório com o código-fonte e a lógica principal do serviço.
* **`test/`**: Diretório dedicado aos scripts da suíte de testes automatizados, construídos com o framework Mocha.

---

## Como Interagir com a Pipeline (GitHub Actions)

A esteira está totalmente hospedada na infraestrutura em nuvem do GitHub Actions. Para avaliar o fluxo de integração em tempo real através da plataforma:

1. Acesse a aba **Actions** na barra de navegação superior deste repositório.
2. No painel lateral esquerdo, selecione o *workflow* correspondente à automação.
3. No lado direito da interface, clique no botão **Run workflow**.
4. Selecione a *branch* principal (`main`) e confirme o disparo no botão verde **Run workflow**.
5. Clique na execução recém-gerada na lista para acompanhar os *logs* processando cada etapa (*Checkout*, Instalação de Dependências, Testes e Publicação do Relatório).

---

## Reprodução do Ambiente Local

Para reproduzir o ambiente e executar os testes automatizados diretamente na sua máquina, certifique-se de ter as ferramentas `Git` e `Node.js` instaladas no sistema.

**1. Realize o clone do repositório:**

`git clone https://github.com/jessicasantos13/trabalho-conclusao-programacao-para-automacao-testes.git`

**2. Acesse a pasta do projeto e instale as dependências:**

`cd trabalho-conclusao-programacao-para-automacao-testes`

`npm install`

**3. Inicie a execução da suíte de testes:**

`npm run test`