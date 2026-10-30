// ===================================================
// MENU HAMBÚRGUER + SCROLL INTELIGENTE (MOBILE)
// ===================================================
(function () {
  const header = document.querySelector("header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const mobileViewport = window.matchMedia("(max-width: 768px)");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-aberta");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-aberta");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  let lastY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  
  if (!mobileViewport.matches) {
    header?.classList.remove("header-compacto");
    lastY = currentY;
    return;
  }

  // Se rolar para baixo (passando de 60px): recolhe o cabeçalho (fica compacto)
  if (currentY > lastY && currentY > 60) {
    header?.classList.add("header-compacto");
  } 
  // Se rolar para cima: o cabeçalho expande e volta ao tamanho normal
  else if (currentY < lastY) {
    header?.classList.remove("header-compacto");
  }

  lastY = currentY;
}, { passive: true });

// ===================================================
// FORMULÁRIO DE ORÇAMENTO VIA WHATSAPP (form#quote)
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
// FORMULÁRIOS FALE CONOSCO / DATA-SEND — WHATSAPP
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
// ACOMPANHAMENTO DE PEDIDO (#tracking)
// ===================================================
document.querySelector("#tracking")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = new FormData(e.currentTarget).get("codigo").trim().toUpperCase();
  const result = document.querySelector("#tracking-result");
  if (result) {
    result.textContent = code
      ? `Pedido ${code}: Para informações atualizadas sobre seu pedido, entre em contato via WhatsApp com o código do pedido.`
      : "Informe o código do pedido para acompanhamento.";
  }
});

// ===================================================
// FORMULÁRIO DE FEEDBACK (#feedback / #fb)
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
// INTERSECTION OBSERVER — REVEAL ON SCROLL
// ===================================================
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const blocks = document.querySelectorAll(
    "main > section, .card-categoria, .card, .panel, .intro, details, .card-foto, .card-depoimento, .card-item, .card-banco"
  );
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 }
  );
  blocks.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// ===================================================
// MARCAÇÃO DE PÁGINA ATIVA NO MENU
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
// MODAL / ZOOM PARA FOTOS DA GALERIA
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
  modal.addEventListener("click", (e) => { if (e.target === modal) fecharModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) fecharModal();
  });
}

// ===================================================
// COPIAR CHAVE PIX / DADOS BANCÁRIOS
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
