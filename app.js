const SUPABASE_URL = "TU_WKLEJ_PROJECT_URL";
const SUPABASE_KEY = "TU_WKLEJ_PUBLISHABLE_LUB_ANON_KEY";

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const displayNameInput = document.getElementById("displayName");
const statusEl = document.getElementById("status");

const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const loadProfileBtn = document.getElementById("loadProfileBtn");

function setStatus(text) {
  statusEl.textContent = text;
}

async function ensureProfile(user) {
  const { error } = await sb.from("profiles").upsert({
    id: user.id,
    email: user.email,
    display_name: ""
  });

  if (error) {
    console.error("ensureProfile error:", error.message);
  }
}

async function loadProfile() {
  const { data: userData } = await sb.auth.getUser();
  const user = userData?.user;

  if (!user) {
    setStatus("Najpierw się zaloguj.");
    return;
  }

  await ensureProfile(user);

  const { data, error } = await sb
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    setStatus("Nie udało się wczytać profilu.");
    console.error(error.message);
    return;
  }

  displayNameInput.value = data.display_name || "";
  setStatus(`Zalogowano jako: ${user.email}`);
}

async function saveProfile() {
  const { data: userData } = await sb.auth.getUser();
  const user = userData?.user;

  if (!user) {
    setStatus("Najpierw się zaloguj.");
    return;
  }

  const { error } = await sb.from("profiles").upsert({
    id: user.id,
    email: user.email,
    display_name: displayNameInput.value.trim()
  });

  if (error) {
    setStatus("Nie udało się zapisać profilu.");
    console.error(error.message);
    return;
  }

  setStatus("Profil zapisany.");
}

async function register() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    setStatus("Podaj email i hasło.");
    return;
  }

  const { data, error } = await sb.auth.signUp({
    email,
    password
  });

  if (error) {
    setStatus(error.message);
    return;
  }

  if (data.session) {
    await loadProfile();
    setStatus("Konto utworzone i zalogowano.");
  } else {
    setStatus("Konto utworzone. Sprawdź email i potwierdź rejestrację, jeśli wymagane.");
  }
}

async function login() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const { error } = await sb.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    setStatus(error.message);
    return;
  }

  await loadProfile();
}

async function logout() {
  await sb.auth.signOut();
  displayNameInput.value = "";
  setStatus("Wylogowano.");
}

async function init() {
  const { data } = await sb.auth.getSession();
  const session = data?.session;

  if (session) {
    await loadProfile();
  } else {
    setStatus("Nie jesteś zalogowany.");
  }
}

registerBtn.addEventListener("click", register);
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);
saveProfileBtn.addEventListener("click", saveProfile);
loadProfileBtn.addEventListener("click", loadProfile);

sb.auth.onAuthStateChange(async (_event, session) => {
  if (session) {
    await loadProfile();
  } else {
    displayNameInput.value = "";
    setStatus("Nie jesteś zalogowany.");
  }
});

init();