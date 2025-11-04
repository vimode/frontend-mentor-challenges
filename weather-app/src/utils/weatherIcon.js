const WMO_CODES = {
  0: { src: "./assets/images/icon-sunny.webp", alt_text: "Sunny " },
  1: {
    src: "./assets/images/icon-partly-cloudy.webp",
    alt_text: "Partly Cloudy",
  },
  2: {
    src: "./assets/images/icon-partly-cloudy.webp",
    alt_text: "Partly Cloudy",
  },
  3: { src: "./assets/images/icon-overcast.webp", alt_text: "Overcast" },
  45: { src: "./assets/images/icon-fog.webp", alt_text: "Fog" },
  48: { src: "./assets/images/icon-fog.webp", alt_text: "Fog" },
  51: { src: "./assets/images/icon-drizzle.webp", alt_text: "Drizzle" },
  53: { src: "./assets/images/icon-drizzle.webp", alt_text: "Drizzle" },
  55: { src: "./assets/images/icon-drizzle.webp", alt_text: "Drizzle" },
  56: { src: "./assets/images/icon-drizzle.webp", alt_text: "Drizzle" },
  57: { src: "./assets/images/icon-drizzle.webp", alt_text: "Drizzle" },
  61: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  63: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  65: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  66: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  67: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  71: { src: "./assets/images/icon-snow.webp", alt_text: "Snow" },
  73: { src: "./assets/images/icon-snow.webp", alt_text: "Snow" },
  75: { src: "./assets/images/icon-snow.webp", alt_text: "Snow" },
  77: { src: "./assets/images/icon-snow.webp", alt_text: "Snow" },
  80: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  81: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  82: { src: "./assets/images/icon-rain.webp", alt_text: "Rain" },
  85: { src: "./assets/images/icon-snow.webp", alt_text: "Snow" },
  86: { src: "./assets/images/icon-snow.webp", alt_text: "Snow" },
  95: { src: "./assets/images/icon-storm.webp", alt_text: "Storm" },
  96: { src: "./assets/images/icon-storm.webp", alt_text: "Storm" },
  99: { src: "./assets/images/icon-storm.webp", alt_text: "Storm" },
};

export function weatherIcon(code) {
  return WMO_CODES[code];
}
