$(document).ready(() => {
  $(document).keydown((event) => {
    if (event.ctrlKey && event.keyCode == 83) {
      event.preventDefault();

      text = document.body.innerText.split("\n").join("\\");
      if (!text) {
        document.cookie = `ripOcoocky; expires=${new Date(0).toGMTString()}`;
      }

      document.cookie = `${text}; expires=Tue, 19 Jan 2038 04:14:07 GMT`;
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
      event.preventDefault();

      const html = $("html")[0];

      if (html.style.textAlign === "center") return (html.style = "text-align: left");
      html.style = "text-align: center";
    }
  });
});
$(document).ready(() => {
  document.body.innerText = document.cookie.split("\\").join("\n");
});
console.log("Loaded! get typin!");
