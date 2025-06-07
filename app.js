let context;

document.addEventListener("DOMContentLoaded", async () => {
  if (!context) {
    const resp = await fetch("./resume.json");
    context = await resp.json();
  }

  const src = document.body.innerHTML;
  const template = Handlebars.compile(src);
  document.body.innerHTML = template(context);
});
