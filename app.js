const rickResult = document.querySelector("#rickResult");
const errorDOM = document.querySelector("#errorDOM");
const loadingDOM = document.querySelector("#loadingDOM");

const fakeLoading = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    });

const getRick = async () => {
    loadingDOM.textContent = "Cargando info...";
    await fakeLoading();
    try {
        const response = await fetch(
            "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) throw "Error al solicitar la API";
        const data = await response.json();
        data.results.forEach((personaje) => {
            rickResult.innerHTML += `
            <img src="${personaje.image}">
            <h2>${personaje.name}</h2>
            `;
        });
    } catch (error) {
        console.log(error);
        errorDOM.innerHTML = `<p>Error al consumir la API</p>`;
    } finally {
        console.log("siempre");
        loadingDOM.textContent = "";
    }
};

getRick();

const getAPIJSON = async () => {
    const response = await fetch("api.json");
    const data = await response.json();
    console.log(data);
};

getAPIJSON();
