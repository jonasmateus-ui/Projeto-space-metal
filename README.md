# 🛠️ Space Metal ERP — Sistema de Gestão de Serralheria

> Sistema ERP completo desenvolvido em HTML puro para a gestão de processos operacionais, comerciais e financeiros da **Space Metal Serralheria**, como atividade prática para a disciplina de **Desenvolvimento Front-End** da **UNICID**.

### 👥 Autores (Engenharia de Software)

| Nome | RGM | Usuário GitHub |
| :--- | :---:| :---:|
| Daniel Santana | 47391812 | Daniel-Cavalcante-dev |
| Jonas Mateus | 47252766 | Jonasmateus-ui |
| Kaike Domingos | 47963352 | Kaike2311 |
| Marlon Dias | 47621915 | Marlon7685 |
| Matheus Alves | 47968788 | Mathz9 |

---

## 📌 Índice

**Link do site hospedado:** [`https://github.com/jonasmateus-ui/Projeto-space-metal`](https://jonasmateus-ui.github.io/Projeto-space-metal/)
- **Validação W3C (HTML):** Todas as 10 páginas validadas sem erros ([ver relatório do validador](https://validator.w3.org/nu/))

- [Autores](#-autores-engenharia-de-software)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Contexto Acadêmico](#-contexto-acadêmico)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Regras de Negócio & Funcionalidades](#-regras-de-negócio--funcionalidades)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Como Executar](#-como-executar)

---

## 📖 Sobre o Projeto

O **Space Metal ERP** é uma solução de **Back-Office (uso estritamente interno)** desenvolvida para a gestão integrada dos processos operacionais da serralharia. A aplicação é voltada para uso exclusivo dos colaboradores e da administração da empresa, não possuindo portal ou acesso direto para clientes externos.

A ferramenta centraliza todo o fluxo operacional interno: desde o cadastro de clientes e a elaboração de orçamentos pela equipe comercial, até a emissão de contratos, controle de estoque de matérias-primas, alocação de equipe técnica e registro de pagamentos pelas áreas financeira e de produção.

A proposta deste trabalho foi construir uma **interface web funcional de 10 páginas** utilizando navegação modular por links relativos, garantindo integridade entre tabelas de dados, formulários interativos e requisitos funcionais sem dependência de frameworks externos.

---

## 🎓 Contexto Acadêmico

- **Instituição:** UNICID — Universidade Cidade de São Paulo
- **Curso:** Engenharia de Software
- **Disciplina:** Desenvolvimento Front-End
- **Docente:** Prof. Cid Rodrigues

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estruturação limpa através de formulários, tabelas, campos de seleção e hiperlinks operacionais.
- **Git & GitHub:** Versionamento do código em equipe e publicação do repositório.
- **Markdown:** Documentação técnica completa do projeto.

---

## ⚙️ Regras de Negócio & Funcionalidades

- 💼 **Operação Back-Office:** Ferramenta interna para uso da administração, equipe comercial, gestão de compras e equipe de produção.
- 📄 **Aprovação de Orçamentos:** Apenas orçamentos validados no módulo de orçamentos podem ser convertidos em contratos ativos.
- 💵 **Regra do Sinal de 30%:** Formalização de contratos exige a confirmação de uma taxa mínima de 30% de sinal registrada no módulo de pagamentos para autorizar o início da fabricação.
- 📦 **Controle de Estoque Mínimo:** Monitoramento contínuo de matérias-primas (perfis, tubos, chapas) com alertas para acionamento do módulo de fornecedores.
- 👥 **Alocação de Recursos:** Atribuição de cargos (Serralheiros, Soldadores, Vendedores, etc.) diretamente associados aos serviços e orçamentos em andamento.

---

## 📂 Estrutura do Repositório

```text
.
├── index.html               # Dashboard principal e resumo operacional
├── README.md                # Documentação técnica do projeto
└── pages/                   # Módulos operacionais da aplicação
    ├── clientes.html        # Cadastro e lista de clientes (CPF/CNPJ)
    ├── contratos.html       # Gerenciamento de contratos e taxa de sinal
    ├── estoque.html         # Controle de movimentação de matéria-prima
    ├── fornecedores.html    # Cadastro de fornecedores e insumos
    ├── funcionarios.html    # Alocação de colaboradores e cargos
    ├── orcamentos.html      # Emissão e controle de validade de orçamentos
    ├── pagamentos.html      # Registro de parcelas e liquidações via Pix/TED
    ├── produtos.html        # Catálogo de produtos e materiais
    └── servicos.html        # Acompanhamento do status de fabricação
