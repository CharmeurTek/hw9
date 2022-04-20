document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("/ex1/post", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        document.getElementById("result").textContent = result;
      })
      .catch((err) => {
        console.error(err.message);
      });
    
  });

