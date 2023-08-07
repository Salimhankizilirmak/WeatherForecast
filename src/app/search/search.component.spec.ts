const url = 'https://api.openweathermap.org/data/2.5/';
const key = '3f40c2955752bab42ef9f84088cae0af';

const setQuery = (e: KeyboardEvent) => {
  if (e.keyCode === 13) {
    getResult((e.target as HTMLInputElement).value);
  }
};

const getResult = (cityName: string) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then(weather => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result: any) => {
  console.log(result);

  let city = document.querySelector('.city') as HTMLElement;
  city.innerText = `${result.name}, ${result.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.date') as HTMLElement;
  date.innerText = dateBuilder(now);

  let hour = document.querySelector('.hour') as HTMLElement;
  hour.innerText = getHour(now);

  let temp = document.querySelector('.temp') as HTMLElement;
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector('.description') as HTMLElement;
  desc.innerText = `${result.weather[0].description}`;

  let minmax = document.querySelector('.temprange') as HTMLElement;
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

  let humidity = document.querySelector('.humidity') as HTMLElement;
  humidity.innerText = `Nem : ${result.main.humidity}%`;

  let wind = document.querySelector('.wind') as HTMLElement;
  wind.innerText = `Rüzgar : ${result.wind.speed}m/s N`;
};

const dateBuilder = (d: Date) => {
  let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

const getHour = (h: Date) => {
  let hour = h.getHours();
  let minute = h.getMinutes();

  return `${hour}:${minute}`;
};

const searchBar = document.getElementById('searchBar') as HTMLInputElement;
searchBar.addEventListener('keypress', setQuery);
