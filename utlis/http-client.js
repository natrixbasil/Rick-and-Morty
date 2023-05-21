import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: { 'Accept': 'application/json' },
});

axios.interceptors.request.use(
  function (config) {
    // Здесь можете сделать что-нибудь с перед отправкой запроса
    return config;
  },
  function (error) {
    // Сделайте что-нибудь с ошибкой запроса
    return Promise.reject(error);
  }
);

// Добавляем перехват ответов
axios.interceptors.response.use(
  function (response) {
    // Любой код состояния, находящийся в диапазоне 2xx, вызывает срабатывание этой функции
    // Здесь можете сделать что-нибудь с ответом
    return response;
  },
  function (error) {
    // Любые коды состояния, выходящие за пределы диапазона 2xx, вызывают срабатывание этой функции
    // Здесь можете сделать что-то с ошибкой ответа
    return Promise.reject(error);
  }
);
