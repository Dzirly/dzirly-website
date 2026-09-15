/* ========================================
   WEATHER TICKER BANNER - JAVASCRIPT
   ======================================== */

/**
 * Données des villes algériennes avec leurs températures
 */
const algerianCities = [
  { ar: 'الجزائر', fr: 'Alger', temp: 28, emoji: '☀️' },
  { ar: 'وهران', fr: 'Oran', temp: 26, emoji: '⛅' },
  { ar: 'قسنطينة', fr: 'Constantine', temp: 25, emoji: '🌤️' },
  { ar: 'عنابة', fr: 'Annaba', temp: 27, emoji: '☀️' },
  { ar: 'الجيزة', fr: 'Giza', temp: 30, emoji: '🔥' },
  { ar: 'بجاية', fr: 'Bejaia', temp: 24, emoji: '⛅' },
  { ar: 'تلمسان', fr: 'Tlemcen', temp: 23, emoji: '🌤️' },
  { ar: 'سطيف', fr: 'Sétif', temp: 22, emoji: '☁️' },
  { ar: 'تيزي وزو', fr: 'Tizi Ouzou', temp: 21, emoji: '☁️' },
  { ar: 'البليدة', fr: 'Blida', temp: 29, emoji: '☀️' },
  { ar: 'المدية', fr: 'Médéa', temp: 20, emoji: '⛅' },
  { ar: 'بسكرة', fr: 'Biskra', temp: 32, emoji: '🔥' },
  { ar: 'غرداية', fr: 'Ghardaia', temp: 34, emoji: '🔥' },
  { ar: 'ورقلة', fr: 'Ouargla', temp: 35, emoji: '🔥' },
  { ar: 'تمنراست', fr: 'Tamanrasset', temp: 33, emoji: '🔥' },
  { ar: 'أدرار', fr: 'Adrar', temp: 31, emoji: '☀️' },
  { ar: 'إليزي', fr: 'Illizi', temp: 36, emoji: '🔥' },
  { ar: 'عين صالح', fr: 'Ain Salah', temp: 37, emoji: '🔥' },
  { ar: 'جانت', fr: 'Djanet', temp: 30, emoji: '☀️' },
  { ar: 'الأغواط', fr: 'Laghouat', temp: 28, emoji: '☀️' },
];

/**
 * Initialise le ticker en créant les éléments DOM
 */
function initWeatherTicker() {
  const tickerContent = document.getElementById('tickerContent');

  // Vérifier que l'élément existe
  if (!tickerContent) {
    console.error('[WeatherTicker] Erreur : #tickerContent non trouvé');
    return;
  }

  // Créer les items du ticker
  algerianCities.forEach((city) => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.setAttribute('data-city', city.fr);
    item.innerHTML = `
      <div class="ticker-city">
        <div class="ticker-city-ar">${city.ar}</div>
        <div class="ticker-city-fr">${city.fr}</div>
      </div>
      <div class="ticker-weather">
        <span class="ticker-emoji">${city.emoji}</span>
        <span class="ticker-temp">${city.temp}°</span>
      </div>
    `;
    tickerContent.appendChild(item);
  });

  // Dupliquer le contenu pour un défilement infini fluide
  const originalItems = tickerContent.innerHTML;
  tickerContent.innerHTML += originalItems;

  console.log('[WeatherTicker] Initialisé avec ' + algerianCities.length + ' villes');
}

/**
 * Initialiser au chargement du DOM
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWeatherTicker);
} else {
  initWeatherTicker();
}

/**
 * Fonctions utiles pour le debugging
 */
window.debugWeatherTicker = function() {
  const ticker = document.querySelector('.weather-ticker');
  const content = document.getElementById('tickerContent');
  const items = document.querySelectorAll('.ticker-item');

  console.group('[WeatherTicker] Debug Info');
  console.log('Ticker visible:', ticker !== null);
  console.log('Nombre d\'items:', items.length);
  console.log('Villes:', algerianCities.length);
  console.log('Items dans le DOM:', items);
  console.table(algerianCities);
  console.groupEnd();
};

/**
 * Changer la vitesse du défilement
 * Usage : window.setTickerSpeed('45s')
 */
window.setTickerSpeed = function(duration) {
  const content = document.getElementById('tickerContent');
  if (content) {
    content.style.animation = `scroll-left ${duration} linear infinite`;
    console.log('[WeatherTicker] Vitesse changée à ' + duration);
  }
};

/**
 * Mettre en pause/reprendre
 */
window.toggleTickerPause = function() {
  const content = document.getElementById('tickerContent');
  if (content) {
    const isPaused = content.style.animationPlayState === 'paused';
    content.style.animationPlayState = isPaused ? 'running' : 'paused';
    console.log('[WeatherTicker] ' + (isPaused ? 'Reprise' : 'Pause'));
  }
};
