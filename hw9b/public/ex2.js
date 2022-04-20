let countries = [
    {
      name: "Spain",
      year: 2014,
    },
    {
      name: "Monaco",
      year: 2016,
    },
    {
      name: "England",
      year: 2019,
    },
    {
      name: "USA",
      year: 2021,
    },
  ];

document.getElementById("button").addEventListener("click", e => {
    e.preventDefault();

    fetch("/api/countries", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: "Hugo", countries: countries }),
      })
        .then((response) => response.text())
        .then((result) => { 
            document.getElementById("result").textContent = result;
        })
        .catch((err) => {
        console.error(err.message);
    });
});
  