const { hash } = window.location;

const decodedMessage = atob(hash.replace("#", ""));
if (decodedMessage) {
  document.querySelector("#input-form").classList.add("hide");

  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("#decoded-message").innerHTML = decodedMessage;
}
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  document.querySelector("#input-form").classList.add("hide");
  document.querySelector("#link").classList.remove("hide");
  const link = document.querySelector("#link-input");
  link.value = `${window.location}#${encrypted}`;
  link.select();
  //   link.value = encrypted;
});
