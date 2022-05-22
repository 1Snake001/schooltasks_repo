// TODO Each time you restart the search, the previous results (if any) should be cleared
const searchForm = document.querySelector("#search-form");

const backendUrl = "http://localhost:5000";

const queryTableMapping = ["license", "brand", "model", "color", "year"];

const searchEndpoont = backendUrl + "/search";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  form.checkValidity();
  form.reportValidity();
  console.log(form);
  const licensePlate = document.getElementById("license-plate").value;
  const selectedRadio = document.querySelector("[name=filter]:checked");

  const searchParamsValues = {};

  if (licensePlate.length > 0) {
    searchParamsValues["q"] = licensePlate;
  }

  if (selectedRadio !== null) {
    searchParamsValues[selectedRadio.value] = 1;
  }

  const queryParams = new URLSearchParams(searchParamsValues);
  const url = searchEndpoont + "?" + queryParams.toString();

  fetch(url)
    .then((response) => {
      if(response.status == 200){
        return response.json();
      }else{
        throw new Error(response.statusText);
      }
    })
    .then(handleRisponse)
    .catch(err =>{
      const errorElement = document.getElementById('form-error');
      errorElement.textContent = err.message;
      errorElement.classList.remove('d-none');
    })
});

function handleRisponse(data) {
  const tbody = document.querySelector("#search-result tbody");
  tbody.innerHTML = "";
  const queryResults = data.data;

  if (queryResults.length > 0) {
    queryResults.forEach((row) => {
      const rowElement = document.createElement("tr");
      queryTableMapping.forEach((key) => {
        const tdElement = document.createElement("td");
        tdElement.textContent = "";
        if (row[key] !== undefined) {
          if (key === "brand") {
            const brandLink = document.createElement("a");
            brandLink.textContent = row[key];
            brandLink.setAttribute("href", "#");
            brandLink.addEventListener("click", (event) => {

              // http.../search/Audi
              const branUrl = searchEndpoont + "/" + event.target.textContent;
              fetch(branUrl)
                .then((response) => response.json())
                .then(handleRisponse);
            });
            tdElement.appendChild(brandLink);
          } else {
            tdElement.textContent = row[key];
          }
        }
        rowElement.appendChild(tdElement);
      });
      tbody.appendChild(rowElement);
    });
  }
}