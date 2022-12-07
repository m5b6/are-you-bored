const very_safe_api_key = "get_your_own_api_key_from_openai.com_lol"

let button = document.getElementsByClassName("learn-more")[0];
const options = [
  "else",
  "different",
  "fun",
  "cool",
  "interesting",
  "exciting",
  "less boring",
  "thrilling",
  "sensational",
  "inspiring",
  "appealing",
];
button.innerHTML =
  "do something " + options[Math.floor(Math.random() * options.length)];

button.addEventListener("click", function () {
  const options = [
    "else",
    "different",
    "fun",
    "cool",
    "interesting",
    "exciting",
    "less boring",
    "thrilling",
    "sensational",
    "inspiring",
    "appealing",
    "more fun",
    "more exciting",
    "more interesting",
    "more cool",
    "more thrilling",
    "more sensational",
    "more inspiring",
    "more appealing",
    "less dull",
    "less mundane",
    "less monotonous",
  ];

  let colours = [
    "#c8f5f0",
    "#d0f5df",
    "#f1f9dd",
    "#f6f4cf",
    "#f4eabb",
    "#f4d4b3",
    "#f4cab1",
    "#f5c1ab",
    "#f4bfa0",
    "#f5bb95",
  ];

  button.innerHTML = "...";
  let fun = document.getElementsByClassName("the-fun")[0];
  document.body.style.backgroundColor =
    colours[Math.floor(Math.random() * colours.length)].toUpperCase();
  const bored = fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.activity);
      document.getElementsByClassName("the-fun")[0].innerHTML = data.activity;
      let info = (document.getElementsByClassName("moreinfo")[0].innerHTML =
        "<p class='moreinfo italic'>(loading AI-generated instructions, please wait...)</p>");

      const autocomplete = fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + very_safe_api_key,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "List of enumerated instructions to " + data.activity,
          temperature: 0,
          max_tokens: 500,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          let info = document.getElementsByClassName("moreinfo")[0];
          info.innerHTML = "";
          data.choices[0].text.split("\n").forEach((instruction) => {
            if (instruction !== "") {
              console.log(instruction);
              let p = document.createElement("p");
              p.innerHTML = instruction;
              p.setAttribute("class", "moreinfo");
              info.innerHTML += p.outerHTML;
              button.innerHTML =
                "do something " +
                options[Math.floor(Math.random() * options.length)];
            }
          });
        });
    });
});

//event listener on keypress
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        button.click();
    }
    })

