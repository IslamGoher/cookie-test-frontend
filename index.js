const loginButton = document.querySelector("#login-button");
const accessButton = document.querySelector("#access-button");
const headerAccess = document.querySelector("#h3");

loginButton.addEventListener("click", async () => {
  await login();
});

accessButton.addEventListener("click", async () => {
  try {
    const res = await access();
    if (res.message.includes("success")) {
      headerAccess.innerHTML = "success";
      headerAccess.style.color = 'LimeGreen';
    }
    else {
      headerAccess.innerHTML = "unauthorized";
      headerAccess.style.color = 'red';
    }
  } catch (error) {
    headerAccess.innerHTML = "unauthorized";
    headerAccess.style.color = 'red';
  }
});

async function login() {
  const res = await fetch("https://api.alienawy.site/login", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ data: "some test data" }),
  });
  const parsedRes = await res.json();
  console.log({ loginRes: parsedRes });
}

async function access() {
  const res = await fetch("https://api.alienawy.site/access", {
    method: "GET",
    credentials: "include",
  });
  const parsedRes = await res.json();
  return parsedRes;
}
