document.querySelector(".menu")?.addEventListener("click", (e) => {
  const nav = document.querySelector("nav");
  const open = nav.classList.toggle("open");
  e.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelector("#quote")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const msg = [
    "Solicitação de orçamento",
    ...["nome", "email", "telefone", "servico", "medidas", "descricao"].map(
      (k) => k + ": " + (d.get(k) || "Não informado"),
    ),
  ].join("\n");
  document.querySelector("#quote-result").textContent =
    "Seu aplicativo de e-mail será aberto. Revise o destinatário oficial antes de enviar.";
  location.href =
    "mailto:?subject=" +
    encodeURIComponent("Solicitação de orçamento") +
    "&body=" +
    encodeURIComponent(msg);
});
document.querySelector("#tracking")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = new FormData(e.currentTarget).get("codigo").trim().toUpperCase();
  document.querySelector("#tracking-result").textContent =
    code === "DEMO123"
      ? "Pedido de demonstração DEMO123: em fabricação (informação fictícia)."
      : "Pedido não encontrado nesta demonstração. Somente DEMO123 está disponível.";
});
document.querySelector("#feedback")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.currentTarget),
    box = document.querySelector("#feedback-preview");
  box.replaceChildren();
  const h = document.createElement("h2");
  h.textContent = d.get("nome") + " — " + d.get("nota");
  const p = document.createElement("p");
  p.textContent = d.get("comentario");
  box.append(h, p);
  document.querySelector("#feedback-result").textContent =
    "Prévia criada somente neste navegador.";
});
if (
  "IntersectionObserver" in window &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const blocks = document.querySelectorAll(
    "main > section, .card-categoria, .card, .panel, .intro, details, .card-foto"
  );
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  blocks.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

// Marcação da página ativa no menu
document.querySelectorAll("nav a").forEach((a) => {
  const currentPath = location.pathname.split("/").pop() || "index.html";
  const hrefAttr = a.getAttribute("href") || "";
  const linkPath = hrefAttr.split("/").pop();
  if (currentPath === linkPath) {
    a.setAttribute("aria-current", "page");
  }
});

// Modal / Zoom para fotos da galeria
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

  const fecharModal = () => {
    modal.classList.remove("ativo");
  };

  modalClose?.addEventListener("click", fecharModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      fecharModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) {
      fecharModal();
    }
  });
}


// Envio dos formulários Fale Conosco / Orçamento via WhatsApp
document.querySelectorAll("form[data-send]").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const nome = (d.get("nome") || "").toString().trim();
    const email = (d.get("email") || "").toString().trim();
    const tel = (d.get("telefone") || "").toString().trim();
    const servico = (d.get("servico") || "").toString().trim();
    const msg = (d.get("mensagem") || d.get("descricao") || "").toString().trim();

    const linhas = [
      "Olá! Gostaria de um orçamento com a Space Metal Serralheria.",
      "",
      nome ? `*Nome:* ${nome}` : "",
      tel ? `*Telefone:* ${tel}` : "",
      email ? `*E-mail:* ${email}` : "",
      servico ? `*Serviço:* ${servico}` : "",
      msg ? `*Mensagem / Projeto:*
${msg}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/5519998508696?text=${encodeURIComponent(linhas.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
