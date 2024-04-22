<script>
let inE = document.getElementById("userInput");
let pE = document.getElementById("fact");
let sE = document.getElementById("spinner");

function fun(event) {
  let url = "https://apis.ccbp.in/numbers-fact?number=" + event.target.value;
  let options = {
    method: "GET",
  };
  sE.classList.remove("d-none");
  pE.classList.add("d-none");
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      pE.classList.remove("d-none");
      sE.classList.add("d-none");
      pE.textContent = "";
      console.log(data);
      let { fact } = data;
      pE.textContent = fact;
      // sE.classList.add("d-none");
    });
}
inE.addEventListener("keyup", fun);
</script>