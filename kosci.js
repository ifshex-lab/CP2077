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

    switch (kosc) {
        case "k4":
            // samakosc.textContent = "4";
            break;
        case "k6":
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

    await sleep(50);

    tlo.classList.remove("jeszczenie");
    pojemnik.classList.remove("jeszczenie");

    // await sleep(100);

    // boxkosc.classList.remove("rzut");
    // void boxkosc.offsetWidth;
    // boxkosc.classList.add("rzut");
    odbijaj(boxkosc);
    await sleep(10000);

    tlo.classList.add("jeszczenie");
    pojemnik.classList.add("jeszczenie");

    await sleep(1000);

    pojemnik.remove();
    tlo.remove();
}


rzut("k4");

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

        function klatka(teraz) {
            const t = Math.min((teraz - start) / czas, 1);

            let punkt;

            if (t < podzial1) {
                const lokalneT = t / podzial1;
                punkt = bezierKwadratowy(A, kontrola1, B, lokalneT);
            } else if (t < podzial2) {
                const lokalneT = (t - podzial1) / (podzial2 - podzial1);
                punkt = bezierKwadratowy(B, kontrola2, D, lokalneT);
            } else {
                const lokalneT = (t - podzial2) / (1 - podzial2);
                punkt = bezierKwadratowy(D, kontrola3, C, lokalneT);
            }

            const scale = startScale + (endScale - startScale) * t;

            element.style.transform = `translate(${punkt.x}px, ${punkt.y}px) scale(${scale})`;

            if (t < 1) {
                requestAnimationFrame(klatka);
            } else {
                resolve();
            }
        }

        element.style.transform = `translate(${A.x}px, ${A.y}px) scale(${startScale})`;
        requestAnimationFrame(klatka);
    });
}