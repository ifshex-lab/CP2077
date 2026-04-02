function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rzut(kosc) {
    let cialoKosci; 
    let wynik;
    const tlo = document.createElement("div");
    tlo.classList.add("tlokosci", "jeszczenie");

    const pojemnik = document.createElement("div");
    pojemnik.classList.add("pojemnikKosci", "jeszczenie");

    const boxkosc = document.createElement("div");
    boxkosc.classList.add("boxkosc");

    const samakosc = document.createElement("div");
    samakosc.classList.add("samakosc");

    boxkosc.appendChild(samakosc);
    pojemnik.appendChild(boxkosc);
    let liczbaG
    let liczbaT;
    let liczbaP;
    let liczbaL;
    let liczbaPrz;
    let liczbaD;
    switch (kosc) {
        case "k4":
            liczbaG = Math.floor(Math.random() * 4) + 1;

            

            switch (liczbaG) {
            case 1:
                liczbaP = 2;
                liczbaL = 3;
                liczbaT = 4;
                break;
            case 4:
                liczbaP = 1;
                liczbaL = 3;
                liczbaT = 2;
                break;
            case 3:
                liczbaP = 1;
                liczbaL = 2;
                liczbaT = 4;
                break;
            case 2:
                liczbaP = 1;
                liczbaL = 4;
                liczbaT = 3;
                break;
            }
            cialoKosci = `
                <div class="k4cubecontainer">
                    <div class="obrot2">
                        <div class="obrot1">
                            <div class="k4cube show1">
                                <div class="k4side_1" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}"><span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span></div>
                                <div class="k4side_2" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}"><span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span></div>
                                <div class="k4side_3" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}"><span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span></div>
                                <div class="k4side_4" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}"><span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            wynik = liczbaG;
            break;
        case "k6":
                liczbaG = Math.floor(Math.random() * 6) + 1;
                switch (liczbaG) {
            case 1:
                liczbaP = 4;
                liczbaPrz = 2;
                liczbaT = 5;
                liczbaD = 6;
                liczbaL = 3;
                break;
            case 2:
                liczbaP = 4;
                liczbaPrz = 6;
                liczbaT = 1;
                liczbaD = 5;
                liczbaL = 3;
                break;
            case 3:
                liczbaP = 2;
                liczbaPrz = 6;
                liczbaT = 1;
                liczbaD = 4;
                liczbaL = 5;
                break;
            case 4:
                liczbaP = 5;
                liczbaPrz = 6;
                liczbaT = 1;
                liczbaD = 3;
                liczbaL = 2;
                break;
            case 5:
                liczbaP = 4;
                liczbaPrz = 1;
                liczbaT = 6;
                liczbaD = 2;
                liczbaL = 3;
                break;
            case 6:
                liczbaP = 4;
                liczbaPrz = 5;
                liczbaT = 2;
                liczbaD = 1;
                liczbaL = 3;
                break;
            }
            cialoKosci = `

				<div class="k6cubecontainer" >
                <div class="obrot2">
                        <div class="obrot1">
					<div class="k6cube">
						<div class="k6side_1" data-number="${liczbaD}"></div>
						<div class="k6side_2" data-number="${liczbaT}"></div>
						<div class="k6side_3" data-number="${liczbaL}"></div>
						<div class="k6side_4" data-number="${liczbaP}"></div>
						<div class="k6side_5" data-number="${liczbaPrz}"></div>
						<div class="k6side_6" data-number="${liczbaG}"></div>
					</div>
					</div>
					</div>
			</div>`;
            wynik = liczbaG;
            // samakosc.textContent = "6";
            break;
        case "k10":
            // samakosc.textContent = "10";
            break;
        case "k20":
            // samakosc.textContent = "20";
            break;
    }

    document.body.appendChild(tlo);
    document.body.appendChild(pojemnik);
    samakosc.innerHTML = cialoKosci;
    await sleep(50);

    tlo.classList.remove("jeszczenie");
    pojemnik.classList.remove("jeszczenie");

    await sleep(100);

    boxkosc.classList.remove("rzut");
    void boxkosc.offsetWidth;
    boxkosc.classList.add("rzut");
    odbijaj(boxkosc);
    await sleep(3000);

    tlo.classList.add("jeszczenie");
    pojemnik.classList.add("jeszczenie");

    await sleep(1000);

    pojemnik.remove();
    tlo.remove();
    return wynik;
}


// rzut("k6").then((wynik) => {
//     console.log(wynik);
// });

function bezierKwadratowy(p0, p1, p2, t) {
    const nt = 1 - t;
    return {
        x: nt * nt * p0.x + 2 * nt * t * p1.x + t * t * p2.x,
        y: nt * nt * p0.y + 2 * nt * t * p1.y + t * t * p2.y
    };
}

function odbijaj(element, czas = 2000) {
    return new Promise((resolve) => {
        const start = performance.now();
        const obrot1 = element.querySelector(".obrot1") || document.querySelector(".obrot1");

        const podzial1 = 0.34;
        const podzial2 = 0.68;

        const A = { x: -250, y: -150 };
        const B = { x: -100, y: -80 };
        const D = { x: -50, y: -40 };
        const C = { x: 0, y: 0 };

        const kontrola1 = { x: -185, y: -190 };
        const kontrola2 = { x: -78, y: -135 };
        const kontrola3 = { x: -22, y: -95 };

        const startScale = 0.5;
        const endScale = 1.5;

        const staryTransition = obrot1 ? obrot1.style.transition : "";

        if (obrot1) {
            obrot1.style.transition = "none";
            obrot1.style.transformStyle = "preserve-3d";
            obrot1.style.transform = `rotateZ(40deg) rotateY(0deg)`;
        }

        function klatka(teraz) {
            const t = Math.min((teraz - start) / czas, 1);

            let punkt;
            let rotY = 0;

            if (t < podzial1) {
                const lokalneT = t / podzial1;
                punkt = bezierKwadratowy(A, kontrola1, B, lokalneT);
                rotY = lokalneT * 360;
            } else if (t < podzial2) {
                const lokalneT = (t - podzial1) / (podzial2 - podzial1);
                punkt = bezierKwadratowy(B, kontrola2, D, lokalneT);
                rotY = 360 + lokalneT * 180;
            } else {
                const lokalneT = (t - podzial2) / (1 - podzial2);
                punkt = bezierKwadratowy(D, kontrola3, C, lokalneT);
                rotY = 540 + lokalneT * 180;
            }

            const scale = startScale + (endScale - startScale) * t;
            element.style.transform = `translate(${punkt.x}px, ${punkt.y}px) scale(${scale})`;

            if (obrot1) {
                obrot1.style.transform = `rotateZ(40deg) rotateY(${rotY}deg)`;
            }

            if (t < 1) {
                requestAnimationFrame(klatka);
            } else {
                if (obrot1) {
                    obrot1.style.transition = staryTransition;
                }
                resolve();
            }
        }

        element.style.transform = `translate(${A.x}px, ${A.y}px) scale(${startScale})`;
        requestAnimationFrame(klatka);
    });
}