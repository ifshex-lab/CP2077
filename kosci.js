function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function rzut(kosc) {
    const tlo = document.createElement("div");
    tlo.classList.add("tlokosci");
    tlo.classList.add("jeszczenie");
    const pojemnik = document.createElement("div");
    pojemnik.classList.add("pojemnikKosci");
    pojemnik.classList.add("jeszczenie");


switch(kosc) {
    case("k4"):
    break;
    case("k6"):
    break;
    case("k10"):
    break;
    case("k20"):
    break;
}
    document.body.appendChild(pojemnik);
    document.body.appendChild(tlo);
    await sleep(100);
    tlo.classList.remove("jeszczenie");
    pojemnik.classList.remove("jeszczenie");
     await sleep(1000);
    tlo.classList.add("jeszczenie");
    pojemnik.classList.add("jeszczenie");
     await sleep(1000);
    pojemnik.remove();
    tlo.remove();
}
// rzut("k4");