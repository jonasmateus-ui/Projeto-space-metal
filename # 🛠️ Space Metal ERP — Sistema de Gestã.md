# 🛠️ Space Metal ERP — Sistema de Gestão de Serralharia

O **Space Metal ERP** é um sistema web simplificado desenvolvido para a gestão operacional e administrativa da **Space Metal Serralharia**. O projeto organiza o fluxo desde a prospecção do cliente até a entrega do serviço, passando pelo controlo de orçamentos, contratos, pagamentos, compras, materiais em stock e alocação da equipa.

---

## 📁 Estrutura do Projeto

O projeto segue uma organização limpa, separando a página principal dos formulários operacionais na subpasta `pages/`:

```text
Projeto-space-metal/
│
├── index.html               # Dashboard e menu principal de navegação
├── README.md                # Documentação do projeto
└── pages/                   # Módulos operacionais do sistema
    ├── clientes.html        # Gestão e cadastro de clientes (CPF/CNPJ)
    ├── orcamentos.html      # Elaboração e validação de orçamentos
    ├── contratos.html       # Formalização de contratos (com regra do sinal de 30%)
    ├── servicos.html        # Acompanhamento de serviços e produção
    ├── produtos.html        # Cadastro de matérias-primas e produtos
    ├── estoque.html         # Controlo e movimentação do stock
    ├── fornecedores.html    # Gestão de fornecedores de aços e periféricos
    ├── pagamentos.html      # Registo de pagamentos e sinais
    └── funcionarios.html    # Gestão da equipa operacional e administrativa