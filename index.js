(async function () {
  let res = await fetch("https://api.alienawy.site/login", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ data: "some test data" }),
  });
  res = await res.json();
  console.log({ loginRes: res });

  let res2 = await fetch("https://api.alienawy.site/access", {
    method: "GET",
    credentials: "include",
  });
  res2 = await res2.json();
  console.log({ accessRes: res2 });
})();
