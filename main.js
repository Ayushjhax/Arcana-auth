const { AuthProvider } = window.arcana.auth;

let provider;
const auth = new AuthProvider(
  "xar_test_4202ee73474195d8bfc5d14d7d1c78d8567eeff2"
);
provider = auth.provider;
setHooks();

window.onload = async () => {
  await auth.init();
  console.log("Auth initializaiton complete");
};

function setHooks() {
  provider("connect", async (params) => {
    console.log({ type: "connect", params: params });
  });
}

async function connect() {
  const provider = await auth.connect();
  alert("Successfully connected");
  window.location.href = "index.html";
}

async function logout() {
  await auth.logout();
  alert("user Logged out");
  // window.location.href = "logout.html";
}
