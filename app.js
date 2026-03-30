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

      const { data, error } = await sb.auth.signUp({
        email,
        password
      });

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

      const { data, error } = await sb.auth.signInWithPassword({
        email,
        password
      });

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

  btnLogin.addEventListener("click", async () => {
    if (authMode === "login") {
      await zaloguj();
    } else {
      await zarejestruj();
    }
  });

  btnRegister.addEventListener("click", () => {
    if (authBusy) return;

    if (authMode === "login") {
      ustawTrybRejestracji();
    } else {
      ustawTrybLogowania();
    }
  });

  logoutButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      await wyloguj();
    });
  });

  rememberCheckbox.addEventListener("change", () => {
    if (!rememberCheckbox.checked) {
      wyczyscRemember();
    }
  });

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

  await startApp();
});