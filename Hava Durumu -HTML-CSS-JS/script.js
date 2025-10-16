const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const apikey = API_KEY;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputval = input.value.trim();
  if (inputval === "") return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputval}&appid=${apikey}&units=metric&lang=tr`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Geçersiz şehir");
      return response.json();
    })
    .then((data) => {
      const { main, name, sys, weather } = data;

      // --- aynı şehir eklenmiş mi kontrol ---
      const listitems = Array.from(list.querySelectorAll(".city"));
      const cityExists = listitems.some(
        (el) =>
          el.querySelector(".city-name span").textContent.toLowerCase() ===
          name.toLowerCase()
      );

      if (cityExists) {
        msg.textContent = `Zaten ${name} şehrinin hava durumunu biliyorsun`;
        form.reset();
        input.focus();
        return;
      }

      // --- yeni şehir ekleme ---
      const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
      const li = document.createElement("li");
      li.classList.add("city");

      li.innerHTML = `
        <h2 class="city-name" data-name="${name}, ${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}°C</div>
        <figure>
          <img src="${icon}" alt="${weather[0].description}" />
          <figcaption>${weather[0].description}</figcaption>
        </figure>
      `;

      list.appendChild(li);
      msg.textContent = "";
      form.reset();
      input.focus();
    })
    .catch(() => {
      msg.textContent = "Lütfen geçerli bir şehir arayın";
    });
});
