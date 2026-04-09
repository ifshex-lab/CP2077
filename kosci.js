function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



export async function rzut(kosc) {
    let cialoKosci = "";
    let wynik = null;

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

    let liczbaG;
    let liczbaT;
    let liczbaP;
    let liczbaL;
    let liczbaPrz;
    let liczbaD;

    switch (kosc) {
        case "k4": {
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
                            <div class="k4cube show${liczbaG}">
                                <div class="k4side_1" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}">
                                    <span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span>
                                </div>
                                <div class="k4side_2" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}">
                                    <span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span>
                                </div>
                                <div class="k4side_3" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}">
                                    <span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span>
                                </div>
                                <div class="k4side_4" data-liczbaT="${liczbaT}" data-liczbaL="${liczbaL}" data-liczbaG="${liczbaG}" data-liczbaP="${liczbaP}">
                                    <span data-liczbaP="${liczbaP}" data-liczbaL="${liczbaL}" data-liczbaT="${liczbaT}" class="tlokosc4"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            wynik = liczbaG;
            break;
        }

        case "k6": {
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
                <div class="k6cubecontainer">
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
                </div>
            `;
            wynik = liczbaG;
            break;
        }

        case "k10": {
            const ukladK10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

            for (let i = ukladK10.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [ukladK10[i], ukladK10[j]] = [ukladK10[j], ukladK10[i]];
            }

            const [
                liczba1,
                liczba2,
                liczba3,
                liczba4,
                liczba5,
                liczba6,
                liczba7,
                liczba8,
                liczba9,
                liczba10
            ] = ukladK10;

            cialoKosci = `
                <div class="k10cubecontainer">
                    <div class="obrot2">
                        <div class="obrot1">
                            <div class="k10cube show4">
                                <div class="k10side_1"><span class="tlokosc10${liczba1 === 6 || liczba1 === 9 ? ' podkresl' : ''}" data-number="${liczba1}"></span></div>
                                <div class="k10side_2"><span class="tlokosc10${liczba2 === 6 || liczba2 === 9 ? ' podkresl' : ''}" data-number="${liczba2}"></span></div>
                                <div class="k10side_3"><span class="tlokosc10${liczba3 === 6 || liczba3 === 9 ? ' podkresl' : ''}" data-number="${liczba3}"></span></div>
                                <div class="k10side_4"><span class="tlokosc10${liczba4 === 6 || liczba4 === 9 ? ' podkresl' : ''}" data-number="${liczba4}"></span></div>
                                <div class="k10side_5"><span class="tlokosc10${liczba5 === 6 || liczba5 === 9 ? ' podkresl' : ''}" data-number="${liczba5}"></span></div>
                                <div class="k10side_6"><span class="tlokosc10${liczba6 === 6 || liczba6 === 9 ? ' podkresl' : ''}" data-number="${liczba6}"></span></div>
                                <div class="k10side_7"><span class="tlokosc10${liczba7 === 6 || liczba7 === 9 ? ' podkresl' : ''}" data-number="${liczba7}"></span></div>
                                <div class="k10side_8"><span class="tlokosc10${liczba8 === 6 || liczba8 === 9 ? ' podkresl' : ''}" data-number="${liczba8}"></span></div>
                                <div class="k10side_9"><span class="tlokosc10${liczba9 === 6 || liczba9 === 9 ? ' podkresl' : ''}" data-number="${liczba9}"></span></div>
                                <div class="k10side_10"><span class="tlokosc10${liczba10 === 6 || liczba10 === 9 ? ' podkresl' : ''}" data-number="${liczba10}"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            wynik = liczba4;
            break;
        }

        case "k20": {
            const ukladK20 = Array.from({ length: 20 }, (_, i) => i + 1);

            for (let i = ukladK20.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [ukladK20[i], ukladK20[j]] = [ukladK20[j], ukladK20[i]];
            }

            const [
                liczba1,
                liczba2,
                liczba3,
                liczba4,
                liczba5,
                liczba6,
                liczba7,
                liczba8,
                liczba9,
                liczba10,
                liczba11,
                liczba12,
                liczba13,
                liczba14,
                liczba15,
                liczba16,
                liczba17,
                liczba18,
                liczba19,
                liczba20
            ] = ukladK20;

            cialoKosci = `
                <div class="k20cubecontainer">
                    <div class="obrot2">
                        <div class="obrot1">
                            <div class="obrot2k20">
                                <div class="k20cube">
                                    <div class="k20side_1"><span class="tlokosc20" data-number="${liczba1 === 6 || liczba1 === 9 ? liczba1 + '.' : liczba1}"></span></div>
                                    <div class="k20side_2"><span class="tlokosc20" data-number="${liczba2 === 6 || liczba2 === 9 ? liczba2 + '.' : liczba2}"></span></div>
                                    <div class="k20side_3"><span class="tlokosc20" data-number="${liczba3 === 6 || liczba3 === 9 ? liczba3 + '.' : liczba3}"></span></div>
                                    <div class="k20side_4"><span class="tlokosc20" data-number="${liczba4 === 6 || liczba4 === 9 ? liczba4 + '.' : liczba4}"></span></div>
                                    <div class="k20side_5"><span class="tlokosc20" data-number="${liczba5 === 6 || liczba5 === 9 ? liczba5 + '.' : liczba5}"></span></div>
                                    <div class="k20side_6"><span class="tlokosc20" data-number="${liczba6 === 6 || liczba6 === 9 ? liczba6 + '.' : liczba6}"></span></div>
                                    <div class="k20side_7"><span class="tlokosc20" data-number="${liczba7 === 6 || liczba7 === 9 ? liczba7 + '.' : liczba7}"></span></div>
                                    <div class="k20side_8"><span class="tlokosc20" data-number="${liczba8 === 6 || liczba8 === 9 ? liczba8 + '.' : liczba8}"></span></div>
                                    <div class="k20side_9"><span class="tlokosc20" data-number="${liczba9 === 6 || liczba9 === 9 ? liczba9 + '.' : liczba9}"></span></div>
                                    <div class="k20side_10"><span class="tlokosc20" data-number="${liczba10 === 6 || liczba10 === 9 ? liczba10 + '.' : liczba10}"></span></div>
                                    <div class="k20side_11"><span class="tlokosc20" data-number="${liczba11 === 6 || liczba11 === 9 ? liczba11 + '.' : liczba11}"></span></div>
                                    <div class="k20side_12"><span class="tlokosc20" data-number="${liczba12 === 6 || liczba12 === 9 ? liczba12 + '.' : liczba12}"></span></div>
                                    <div class="k20side_13"><span class="tlokosc20" data-number="${liczba13 === 6 || liczba13 === 9 ? liczba13 + '.' : liczba13}"></span></div>
                                    <div class="k20side_14"><span class="tlokosc20" data-number="${liczba14 === 6 || liczba14 === 9 ? liczba14 + '.' : liczba14}"></span></div>
                                    <div class="k20side_15"><span class="tlokosc20" data-number="${liczba15 === 6 || liczba15 === 9 ? liczba15 + '.' : liczba15}"></span></div>
                                    <div class="k20side_16"><span class="tlokosc20" data-number="${liczba16 === 6 || liczba16 === 9 ? liczba16 + '.' : liczba16}"></span></div>
                                    <div class="k20side_17"><span class="tlokosc20" data-number="${liczba17 === 6 || liczba17 === 9 ? liczba17 + '.' : liczba17}"></span></div>
                                    <div class="k20side_18"><span class="tlokosc20" data-number="${liczba18 === 6 || liczba18 === 9 ? liczba18 + '.' : liczba18}"></span></div>
                                    <div class="k20side_19"><span class="tlokosc20" data-number="${liczba19 === 6 || liczba19 === 9 ? liczba19 + '.' : liczba19}"></span></div>
                                    <div class="k20side_20"><span class="tlokosc20" data-number="${liczba20 === 6 || liczba20 === 9 ? liczba20 + '.' : liczba20}"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            wynik = liczba19;
            break;
        }

        default:
            return null;
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
window.rzut = rzut;

// rzut("k20").then((wynik) => {
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
