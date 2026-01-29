<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Vault</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<h2>My Vault</h2>
<div id="vaultProducts"></div>

<script src="products.js"></script>
<script>
let vault = JSON.parse(localStorage.getItem("vault")) || [];
const wrap = document.getElementById("vaultProducts");

if(vault.length===0){
  wrap.innerHTML="<p>Your vault is empty</p>";
}

vault.forEach(id=>{
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;

  const div=document.createElement("div");
  div.innerHTML=`
    <h3>${p.title}</h3>
    ${p.images.map(i=>`<img src="${i}">`).join("")}
  `;
  wrap.appendChild(div);
});
</script>

</body>
</html>
