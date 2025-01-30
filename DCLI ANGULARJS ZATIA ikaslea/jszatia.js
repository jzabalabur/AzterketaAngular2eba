
users=[["usu1", "usu1@gmail.com", "usu1"],["usu2", "usu2@gmail.com", "usu2"],["usu3", "usu3@gmail.com", "usu3"]];
platos=[["BacalaoEnSalsaDePiquillo","BacalaoEnSalsaDePiquillo.png"],["CremosoDeMascarpone","CremosoDeMascarpone.png"],
    ["EnsaladaDePastaConPollo","EnsaladaDePastaConPollo.png"],["FlanDeLecheCondensada","FlanDeLecheCondensada.png"],
    ["LentejasLevantinas","LentejasLevantinas.png"],["espinacasConJamon","espinacasConJamon.png"],
    ["fideosOrientalesConSoja","fideosOrientalesConSoja.png"],["merluzaSalsaVerde","merluzaSalsaVerde.png"],
    ["salteadoDeVerduras","salteadoDeVerduras.png"],["tartaHeladaDeLimon","tartaHeladaDeLimon.png"]];
    
    document.addEventListener("DOMContentLoaded", function () {
        // DOM elementuak aukeratu
        const accountSection = document.getElementById("account");
        const loginSection = document.getElementById("login");
        const offersSection = document.getElementById("offers");
        
        const btnNewAccount = document.getElementById("optNewAccount");
        const btnLogin = document.getElementById("optLogin");
        const btnLoginSubmit = document.getElementById("btnLogin");
        
        const inputUsername = document.getElementById("username");
        const inputPassword = document.getElementById("password");
        // Dena ezkutatu
        function ezkutatuDena() {
            accountSection.style.display = "none";
            loginSection.style.display = "none";
            offersSection.style.display = "none";
        }
  
        ezkutatuDena();
        
        //Kontua sortu botoia
        btnNewAccount.addEventListener("click", function (event) {
            ezkutatuDena();
            accountSection.style.display = "block";
        });
        
        //login botoia
        btnLogin.addEventListener("click", function (event) {
            ezkutatuDena();
            loginSection.style.display = "block";
        });
        //Login botoia (submit)
        btnLoginSubmit.addEventListener("click", function () {
            const erabiltzailea = inputUsername.value.trim();
            const pasahitza = inputPassword.value.trim();
            if (!erabiltzailea || !pasahitza) {
                alert("Mesedez bete eremu guztiak");
            } else {
            //Konprobatu
            let loginZuzena = false;

            for (let i = 0; i < users.length; i++) {
            if (users[i][0] === erabiltzailea && users[i][2] === pasahitza) {
                loginZuzena = true;
            }
            }
            if (loginZuzena==true) {
                ezkutatuDena();
                offersSection.style.display = "block";
            } else {
                alert("Pasahitz edo erabiltzaile okerra");
            }
        }
        });

        //SELECTa bete
        const selectElement = document.getElementById("platos");

        platos.forEach(plato => {
            const option = document.createElement("option");
            option.value = plato[1]; 
            option.textContent = plato[0]; 

            selectElement.appendChild(option);
        });
        


        const card1 = document.getElementById("card1");
        const card2 = document.getElementById("card2");
        const card3 = document.getElementById("card3");
        const btnAceptar = document.getElementById("btnAceptar");
        
        // Aukeratutako platerak (3)
        let aukeratutakoPlaterak = [null, null, null]; 
        
        // Cardak bete
        function cardaEguneratu(cardIndex, irudia) {
            const cards = [card1, card2, card3];
            const card = cards[cardIndex];
            card.style.backgroundImage = `url(img/${irudia})`;
            card.style.backgroundSize = 'cover';
            aukeratutakoPlaterak[cardIndex] = irudia;  
        }
        
        // Selectaren aldaketak jaso
        selectElement.addEventListener("change", function() {
            const irudia = selectElement.value;
            
            // CCard-ak bete
            if (!aukeratutakoPlaterak[0]) {
                cardaEguneratu(0, irudia);  
            } else if (!aukeratutakoPlaterak[1]) {
                cardaEguneratu(1, irudia);  
            } else if (!aukeratutakoPlaterak[2]) {
                cardaEguneratu(2, irudia);  
            }
        });
        
        // Aceptar botoia
        btnAceptar.addEventListener("click", function() {
            if (aukeratutakoPlaterak.every(plate => plate !== null)) {
                alert("Oso ondo! Hiru plater aukeratu dituzu.");
            } else {
                alert("Mesedez, aukeratu hiru plater.");
            }
        });


    });
    