// ===================================================
// 1. MENU HAMBÚRGUER MOBILE + CONTROLE DE NAVEGAÇÃO
// ===================================================
(function () {
  const header = document.querySelector("header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    const fecharMenu = () => {
      nav.classList.remove("nav-aberta");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    };

    const alternarMenu = () => {
      const isOpen = nav.classList.toggle("nav-aberta");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    };

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      alternarMenu();
    });

    // Fechar ao clicar em qualquer link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", fecharMenu);
    });

    // Fechar ao clicar fora do menu/header
    document.addEventListener("click", (e) => {
      if (nav.classList.contains("nav-aberta") && header && !header.contains(e.target)) {
        fecharMenu();
      }
    });

    // Fechar suavemente ao rolar a página caso esteja aberto
    window.addEventListener("scroll", () => {
      if (nav.classList.contains("nav-aberta")) {
        fecharMenu();
      }
    }, { passive: true });

    // Fechar com tecla ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("nav-aberta")) {
        fecharMenu();
      }
    });
  }
})();

// ===================================================
// 2. FORMULÁRIO DE ORÇAMENTO VIA WHATSAPP (form#quote)
// ===================================================
const whatsappNumber = "5519998508696";

document.querySelector("#quote")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const nome = (d.get("nome") || "").toString().trim();
  const tel = (d.get("telefone") || "").toString().trim();
  const servico = (d.get("servico") || "").toString().trim();
  const medidas = (d.get("medidas") || d.get("cep") || "").toString().trim();
  const descricao = (d.get("descricao") || "").toString().trim();

  const linhas = [
    "Olá! Gostaria de solicitar um orçamento com a Space Metal Serralheria.",
    "",
    `*Nome:* ${nome}`,
    `*Telefone:* ${tel}`,
    `*Serviço:* ${servico}`,
    `*Medidas:* ${medidas || "Não informado"}`,
    `*Descrição:* ${descricao}`,
  ];

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(linhas.join("\n"))}`;
  window.location.assign(url);
});

// ===================================================
// 3. FORMULÁRIOS FALE CONOSCO / DATA-SEND — WHATSAPP
// ===================================================
document.querySelectorAll("form[data-send]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const nome = (d.get("nome") || "").toString().trim();
    const tel = (d.get("telefone") || "").toString().trim();
    const servico = (d.get("servico") || "").toString().trim();
    const msg = (d.get("mensagem") || d.get("descricao") || "").toString().trim();

    const linhas = [
      "Olá! Gostaria de um atendimento com a Space Metal Serralheria.",
      "",
      nome ? `*Nome:* ${nome}` : "",
      tel ? `*Telefone:* ${tel}` : "",
      servico ? `*Serviço:* ${servico}` : "",
      msg ? `*Mensagem / Projeto:*\n${msg}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.location.assign(url);
  });
});

// ===================================================
// 4. ACOMPANHAMENTO DE PEDIDO (#tracking)
// ===================================================
document.querySelector("#tracking")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = (new FormData(e.currentTarget).get("codigo") || "").toString().trim().toUpperCase();
  const result = document.querySelector("#tracking-result");
  if (result) {
    result.style.display = "block";
    result.textContent = code
      ? `Pedido ${code}: Para informações atualizadas sobre seu pedido, entre em contato via WhatsApp com o código do pedido.`
      : "Informe o código do pedido para acompanhamento.";
  }
});

// ===================================================
// 5. FORMULÁRIO DE FEEDBACK (#feedback / #fb)
// ===================================================
document.querySelector("#feedback, #fb")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const nome = (d.get("nome") || "").toString().trim();
  const nota = (d.get("nota") || "").toString();
  const texto = (d.get("texto") || d.get("comentario") || "").toString().trim();
  const autorizacao = d.get("autorizacao") ? "Sim, autorizo contato e confirmação antes da publicação." : "Não";
  const linhas = [
    "Olá! Gostaria de enviar uma avaliação para a Space Metal Serralheria.",
    "",
    `*Nome:* ${nome}`,
    `*Avaliação:* ${nota} de 5 estrelas`,
    `*Comentário:*\n${texto}`,
    `*Autorização:* ${autorizacao}`,
  ];
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(linhas.join("\n"))}`;
  window.location.assign(url);
});

// ===================================================
// 6. ANIMAÇÕES DE SCROLL — ATIVAS APENAS NO DESKTOP
// ===================================================
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  // No mobile, desativamos atrasos e translateY para rolagem nativa 60/120fps sem jank
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (!isMobile) {
    const blocks = document.querySelectorAll(
      "main > section, .card-categoria, .card-banco, .card-depoimento, .showcase-video-box, .card-cta-personalizado"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    blocks.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }
}

// ===================================================
// 7. MARCAÇÃO DE PÁGINA ATIVA NO MENU
// ===================================================
document.querySelectorAll("nav a").forEach((a) => {
  const currentPath = location.pathname.split("/").pop() || "index.html";
  const hrefAttr = a.getAttribute("href") || "";
  const linkPath = hrefAttr.split("/").pop();
  if (currentPath === linkPath) {
    a.setAttribute("aria-current", "page");
  }
});

// ===================================================
// 8. MODAL / ZOOM PARA FOTOS DA GALERIA
// ===================================================
const modal = document.querySelector("#modalFoto");
const modalImg = document.querySelector("#imgAmpliada");
const modalClose = document.querySelector(".modal-fechar");

if (modal && modalImg) {
  document.querySelectorAll(".img-zoomable, .card-foto img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.add("ativo");
      modalImg.src = img.src;
      modalImg.alt = img.alt || "Foto Ampliada";
    });
  });

  const fecharModal = () => modal.classList.remove("ativo");
  modalClose?.addEventListener("click", fecharModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) fecharModal();
  });
}

// ===================================================
// 9. COPIAR CHAVE PIX / DADOS BANCÁRIOS
// ===================================================
document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", () => {
    navigator.clipboard?.writeText(btn.dataset.copy).then(() => {
      const orig = btn.textContent;
      btn.textContent = "✓ Copiado!";
      setTimeout(() => (btn.textContent = orig), 2000);
    });
  });
});
