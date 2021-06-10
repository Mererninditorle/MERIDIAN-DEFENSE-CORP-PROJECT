const apocalypse = document.querySelector("#apocalypse");
        const apocalypse_btn = document.querySelector(".BTN");
        const syndicate = document.querySelector("#syndicate");
        const syndicate_btn = document.querySelector(".synBTN");
        apocalypse_btn.addEventListener("click", (e) => {
          apocalypse.classList.toggle("Info_vis");
          apocalypse_btn.classList.toggle("ApHeader_active");
        })
        syndicate_btn.addEventListener("click", (e) => {
          syndicate.classList.toggle("Info_vis");
          syndicate_btn.classList.toggle("Ap1911Header_active");
        })