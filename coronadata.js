window.addEventListener('load', () =>{

	let totalConfirmed = document.querySelector("h1.confirmed");
	let totalDeaths = document.querySelector("h1.deaths");
	let totalRecovered = document.querySelector("h1.recovered");
	let newCases = document.querySelector("h1.newCases");



	const api = "https://api.covid19api.com/summary";

	fetch(api)
        .then(response => {
         return response.json();
         })
                .then(result => {
                    // console.log(result);

                    //total confirmed
                    totalConfirmed.innerHTML = result.Countries[175].TotalConfirmed;
                    console.log(totalConfirmed);

                    //total deaths
                    totalDeaths.textContent = result.Countries[175].TotalDeaths;
                    console.log(totalDeaths);

                    //total confirmed
                    totalRecovered.textContent = result.Countries[175].TotalRecovered;
                    console.log(totalRecovered);

                    //total confirmed
                    newCases.textContent = result.Countries[175].NewConfirmed;
                    console.log(newCases);
                })





})