document.addEventListener("DOMContentLoaded", async () => {
  const SUPABASE_URL = "https://vpiueesmgkfyaywoplou.supabase.co";
  const SUPABASE_KEY = "sb_publishable_r5w2jn8PjgpKA55dXeNc2Q_2qgSWlpx";

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const loginScreen = document.querySelector(".loginScreen");
  const menuGlowne = document.querySelector(".menuGlowne");
  const loadingScreen = document.getElementById("LoadingScreen");

  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");

  const labelEmail = document.getElementById("labelEmail");
  const labelNickname = document.getElementById("labelNickname");
  const labelPassword = document.getElementById("labelPassword");

  const rememberCheckbox = document.getElementById("rememberPassword");
  const btnLogin = document.getElementById("logowanie");
  const btnRegister = document.getElementById("rejestracja");
  const displaynickname = document.getElementById("displaynickname");
  const logoutButtons = document.querySelectorAll(".loggout");

  let authMode = "login";
  let authBusy = false;

  function pokazLoading() {
    if (loadingScreen) loadingScreen.classList.remove("hidden");
  }

  function ukryjLoading() {
    if (loadingScreen) loadingScreen.classList.add("hidden");
  }

  function pokazMenu(nick) {
    displaynickname.textContent = nick || "";
    loginScreen.classList.add("hidden");
    menuGlowne.classList.remove("hidden");
  }

  function pokazLogowanie() {
    displaynickname.textContent = "";
    menuGlowne.classList.add("hidden");
    loginScreen.classList.remove("hidden");
  }

  function ustawTrybLogowania() {
    authMode = "login";

    labelEmail.classList.remove("hidden");
    emailInput.classList.remove("hidden");
    labelPassword.classList.remove("hidden");
    passwordInput.classList.remove("hidden");

    labelNickname.classList.add("hidden");
    nicknameInput.classList.add("hidden");

    btnLogin.textContent = "ZALOGUJ";
    btnRegister.textContent = "PRZEJDŹ DO REJESTRACJI";
  }

  function ustawTrybRejestracji() {
    authMode = "register";

    labelEmail.classList.remove("hidden");
    emailInput.classList.remove("hidden");
    labelPassword.classList.remove("hidden");
    passwordInput.classList.remove("hidden");
    labelNickname.classList.remove("hidden");
    nicknameInput.classList.remove("hidden");

    btnLogin.textContent = "UTWÓRZ KONTO";
    btnRegister.textContent = "WRÓĆ DO LOGOWANIA";
  }

  function ustawPrzyciski(stan) {
    btnLogin.disabled = stan;
    btnRegister.disabled = stan;
    logoutButtons.forEach((btn) => {
      btn.disabled = stan;
    });
  }

  function zapiszRemember(email) {
    localStorage.setItem("rememberUser", rememberCheckbox.checked ? "true" : "false");

    if (rememberCheckbox.checked) {
      localStorage.setItem("savedEmail", email);
    } else {
      localStorage.removeItem("savedEmail");
    }
  }

  function wyczyscRemember() {
    localStorage.removeItem("savedEmail");
    localStorage.setItem("rememberUser", "false");
    rememberCheckbox.checked = false;
  }

  async function pobierzNick(userId) {
    const { data, error } = await sb
      .from("profiles")
      .select("nickname")
      .eq("id", userId)
      .single();

    if (error) return "";
    return data?.nickname || "";
  }

  async function zapiszProfil(userId, nickname) {
    const { error } = await sb
      .from("profiles")
      .insert({
        id: userId,
        nickname: nickname
      });

    if (error) throw error;
  }

  async function zarejestruj() {
    if (authBusy) return;
    authBusy = true;
    ustawPrzyciski(true);
    pokazLoading();

    try {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const nickname = nicknameInput.value.trim();

      if (!email || !password || !nickname) {
        alert("Uzupełnij email, nick i hasło.");
        return;
      }

      const { data, error } = await sb.auth.signUp({ email, password });

      if (error) {
        alert(error.message);
        return;
      }

      const user = data?.user;

      if (!user) {
        alert("Konto utworzone. Potwierdź email i zaloguj się.");
        ustawTrybLogowania();
        return;
      }

      await zapiszProfil(user.id, nickname);
      zapiszRemember(email);
      pokazMenu(nickname);
    } catch (e) {
      alert(e.message || "Błąd rejestracji");
    } finally {
      authBusy = false;
      ustawPrzyciski(false);
      ukryjLoading();
    }
  }
document.getElementById("rejestracja").addEventListener("click", zarejestruj);
  async function zaloguj() {
    if (authBusy) return;
    authBusy = true;
    ustawPrzyciski(true);
    pokazLoading();

    try {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        alert("Uzupełnij email i hasło.");
        return;
      }

      const { data, error } = await sb.auth.signInWithPassword({ email, password });

      if (error) {
        alert(error.message);
        return;
      }

      zapiszRemember(email);

      const user = data?.user;
      const nick = await pobierzNick(user.id);
      pokazMenu(nick);
    } catch (e) {
      alert(e.message || "Błąd logowania");
    } finally {
      authBusy = false;
      ustawPrzyciski(false);
      ukryjLoading();
    }
  }
  document.getElementById("logowanie").addEventListener("click", zaloguj);

  async function wyloguj() {
    if (authBusy) return;
    authBusy = true;
    ustawPrzyciski(true);
    pokazLoading();

    try {
      wyczyscRemember();
      await sb.auth.signOut();
      pokazLogowanie();
    } catch (e) {
      alert(e.message || "Błąd wylogowania");
    } finally {
      authBusy = false;
      ustawPrzyciski(false);
      ukryjLoading();
    }
  }
  document.getElementById("btnlogout").addEventListener("click", wyloguj);
  async function pobierzUmiejetnosci() {
  const { data, error } = await sb
    .from("umiejetnosci")
    .select("*")
    .order("kategoria", { ascending: true })
    .order("nazwa", { ascending: true });

  if (error) {
    console.error("Błąd pobierania umiejetnosci:", error);
    return [];
  }

  function oczyscWartosc(wartosc) {
    if (wartosc == null) return "";
    if (typeof wartosc !== "string") return wartosc;
    return wartosc.trim();
  }

  function pobierzPole(obiekt, ...klucze) {
    for (const klucz of klucze) {
      if (obiekt?.[klucz] !== undefined && obiekt?.[klucz] !== null) {
        return oczyscWartosc(obiekt[klucz]);
      }
    }
    return "";
  }

  return (data || []).map(wiersz => ({
    kategoria: pobierzPole(wiersz, "kategoria", "KATEGORIA"),
    nazwa: pobierzPole(wiersz, "nazwa", "NAZWA"),
    opis: pobierzPole(wiersz, "opis", "OPIS"),
    typ: pobierzPole(wiersz, "typ", "TYP"),
    wzor: pobierzPole(wiersz, "wzor", "WZÓR"),
    porazka: pobierzPole(wiersz, "porazka", "PORAŻKA"),
    prog_1: pobierzPole(wiersz, "prog_1", "PRÓG_1"),
    prog_2: pobierzPole(wiersz, "prog_2", "PRÓG_2"),
    prog_3: pobierzPole(wiersz, "prog_3", "PRÓG_3"),
    prog_4: pobierzPole(wiersz, "prog_4", "PRÓG_4"),
    sukces: pobierzPole(wiersz, "sukces", "SUKCES")
  }));
}
  async function pobierzKlasyPostaci() {
    const { data, error } = await sb
      .from("KLASY_POSTACI")
      .select("*")
      .order("ID", { ascending: true });

    if (error) {
      console.error("Błąd pobierania KLASY_POSTACI:", error);
      return [];
    }

    const kolumnyJakoTablice = [
      "UMIEJĘTNOŚCI KLASOWE",
      "UMIEJĘTNOŚCI PODKLASY",
      "NAJWAŻNIEJSZE CECHY",
      "DODATKOWE INFORMACJE"
    ];

    function rozbijPoPrzecinkach(wartosc) {
      if (!wartosc || typeof wartosc !== "string") return [];
      return wartosc
        .split(",")
        .map(e => e.trim())
        .filter(e => e !== "");
    }

    function oczyscWartosc(wartosc) {
      if (wartosc == null) return "";
      if (typeof wartosc !== "string") return wartosc;
      return wartosc.trim();
    }

    return data.map(wiersz => {
      const nowyWiersz = {};

      for (const klucz in wiersz) {
        if (kolumnyJakoTablice.includes(klucz)) {
          nowyWiersz[klucz] = rozbijPoPrzecinkach(wiersz[klucz]);
        } else {
          nowyWiersz[klucz] = oczyscWartosc(wiersz[klucz]);
        }
      }

      return {
        id: nowyWiersz["ID"],
        klasa: nowyWiersz["KLASA"],
        podklasa: nowyWiersz["PODKLASA"],
        umiejetnoscSpecjalna: nowyWiersz["UMIEJĘTNOŚĆ SPECJALNA"],
        umiejetnosciKlasowe: nowyWiersz["UMIEJĘTNOŚCI KLASOWE"],
        umiejetnosciPodklasy: nowyWiersz["UMIEJĘTNOŚCI PODKLASY"],
        typKlasy: nowyWiersz["TYP KLASY"],
        typWalki: nowyWiersz["TYP WALKI"],
        najwazniejszeCechy: nowyWiersz["NAJWAŻNIEJSZE CECHY"],
        dodatkoweInformacje: nowyWiersz["DODATKOWE INFORMACJE"],
        przygotowanieSie: nowyWiersz["PRZYGOTOWANIE SIĘ"],
        nazwaStyluWalki: nowyWiersz["NAZWA STYLU WALKI"],
        umiejetnoscPasywnaNazwa: nowyWiersz["UMIEJĘTNOŚC PASYWNA - NAZWA"],
        umiejetnoscPasywnaOpis: nowyWiersz["UMIEJĘTNOŚĆ PASYWNA - OPIS"],
        akcjaDodatkowa1Nazwa: nowyWiersz["AKCJA DODATKOWA 1 - NAZWA"],
        akcjaDodatkowa1Opis: nowyWiersz["AKCJA DODATKOWA 1 - OPIS"],
        akcjaDodatkowa2Nazwa: nowyWiersz["AKCJA DODATKOWA 2 - NAZWA"],
        akcjaDodatkowa2Opis: nowyWiersz["AKCJA DODATKOWA 2 - OPIS"],
        akcjaGlowna1Nazwa: nowyWiersz["AKCJA GŁÓWNA 1 - NAZWA"],
        akcjaGlowna1Opis: nowyWiersz["AKCJA GŁÓWNA 1 - OPIS"],
        akcjaGlowna2Nazwa: nowyWiersz["AKCJA GŁÓWNA 2 - NAZWA"],
        akcjaGlowna2Opis: nowyWiersz["AKCJA GŁÓWNA 2 - OPIS"],
        shortRest: nowyWiersz["SHORT REST"],
        longRest: nowyWiersz["LONG REST"],
        opis: nowyWiersz["OPIS"]
      };
    });
  }

  async function startApp() {
    pokazLoading();

    try {
      const savedEmail = localStorage.getItem("savedEmail");
      const rememberUser = localStorage.getItem("rememberUser") === "true";

      if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
      }

      ustawTrybLogowania();

      const { data, error } = await sb.auth.getSession();

      if (error) {
        pokazLogowanie();
        return;
      }

      const session = data?.session;

      if (!rememberUser && session) {
        await sb.auth.signOut();
        pokazLogowanie();
        return;
      }

      if (rememberUser && session?.user) {
        const nick = await pobierzNick(session.user.id);
        pokazMenu(nick);
        return;
      }

      pokazLogowanie();
    } finally {
      ukryjLoading();
    }
  }

  window.KlasyPostaciPromise = pobierzKlasyPostaci();
  window.KlasyPostaci = await window.KlasyPostaciPromise;
  window.listaUmiejetnosciPromise = pobierzUmiejetnosci();
  window.listaUmiejetnosci = await window.listaUmiejetnosciPromise;
  // console.log(window.listaUmiejetnosci);


  await startApp();
});

// window.listaKlasyPostaci = window.KlasyPostaci;
const btn = document.getElementById("btnFullscreen");

btn.addEventListener("click", async () => {
  const el = document.documentElement;

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    if (document.fullscreenEnabled && el.requestFullscreen) {
      await el.requestFullscreen();
      return;
    }

    document.body.classList.add("ios-fullscreen-fallback");
  } catch (err) {
    console.error("Fullscreen error:", err);
    document.body.classList.add("ios-fullscreen-fallback");
  }
});

