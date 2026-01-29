function initVault(){
  document.querySelectorAll(".product-card").forEach(card=>{
    const id=card.dataset.id;
    const btn=card.querySelector(".vault-btn");

    if(vault.includes(id)){
      btn.classList.add("remove");
      btn.textContent="✕ Remove from Vault";
    }

    card.onclick=e=>{
      if(e.target.closest(".vault-btn"))return;
      document.querySelectorAll(".product-card").forEach(c=>c.classList.remove("big-product"));
      card.classList.add("big-product");
    };

    btn.onclick=e=>{
      e.stopPropagation();
      vault.includes(id)?vault=vault.filter(v=>v!==id):vault.push(id);
      localStorage.setItem("vault",JSON.stringify(vault));
      location.reload();
    };
  });
}

function openVault(){
  window.location.href="vault.html";
}
