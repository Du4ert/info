const resources=document.querySelectorAll(".resource");function backgroundOffset(e){const o=e.offsetLeft;e.style.backgroundPositionX=o+"px",console.log(o)}function coversBackgroundOffset(){resources.forEach(e=>{const o=e.querySelector(".resource-cover"),t=e.offsetLeft;o.style.backgroundPositionX=-t+"px"})}resources[0].classList.add("active"),resources.forEach(e=>{const o=e.querySelector(".resource-cover"),t=e.querySelector(".resource-title").textContent;coversBackgroundOffset(),o.querySelector(".cover-title").textContent=t,e.addEventListener("click",o=>{e.classList.toggle("active"),coversBackgroundOffset(),document.body.addEventListener("click",o=>{o.target.closest(".resource")!==e&&(e.classList.remove("active"),coversBackgroundOffset())})})});