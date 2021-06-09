// PESTILENCE PAGE
let msgBtn = document.querySelector("[data-type =\"popup\"]");
        const showPopup = () => {
            let box = document.createElement("div");
            box.className = "popup";
            box.innerHTML = "<h4>ENTER YOUR PERSONAL DATA:<br>(phone or email)</h4><br><form method='GET' class='Sbtn'><input><br><br><input type='submit' value='PRE-ORDER' style='font-size:20px'></form";
            let close = document.createElement("div");
            close.className = "closePopup";
            close.innerText = "+";
            box.appendChild(close);
            document.body.appendChild(box);
            document.body.classList.add("hidden");
            close.addEventListener("click", (e) => {
                box.remove();
                document.body.classList.remove("hidden")
            })
        }

        msgBtn.addEventListener("click", (e) => {
            showPopup();
        })

        const ListBtn = document.querySelector("#ListBtn");
        const LIST_1 = document.querySelector("#LIST_1");
        ListBtn.addEventListener("click", (e) => {
          LIST_1.classList.toggle("LIST_VIS");
          ListBtn.classList.toggle("ListBtn_active");
        })