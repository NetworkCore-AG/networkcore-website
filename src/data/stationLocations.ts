// Procedurally generated EV charging station locations
// Clustered around real cities/regions worldwide
// No China, only South Africa in Africa

interface Cluster {
  lat: number;
  lng: number;
  count: number;
  spread: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

// Clusters whose sea lies to the east — bias points inland (west only).
const COASTAL_EAST = new Set([
  "41.39,2.17",   // Barcelona
  "39.47,-0.38",  // Valencia
]);

function generatePoints(clusters: Cluster[], seed: number) {
  const rng = seededRandom(seed);
  const points: { lat: number; lng: number }[] = [];
  for (const c of clusters) {
    const key = `${c.lat},${c.lng}`;
    const inlandOnly = COASTAL_EAST.has(key);
    const spread = inlandOnly ? Math.min(c.spread, 0.25) : c.spread;
    for (let i = 0; i < c.count; i++) {
      const angle = rng() * Math.PI * 2;
      const r = Math.sqrt(rng()) * spread;
      const dLat = r * Math.sin(angle);
      let dLng = r * Math.cos(angle);
      if (inlandOnly && dLng > 0) dLng = -dLng; // mirror east offsets to west
      points.push({ lat: c.lat + dLat, lng: c.lng + dLng });
    }
  }
  return points;
}


const europeClusters: Cluster[] = [
  // Germany
  { lat: 52.52, lng: 13.405, count: 40, spread: 0.5 },
  { lat: 48.14, lng: 11.58, count: 35, spread: 0.5 },
  { lat: 53.55, lng: 9.99, count: 30, spread: 0.5 },
  { lat: 50.11, lng: 8.68, count: 30, spread: 0.5 },
  { lat: 50.94, lng: 6.96, count: 25, spread: 0.4 },
  { lat: 48.78, lng: 9.18, count: 25, spread: 0.4 },
  { lat: 51.23, lng: 6.77, count: 20, spread: 0.4 },
  { lat: 51.34, lng: 12.37, count: 20, spread: 0.4 },
  { lat: 51.05, lng: 13.74, count: 20, spread: 0.4 },
  { lat: 52.38, lng: 9.73, count: 15, spread: 0.3 },
  { lat: 49.45, lng: 11.08, count: 15, spread: 0.3 },
  { lat: 53.08, lng: 8.8, count: 10, spread: 0.3 },
  { lat: 49.01, lng: 8.4, count: 10, spread: 0.3 },
  { lat: 50.74, lng: 7.1, count: 10, spread: 0.3 },
  { lat: 51.51, lng: 7.47, count: 15, spread: 0.4 },
  { lat: 51.46, lng: 7.01, count: 15, spread: 0.4 },
  { lat: 50.5, lng: 10.0, count: 40, spread: 0.5 },
  { lat: 49.0, lng: 9.5, count: 30, spread: 0.5 },
  { lat: 52.0, lng: 11.0, count: 25, spread: 0.5 },
  { lat: 54.0, lng: 10.5, count: 15, spread: 0.5 },
  // France
  { lat: 48.86, lng: 2.35, count: 50, spread: 0.5 },
  { lat: 45.76, lng: 4.84, count: 25, spread: 0.5 },
  { lat: 43.3, lng: 5.37, count: 20, spread: 0.5 },
  { lat: 43.71, lng: 7.26, count: 15, spread: 0.4 },
  { lat: 44.84, lng: -0.58, count: 15, spread: 0.4 },
  { lat: 47.22, lng: -1.55, count: 15, spread: 0.4 },
  { lat: 43.6, lng: 1.44, count: 15, spread: 0.4 },
  { lat: 48.58, lng: 7.75, count: 12, spread: 0.3 },
  { lat: 43.61, lng: 3.88, count: 10, spread: 0.3 },
  { lat: 48.11, lng: -1.68, count: 10, spread: 0.3 },
  { lat: 46.0, lng: 2.5, count: 40, spread: 0.5 },
  // UK
  { lat: 51.51, lng: -0.13, count: 50, spread: 0.5 },
  { lat: 53.48, lng: -2.24, count: 25, spread: 0.5 },
  { lat: 52.49, lng: -1.89, count: 20, spread: 0.4 },
  { lat: 55.95, lng: -3.19, count: 15, spread: 0.4 },
  { lat: 53.8, lng: -1.55, count: 15, spread: 0.4 },
  { lat: 51.45, lng: -2.59, count: 12, spread: 0.3 },
  { lat: 50.72, lng: -1.88, count: 10, spread: 0.3 },
  { lat: 54.97, lng: -1.61, count: 10, spread: 0.3 },
  { lat: 51.48, lng: -3.18, count: 10, spread: 0.3 },
  { lat: 52.5, lng: -1.0, count: 30, spread: 0.5 },
  // Netherlands
  { lat: 52.37, lng: 4.9, count: 30, spread: 0.4 },
  { lat: 51.92, lng: 4.48, count: 20, spread: 0.4 },
  { lat: 52.09, lng: 5.12, count: 15, spread: 0.3 },
  { lat: 51.44, lng: 5.47, count: 12, spread: 0.3 },
  { lat: 52.22, lng: 6.89, count: 10, spread: 0.3 },
  { lat: 52.0, lng: 5.0, count: 25, spread: 0.5 },
  // Belgium
  { lat: 50.85, lng: 4.35, count: 20, spread: 0.4 },
  { lat: 51.22, lng: 4.4, count: 15, spread: 0.3 },
  { lat: 51.05, lng: 3.73, count: 10, spread: 0.3 },
  { lat: 50.63, lng: 5.57, count: 8, spread: 0.3 },
  // Italy
  { lat: 41.9, lng: 12.5, count: 30, spread: 0.5 },
  { lat: 45.46, lng: 9.19, count: 30, spread: 0.5 },
  { lat: 45.07, lng: 7.69, count: 15, spread: 0.4 },
  { lat: 43.77, lng: 11.26, count: 15, spread: 0.3 },
  { lat: 40.85, lng: 14.27, count: 15, spread: 0.4 },
  { lat: 44.49, lng: 11.34, count: 12, spread: 0.3 },
  { lat: 45.44, lng: 12.32, count: 10, spread: 0.3 },
  { lat: 43.0, lng: 12.0, count: 25, spread: 0.5 },
  // Spain
  { lat: 40.42, lng: -3.7, count: 30, spread: 0.5 },
  { lat: 41.39, lng: 2.17, count: 25, spread: 0.5 },
  { lat: 39.47, lng: -0.38, count: 15, spread: 0.4 },
  { lat: 37.39, lng: -5.99, count: 12, spread: 0.4 },
  { lat: 36.72, lng: -4.42, count: 10, spread: 0.3 },
  { lat: 43.26, lng: -2.93, count: 10, spread: 0.3 },
  { lat: 40.0, lng: -3.0, count: 20, spread: 0.5 },
  // Portugal
  { lat: 38.72, lng: -9.14, count: 20, spread: 0.4 },
  { lat: 41.16, lng: -8.63, count: 15, spread: 0.4 },
  { lat: 39.5, lng: -8.5, count: 10, spread: 0.5 },
  // Switzerland
  { lat: 47.38, lng: 8.54, count: 20, spread: 0.3 },
  { lat: 46.2, lng: 6.14, count: 15, spread: 0.3 },
  { lat: 46.95, lng: 7.45, count: 12, spread: 0.3 },
  { lat: 47.0, lng: 8.0, count: 15, spread: 0.5 },
  // Austria
  { lat: 48.21, lng: 16.37, count: 20, spread: 0.4 },
  { lat: 47.07, lng: 15.44, count: 12, spread: 0.3 },
  { lat: 47.81, lng: 13.06, count: 10, spread: 0.3 },
  { lat: 47.27, lng: 11.4, count: 8, spread: 0.3 },
  // Scandinavia
  { lat: 59.33, lng: 18.07, count: 20, spread: 0.5 },
  { lat: 57.71, lng: 11.97, count: 15, spread: 0.4 },
  { lat: 55.6, lng: 13.0, count: 12, spread: 0.3 },
  { lat: 59.91, lng: 10.75, count: 20, spread: 0.5 },
  { lat: 60.39, lng: 5.32, count: 12, spread: 0.3 },
  { lat: 63.43, lng: 10.4, count: 8, spread: 0.3 },
  { lat: 55.68, lng: 12.57, count: 15, spread: 0.4 },
  { lat: 56.16, lng: 10.2, count: 10, spread: 0.3 },
  { lat: 60.17, lng: 24.94, count: 15, spread: 0.4 },
  { lat: 61.5, lng: 23.79, count: 8, spread: 0.3 },
  // Poland
  { lat: 52.23, lng: 21.01, count: 20, spread: 0.5 },
  { lat: 50.06, lng: 19.95, count: 15, spread: 0.4 },
  { lat: 51.76, lng: 19.46, count: 12, spread: 0.3 },
  { lat: 51.11, lng: 17.04, count: 12, spread: 0.3 },
  { lat: 54.35, lng: 18.65, count: 10, spread: 0.3 },
  { lat: 52.0, lng: 20.0, count: 15, spread: 0.5 },
  // Czech, Hungary, Romania, Greece, Ireland, Balkans, Baltics
  { lat: 50.08, lng: 14.44, count: 15, spread: 0.4 },
  { lat: 49.2, lng: 16.61, count: 10, spread: 0.3 },
  { lat: 47.5, lng: 19.04, count: 15, spread: 0.4 },
  { lat: 44.43, lng: 26.1, count: 12, spread: 0.4 },
  { lat: 46.77, lng: 23.59, count: 8, spread: 0.3 },
  { lat: 37.98, lng: 23.73, count: 15, spread: 0.4 },
  { lat: 40.63, lng: 22.94, count: 8, spread: 0.3 },
  { lat: 53.35, lng: -6.26, count: 12, spread: 0.4 },
  { lat: 51.9, lng: -8.47, count: 6, spread: 0.3 },
  { lat: 45.82, lng: 15.98, count: 8, spread: 0.3 },
  { lat: 46.06, lng: 14.51, count: 8, spread: 0.3 },
  { lat: 48.15, lng: 17.11, count: 8, spread: 0.3 },
  { lat: 59.44, lng: 24.75, count: 6, spread: 0.3 },
  { lat: 56.95, lng: 24.11, count: 6, spread: 0.3 },
  { lat: 54.69, lng: 25.28, count: 6, spread: 0.3 },
  { lat: 42.7, lng: 23.32, count: 6, spread: 0.3 },
];

const usaClusters: Cluster[] = [
  { lat: 40.71, lng: -74.01, count: 80, spread: 0.5 },
  { lat: 40.75, lng: -73.87, count: 40, spread: 0.5 },
  { lat: 40.65, lng: -73.95, count: 30, spread: 0.3 },
  { lat: 40.85, lng: -73.87, count: 20, spread: 0.3 },
  { lat: 40.58, lng: -74.15, count: 15, spread: 0.3 },
  { lat: 40.73, lng: -74.17, count: 25, spread: 0.4 },
  { lat: 42.36, lng: -71.06, count: 40, spread: 0.5 },
  { lat: 39.95, lng: -75.17, count: 35, spread: 0.5 },
  { lat: 38.91, lng: -77.04, count: 40, spread: 0.5 },
  { lat: 39.29, lng: -76.61, count: 20, spread: 0.4 },
  { lat: 25.76, lng: -80.19, count: 35, spread: 0.5 },
  { lat: 26.12, lng: -80.14, count: 15, spread: 0.3 },
  { lat: 28.54, lng: -81.38, count: 25, spread: 0.5 },
  { lat: 27.95, lng: -82.46, count: 20, spread: 0.4 },
  { lat: 30.33, lng: -81.66, count: 12, spread: 0.3 },
  { lat: 33.75, lng: -84.39, count: 30, spread: 0.5 },
  { lat: 35.23, lng: -80.84, count: 15, spread: 0.4 },
  { lat: 35.78, lng: -78.64, count: 12, spread: 0.3 },
  { lat: 36.85, lng: -75.98, count: 10, spread: 0.3 },
  { lat: 32.78, lng: -79.93, count: 8, spread: 0.3 },
  { lat: 41.88, lng: -87.63, count: 50, spread: 0.5 },
  { lat: 42.33, lng: -83.05, count: 25, spread: 0.5 },
  { lat: 44.98, lng: -93.27, count: 20, spread: 0.4 },
  { lat: 39.1, lng: -84.51, count: 15, spread: 0.4 },
  { lat: 39.77, lng: -86.16, count: 15, spread: 0.4 },
  { lat: 43.04, lng: -87.91, count: 12, spread: 0.3 },
  { lat: 38.63, lng: -90.2, count: 15, spread: 0.4 },
  { lat: 41.5, lng: -81.69, count: 12, spread: 0.3 },
  { lat: 39.96, lng: -82.99, count: 10, spread: 0.3 },
  { lat: 40.44, lng: -79.99, count: 12, spread: 0.3 },
  { lat: 29.76, lng: -95.37, count: 40, spread: 0.5 },
  { lat: 32.78, lng: -96.8, count: 35, spread: 0.5 },
  { lat: 30.27, lng: -97.74, count: 25, spread: 0.5 },
  { lat: 29.42, lng: -98.49, count: 20, spread: 0.4 },
  { lat: 32.75, lng: -97.33, count: 15, spread: 0.3 },
  { lat: 31.76, lng: -106.44, count: 8, spread: 0.3 },
  { lat: 34.05, lng: -118.24, count: 70, spread: 0.5 },
  { lat: 33.87, lng: -118.0, count: 30, spread: 0.5 },
  { lat: 34.2, lng: -118.6, count: 20, spread: 0.4 },
  { lat: 37.77, lng: -122.42, count: 50, spread: 0.5 },
  { lat: 37.34, lng: -121.89, count: 30, spread: 0.5 },
  { lat: 37.56, lng: -122.27, count: 20, spread: 0.3 },
  { lat: 47.61, lng: -122.33, count: 35, spread: 0.5 },
  { lat: 45.52, lng: -122.68, count: 25, spread: 0.5 },
  { lat: 32.72, lng: -117.16, count: 30, spread: 0.5 },
  { lat: 38.58, lng: -121.49, count: 15, spread: 0.4 },
  { lat: 39.74, lng: -104.99, count: 25, spread: 0.5 },
  { lat: 33.45, lng: -112.07, count: 20, spread: 0.5 },
  { lat: 36.17, lng: -115.14, count: 15, spread: 0.4 },
  { lat: 40.76, lng: -111.89, count: 15, spread: 0.4 },
  { lat: 35.08, lng: -106.65, count: 10, spread: 0.3 },
  { lat: 32.22, lng: -110.97, count: 8, spread: 0.3 },
  { lat: 43.62, lng: -116.21, count: 6, spread: 0.3 },
  { lat: 36.16, lng: -86.78, count: 15, spread: 0.4 },
  { lat: 35.15, lng: -90.05, count: 10, spread: 0.3 },
  { lat: 29.95, lng: -90.07, count: 15, spread: 0.4 },
  { lat: 34.73, lng: -92.33, count: 8, spread: 0.3 },
  { lat: 35.47, lng: -97.52, count: 10, spread: 0.3 },
  { lat: 37.69, lng: -97.34, count: 8, spread: 0.3 },
  { lat: 39.1, lng: -94.58, count: 12, spread: 0.3 },
  { lat: 21.31, lng: -157.86, count: 10, spread: 0.3 },
  { lat: 61.22, lng: -149.9, count: 5, spread: 0.3 },
  { lat: 37.0, lng: -80.0, count: 60, spread: 0.5 },
  { lat: 35.0, lng: -95.0, count: 50, spread: 0.5 },
  { lat: 38.0, lng: -115.0, count: 40, spread: 0.5 },
  { lat: 44.0, lng: -90.0, count: 30, spread: 0.5 },
  { lat: 30.0, lng: -85.0, count: 30, spread: 0.5 },
  { lat: 42.0, lng: -72.0, count: 25, spread: 0.5 },
  { lat: 46.0, lng: -120.0, count: 20, spread: 0.5 },
];

const latamClusters: Cluster[] = [
  { lat: -23.55, lng: -46.63, count: 80, spread: 0.5 },
  { lat: -22.91, lng: -43.17, count: 50, spread: 0.5 },
  { lat: -19.92, lng: -43.94, count: 25, spread: 0.5 },
  { lat: -15.79, lng: -47.88, count: 25, spread: 0.5 },
  { lat: -30.03, lng: -51.23, count: 20, spread: 0.5 },
  { lat: -25.43, lng: -49.27, count: 20, spread: 0.5 },
  { lat: -12.97, lng: -38.51, count: 20, spread: 0.5 },
  { lat: -8.05, lng: -34.87, count: 15, spread: 0.4 },
  { lat: -3.72, lng: -38.53, count: 15, spread: 0.4 },
  { lat: -22.9, lng: -47.06, count: 15, spread: 0.4 },
  { lat: -2.5, lng: -44.28, count: 10, spread: 0.3 },
  { lat: -3.12, lng: -60.02, count: 10, spread: 0.3 },
  { lat: -1.46, lng: -48.5, count: 10, spread: 0.3 },
  { lat: -16.68, lng: -49.26, count: 10, spread: 0.3 },
  { lat: -20.32, lng: -40.34, count: 8, spread: 0.3 },
  { lat: -27.6, lng: -48.55, count: 8, spread: 0.3 },
  { lat: -15.0, lng: -45.0, count: 60, spread: 0.5 },
  { lat: -22.0, lng: -48.0, count: 50, spread: 0.5 },
  // Mexico
  { lat: 19.43, lng: -99.13, count: 60, spread: 0.5 },
  { lat: 20.67, lng: -103.35, count: 25, spread: 0.5 },
  { lat: 25.67, lng: -100.31, count: 25, spread: 0.5 },
  { lat: 19.04, lng: -98.2, count: 15, spread: 0.4 },
  { lat: 20.97, lng: -89.62, count: 12, spread: 0.3 },
  { lat: 21.12, lng: -86.85, count: 10, spread: 0.3 },
  { lat: 32.63, lng: -115.45, count: 10, spread: 0.3 },
  { lat: 28.63, lng: -106.09, count: 8, spread: 0.3 },
  { lat: 22.15, lng: -100.98, count: 8, spread: 0.3 },
  { lat: 24.14, lng: -110.31, count: 6, spread: 0.3 },
  { lat: 23.0, lng: -102.0, count: 40, spread: 0.5 },
  // Argentina
  { lat: -34.6, lng: -58.38, count: 50, spread: 0.5 },
  { lat: -31.42, lng: -64.18, count: 15, spread: 0.4 },
  { lat: -32.95, lng: -60.65, count: 12, spread: 0.3 },
  { lat: -38.0, lng: -57.55, count: 8, spread: 0.3 },
  { lat: -26.82, lng: -65.2, count: 6, spread: 0.3 },
  { lat: -32.89, lng: -68.83, count: 8, spread: 0.3 },
  { lat: -34.0, lng: -62.0, count: 25, spread: 0.5 },
  // Chile
  { lat: -33.45, lng: -70.67, count: 40, spread: 0.5 },
  { lat: -36.82, lng: -73.04, count: 12, spread: 0.4 },
  { lat: -33.04, lng: -71.63, count: 10, spread: 0.3 },
  { lat: -29.91, lng: -71.25, count: 6, spread: 0.3 },
  { lat: -39.81, lng: -73.24, count: 6, spread: 0.3 },
  { lat: -35.0, lng: -71.0, count: 20, spread: 0.5 },
  // Colombia
  { lat: 4.71, lng: -74.07, count: 35, spread: 0.5 },
  { lat: 6.25, lng: -75.56, count: 20, spread: 0.4 },
  { lat: 3.43, lng: -76.52, count: 15, spread: 0.4 },
  { lat: 10.39, lng: -75.51, count: 10, spread: 0.3 },
  { lat: 7.12, lng: -73.12, count: 8, spread: 0.3 },
  { lat: 5.0, lng: -74.5, count: 20, spread: 0.5 },
  // Peru
  { lat: -12.05, lng: -77.04, count: 30, spread: 0.5 },
  { lat: -13.52, lng: -71.97, count: 8, spread: 0.3 },
  { lat: -16.41, lng: -71.54, count: 8, spread: 0.3 },
  // Others
  { lat: 10.49, lng: -66.88, count: 15, spread: 0.5 },
  { lat: 10.07, lng: -69.32, count: 6, spread: 0.3 },
  { lat: -0.18, lng: -78.47, count: 15, spread: 0.4 },
  { lat: -2.17, lng: -79.92, count: 12, spread: 0.3 },
  { lat: -34.88, lng: -56.16, count: 12, spread: 0.4 },
  { lat: -25.26, lng: -57.58, count: 8, spread: 0.3 },
  { lat: -16.49, lng: -68.12, count: 6, spread: 0.3 },
  { lat: -17.78, lng: -63.18, count: 6, spread: 0.3 },
  { lat: 9.93, lng: -84.08, count: 10, spread: 0.3 },
  { lat: 8.98, lng: -79.52, count: 10, spread: 0.3 },
  { lat: 14.63, lng: -90.51, count: 6, spread: 0.3 },
  { lat: 13.69, lng: -89.19, count: 5, spread: 0.3 },
  { lat: 12.11, lng: -86.27, count: 5, spread: 0.3 },
  { lat: 18.47, lng: -69.93, count: 8, spread: 0.3 },
  { lat: 18.97, lng: -72.34, count: 5, spread: 0.3 },
  { lat: 18.11, lng: -77.3, count: 5, spread: 0.3 },
  { lat: 23.13, lng: -82.38, count: 5, spread: 0.3 },
  { lat: 18.47, lng: -66.11, count: 8, spread: 0.3 },
  { lat: 10.5, lng: -61.31, count: 5, spread: 0.3 },
];

const otherClusters: Cluster[] = [
  // South Africa
  { lat: -33.93, lng: 18.42, count: 25, spread: 0.5 },
  { lat: -26.2, lng: 28.05, count: 30, spread: 0.5 },
  { lat: -29.86, lng: 31.02, count: 12, spread: 0.4 },
  { lat: -25.75, lng: 28.19, count: 10, spread: 0.3 },
  { lat: -33.96, lng: 25.6, count: 6, spread: 0.3 },
  { lat: -29.12, lng: 26.21, count: 5, spread: 0.3 },
  { lat: -28.0, lng: 26.0, count: 15, spread: 0.5 },
  // Middle East
  { lat: 25.2, lng: 55.27, count: 15, spread: 0.4 },
  { lat: 24.47, lng: 54.37, count: 10, spread: 0.3 },
  { lat: 25.29, lng: 51.53, count: 8, spread: 0.3 },
  { lat: 26.22, lng: 50.59, count: 6, spread: 0.3 },
  { lat: 23.59, lng: 58.38, count: 5, spread: 0.3 },
  { lat: 24.71, lng: 46.68, count: 10, spread: 0.4 },
  { lat: 21.49, lng: 39.19, count: 6, spread: 0.3 },
  { lat: 31.95, lng: 35.93, count: 8, spread: 0.3 },
  { lat: 32.07, lng: 34.77, count: 12, spread: 0.3 },
  // India
  { lat: 19.08, lng: 72.88, count: 25, spread: 0.5 },
  { lat: 28.61, lng: 77.21, count: 25, spread: 0.5 },
  { lat: 12.97, lng: 77.59, count: 20, spread: 0.5 },
  { lat: 13.08, lng: 80.27, count: 15, spread: 0.4 },
  { lat: 17.39, lng: 78.49, count: 15, spread: 0.4 },
  { lat: 22.57, lng: 88.36, count: 12, spread: 0.4 },
  { lat: 23.02, lng: 72.57, count: 12, spread: 0.4 },
  { lat: 18.52, lng: 73.86, count: 10, spread: 0.3 },
  { lat: 26.85, lng: 80.95, count: 8, spread: 0.3 },
  { lat: 21.17, lng: 72.83, count: 6, spread: 0.3 },
  { lat: 22.0, lng: 78.0, count: 30, spread: 0.5 },
  // Japan
  { lat: 35.68, lng: 139.69, count: 30, spread: 0.5 },
  { lat: 34.69, lng: 135.5, count: 20, spread: 0.5 },
  { lat: 35.18, lng: 136.91, count: 12, spread: 0.3 },
  { lat: 43.06, lng: 141.35, count: 8, spread: 0.3 },
  { lat: 33.59, lng: 130.4, count: 8, spread: 0.3 },
  { lat: 34.39, lng: 132.46, count: 6, spread: 0.3 },
  { lat: 38.27, lng: 140.87, count: 6, spread: 0.3 },
  { lat: 36.0, lng: 138.0, count: 20, spread: 0.5 },
  // South Korea
  { lat: 37.57, lng: 126.98, count: 25, spread: 0.5 },
  { lat: 35.18, lng: 129.08, count: 12, spread: 0.3 },
  { lat: 35.87, lng: 128.6, count: 8, spread: 0.3 },
  { lat: 35.16, lng: 126.85, count: 6, spread: 0.3 },
  { lat: 36.35, lng: 127.38, count: 6, spread: 0.3 },
  // Southeast Asia
  { lat: 1.35, lng: 103.82, count: 15, spread: 0.3 },
  { lat: 3.14, lng: 101.69, count: 12, spread: 0.4 },
  { lat: 13.76, lng: 100.5, count: 15, spread: 0.5 },
  { lat: 14.6, lng: 120.98, count: 12, spread: 0.4 },
  { lat: -6.21, lng: 106.85, count: 15, spread: 0.5 },
  { lat: 21.03, lng: 105.85, count: 10, spread: 0.4 },
  { lat: 10.82, lng: 106.63, count: 10, spread: 0.4 },
  { lat: 16.87, lng: 96.2, count: 6, spread: 0.3 },
  { lat: 11.56, lng: 104.92, count: 5, spread: 0.3 },
  // Taiwan
  { lat: 25.03, lng: 121.57, count: 15, spread: 0.3 },
  { lat: 22.63, lng: 120.3, count: 8, spread: 0.3 },
  // Australia & NZ
  { lat: -33.87, lng: 151.21, count: 25, spread: 0.5 },
  { lat: -37.81, lng: 144.96, count: 20, spread: 0.5 },
  { lat: -27.47, lng: 153.03, count: 15, spread: 0.4 },
  { lat: -31.95, lng: 115.86, count: 12, spread: 0.4 },
  { lat: -34.93, lng: 138.6, count: 10, spread: 0.3 },
  { lat: -42.88, lng: 147.33, count: 5, spread: 0.3 },
  { lat: -35.28, lng: 149.13, count: 8, spread: 0.3 },
  { lat: -16.92, lng: 145.77, count: 5, spread: 0.3 },
  { lat: -36.85, lng: 174.76, count: 12, spread: 0.4 },
  { lat: -41.29, lng: 174.78, count: 8, spread: 0.3 },
  { lat: -43.53, lng: 172.64, count: 6, spread: 0.3 },
  // Canada
  { lat: 43.65, lng: -79.38, count: 25, spread: 0.5 },
  { lat: 45.5, lng: -73.57, count: 20, spread: 0.5 },
  { lat: 49.28, lng: -123.12, count: 20, spread: 0.5 },
  { lat: 51.05, lng: -114.07, count: 12, spread: 0.4 },
  { lat: 53.55, lng: -113.49, count: 10, spread: 0.3 },
  { lat: 45.42, lng: -75.69, count: 10, spread: 0.3 },
  { lat: 49.89, lng: -97.14, count: 8, spread: 0.3 },
  { lat: 44.65, lng: -63.57, count: 6, spread: 0.3 },
  { lat: 46.81, lng: -71.21, count: 6, spread: 0.3 },
  { lat: 48.45, lng: -89.26, count: 4, spread: 0.3 },
];

const allPoints = [
  ...generatePoints(europeClusters, 42),
  ...generatePoints(usaClusters, 137),
  ...generatePoints(latamClusters, 256),
  ...generatePoints(otherClusters, 789),
];

// Export as GeoJSON for use with Mapbox source layers
export const stationGeoJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: allPoints.map((p, i) => ({
    type: "Feature" as const,
    geometry: {
      type: "Point" as const,
      coordinates: [p.lng, p.lat],
    },
    properties: {
      id: i,
      active: i % 3 === 0, // ~33% are "active"
    },
  })),
};

// Legacy export for compatibility
export const stationLocations = allPoints;
