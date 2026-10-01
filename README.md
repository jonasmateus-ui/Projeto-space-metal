# ⚙️ Space Metal Serralheria — Site Institucional

Projeto acadêmico da disciplina de Desenvolvimento Frontend para Web (Entrega A2).

---

## 👤 Desenvolvedor / Autor

| Nome completo | RGM / Matrícula | Usuário GitHub | Instituição |
|---|---|---|---|
| Jonas Mateus de Sousa de Araújo | — | JonasSousa1 | UNICID (Universidade Cidade de São Paulo) |

---

## 🌐 Site Publicado & Validação

- **Link do site hospedado:** [`https://jonassousa1.github.io/spacemetal/`](https://jonasmateus-ui.github.io/Projeto-space-metal/)
- **Validação W3C (HTML5):** Estrutura de 10 páginas desenvolvida e padronizada segundo as diretrizes semânticas do W3C:
- https://validator.w3.org/
 
---

## 🏢 Introdução — A Organização

A **Space Metal Serralheria** (CNPJ: **41.817.914/0001-27**) é uma empresa especializada no desenvolvimento, fabricação e instalação de estruturas metálicas de alta precisão e serralheria sob medida para clientes residenciais, comerciais e industriais.

### Diferenciais Operacionais:
- **Projetos Personalizados:** Desenvolvimento sob medida atendendo desde portões automáticos e grades reforçadas até mezaninos industriais e peças customizadas (Serviço P99).
- **Matéria-Prima Certificada:** Utilização de aços galvanizados, tubos estruturais e vigas laminadas de alta durabilidade.
- **Segurança e Transparência:** Processo de fabricação iniciado rigorosamente mediante a aprovação técnica e pagamento do **sinal mínimo de 30%**.

---

## 🎤 Contato com a Organização (Comprovação da Entrevista)

A entrevista foi realizada **presencialmente** com o CEO e proprietário da Space Metal, **Diogo Souza**, no dia **26/09/2026**.

Durante o encontro presencial na sede da serralheria, foram alinhados os objetivos do projeto web, levantadas as necessidades técnicas da empresa e detalhados os processos operacionais. Diogo enfatizou a importância de oferecer aos clientes um canal direto e transparente para solicitação de orçamentos, consulta dos prazos de fabricação e acompanhamento das etapas dos projetos metálicos sob medida.

### 📸 Comprovação do Contato:

![Entrevista presencial com o CEO Diogo Souza - Space Metal](assets/img/entrevista.jpg)

*Registro da entrevista presencial realizada com o CEO Diogo Souza nas instalações da Space Metal — 26/09/2026.*

### 📞 Canais Oficiais de Contato:
- **CNPJ:** 41.817.914/0001-27
- **Instagram:** [@spacemetal_](https://www.instagram.com/spacemetal_/)
- **Atendimento Direct / WhatsApp:** Disponível via formulário e contatos da página `contato.html`.

---

## 🗂️ Estrutura do Projeto

```text
/
├── index.html                  # Página Principal
├── README.md                   # Documentação do Projeto
├── assets/
│   ├── css/
│   │   └── style.css           # CSS único e centralizado do site
│   ├── img/                    # Logos, fotos de projetos e comprovação da entrevista
│   ├── video/                  # Vídeo demonstrativo dos processos de corte/solda
│   └── audio/                  # Recursos sonoros integrados
└── pages/
    ├── quem-somos.html          # Dados da empresa, missão e CNPJ
    ├── produtos.html            # Tabela e catálogo de produtos metálicos
    ├── servicos.html            # Lista de serviços de serralheria
    ├── orcamentos.html          # Formulário interativo para solicitação de cotação
    ├── clientes.html            # Portal do cliente / Meus pedidos
    ├── contratos.html           # Cláusulas contratuais e regra de sinal (30%)
    ├── pagamentos.html          # Opções de pagamento e PIX CNPJ
    ├── acompanhamento.html      # Rastreamento do status de fabricação
    └── contato.html             # Dados de contato e links sociais


````

## 🗺️ Mapa do Site (10 páginas)

1. [`index.html`](https://jonassousa1.github.io/spacemetal/index.html) — Página inicial (Html + Css 100%)
2. [`pages/quem-somos.html`](https://jonassousa1.github.io/spacemetal/pages/quem-somos.html) — História, CNPJ, missão e dados institucionais (Html + Css reutilizado)
3. [`pages/produtos.html`](https://jonassousa1.github.io/spacemetal/pages/produtos.html) — Catálogo de produtos e projetos sob medida P99 (Html + Css reutilizado)
4. [`pages/servicos.html`](https://jonassousa1.github.io/spacemetal/pages/servicos.html) — Serviços de fabricação, montagem e manutenção (Html + Css reutilizado)
5. [`pages/orcamentos.html`](https://jonassousa1.github.io/spacemetal/pages/orcamentos.html) — Formulário para solicitação de orçamento (Html + Css reutilizado)
6. [`pages/clientes.html`](https://jonassousa1.github.io/spacemetal/pages/clientes.html) — Área do cliente e painel de pedidos (Html + Css reutilizado)
7. [`pages/contratos.html`](https://jonassousa1.github.io/spacemetal/pages/contratos.html) — Termos de serviço e regra de sinal de 30% (Html + Css 100%)
8. [`pages/pagamentos.html`](https://jonassousa1.github.io/spacemetal/pages/pagamentos.html) — Formas de pagamento e chave PIX CNPJ (Html + Css reutilizado)
9. [`pages/acompanhamento.html`](https://jonassousa1.github.io/spacemetal/pages/acompanhamento.html) — Status de produção e linha do tempo do projeto (Html + Css 100%)
10. [`pages/contato.html`](https://jonassousa1.github.io/spacemetal/pages/contato.html) — Canais de atendimento e Instagram oficial (Html + Css 100%)

    ````
    
## ❇️ Requisitos Técnicos da Entrega

- [x] Estrutura semântica ( `header` , `nav` , `main` , `section` , `article` , `footer` )
- [x] 10 páginas HTML interligadas
- [x] Recurso de vídeo ( `<video>` ) em `servicos.html`
- [x] Recurso de áudio ( `<audio>` ) — em andamento
- [x] Formulário de contacto com validação nativa HTML5
- [x] Formulário de orçamento com validação nativa HTML5 (Feito pelo WhatsApp)
- [x] Validação W3C sem erros — a confirmar antes da entrega final

---

## 🧠 Conclusão e Aprendizados

Essa etapa exigiu bem mais cuidado do que parecia à primeira vista. Estruturar 10 páginas usando semântica HTML corretamente ( `header` , `nav` , `main` , `section` , `article` , `footer` ) trouxe decisões que não são óbvias no dia a dia — como escolher entre `section` e `article` pra cada bloco, ou garantir que cada página tivesse só um `h1` e uma hierarquia de headings coerente, pontos que pesam bastante na validação do W3C.

Organizar o repositório em `assets/` (css, img, video, audio) e `pages/` desde o início facilitou reaproveitar componentes prontos — como os cards de produtos, o bloco "Como funciona" e as cláusulas de contrato — sem precisar duplicar CSS, já que todo o projeto usa um único arquivo `style.css` .

Trabalhar em equipe com Git e GitHub também foi parte importante do aprendizado: alinhar quem mexia em qual página, evitar conflitos de merge e manter um padrão de commits ajudou a não perder trabalho no meio do caminho.

Por fim, basear o conteúdo do site na entrevista real com o Diogo, fundador da Space Metal Serralheria, deixou claro como decisões de conteúdo (o que virou regra de sinal de 30%, o que virou orçamento, o que virou acompanhamento) ficam muito mais sólidas quando partem de informação real da empresa, em vez de conteúdo genérico.

---

*Projeto acadêmico — Desenvolvimento Frontend para Web.*
