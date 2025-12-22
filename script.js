const products = [
    { id: 1, name: "Яблоко", description: "Свежее красное яблоко", price: 50, details: "Выращено в яблоневых садах Краснодарского края. Сорт: Антоновка.", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Хлеб", description: "Свежий пшеничный хлеб", price: 30, details: "Испечён сегодня утром из муки высшего сорта без добавок.", image:"https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Молоко", description: "1 литр молока", price: 60, details: "Свежесобранное молоко от местных фермеров, 3.2% жирности.", image: "https://images.unsplash.com/photo-1582515073490-399813a0eabd?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Яйца", description: "10 штук куриных яиц", price: 80, details: "От кур свободного выгула. Категория: С1.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Сыр", description: "200 г твёрдого сыра", price: 150, details: "Твёрдый сыр с выдержкой 6 месяцев, насыщенный вкус и аромат.", image: "https://images.unsplash.com/photo-1603398938378-b18306e6d317?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Мёд", description: "Банка натурального мёда", price: 250, details: "Мёд из луговых трав, без добавок и нагревания, проверен на качество.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
    { id: 7, name: "AydenWest", description: "tiktoker", price: 99999, details: "Best.", image: "https://photos.google.com/photo/AF1QipPvYXOUsPqRcW3sVoYon-Np1YVZubhtKXDp-pVm" },
    { id: 8, 
        name: "Raphinha", 
        description: "Ballon d'or owner",
        price: "priceless", 
        details: "2024/2025 legend.", 
        image: "Изображение WhatsApp 2025-11-21 в 17.11.18_3532d7de.jpg" },
    { id: 9, name: "Апельсин", description: "Свежий апельсин", price: 40, details: "Выращено в солнечной Испании, очень сочный.", image: "https://northeurope1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=200191&inputFormat=jpg&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!ycC73ZrHq0u7rA-oqu7ujmLUvRD5c51Il0Rsf_1OMEmuEnWAMjgLQIiP5FRr8Ppo%2Fitems%2F01ACVBHOIZSKVCXERV6VH2ZU6XRFQUIEEE%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiJkZGJiYzBjOS1jNzlhLTRiYWItYmJhYy0wZmE4YWFlZWVlOGUiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3NjAyOTIwMDAifQ.OxNAbnNoDCaXEfQPc1binNApM5CZseX5Rh711wkmimV42ac5QoHq7gG8Pn45Gax-7OLld_Svvf6OmKEXWXijrOD2eg0jWGHEFep3nI6dWyWN8CEVIe3YDtrg5VG55yFL6orqpxnz31HOM_TbmnF7CC2LHIJghyyvuKb2izB12btL5Ajwb7gWobvs1lUrvNQKk4-PrIiXJeLPSNvIBWgq-6bETMnKeGsiq_GGFPee1UtxdApIPyjrMajQZsiFRn73b8lfw4mumyfS9JoloNB_uCOt-k0aUJ93AQsvWMMW1F3JYFqQUOect5mSJWrBy11fCatclI8rVcdi9Vtj98zC1YdIcyAxQHci7Rwi1paLYdfx1tx2dWbrWZlKdpQMU6w9.1Wt-fPQcoz90RrpSHW-kA8vWMnPlNpswJ5kqtXt7rVY%26version%3DPublished&cb=63895337358&encodeFailures=1&width=421&height=914&action=Access" },
    { id: 10, name: "Кофе", description: "250 г молотого кофе", price: 350, details: "Арабика из Колумбии, средняя обжарка.", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80" },
    { id: 11, name: "Шоколад", description: "100 г тёмного шоколада", price: 120, details: "70% какао, не содержит ГМО и консерванты.", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=400&q=80" },
  
];

const productListEl = document.getElementById("product-list");

products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");

    productEl.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price} руб.</p>
        <button type="button">Подробнее</button>
        <div class="product-details">${product.details}</div>
    `;

    // Найдём кнопку и блок с деталями
    const btn = productEl.querySelector("button");
    const details = productEl.querySelector(".product-details");

    // Обработчик клика по кнопке
    btn.addEventListener("click", () => {
        const isVisible = details.style.display === "block";
        details.style.display = isVisible ? "none" : "block";
        btn.textContent = isVisible ? "Подробнее" : "Скрыть";
    });

    productListEl.appendChild(productEl);
});