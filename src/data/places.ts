// Pin colours, shared by the map and its legend.
export const VEG_COLOR = "#2E7D32";
export const NON_VEG_COLOR = "#7A4A2A";

export interface Place {
  lat: number;
  lng: number;
  area: string;
  veg?: boolean;
}

/**
 * Where each reviewed place is, for the map on the home page. Keys match `place` in blogPosts.ts.
 * `veg: true` marks pure-veg spots (green pin); everything else gets a brown pin.
 * Coordinates are from Google Maps. Places at the same coordinates share one pin.
 */
// Chimichurri and PizzaExpress are in the same building (Castalia A, The Walk).
const THE_WALK = { lat: 19.25558, lng: 72.98451, area: "The Walk, Hiranandani Estate, Thane" };

export const places: Record<string, Place> = {
  Frullato: { lat: 19.25862, lng: 72.98471, area: "Hiranandani Estate, Thane", veg: true },
  "Chimichurri: The Asian Kitchen": THE_WALK,
  PizzaExpress: THE_WALK,
  "Blue Tokai Coffee Roasters": { lat: 19.2611, lng: 72.98512, area: "Hiranandani Estate, Thane" },
  Maiz: { lat: 19.25501, lng: 72.98409, area: "Hiranandani Estate, Thane" },
  "Ora Kitchen & Bar": { lat: 19.25156, lng: 72.98289, area: "Hiranandani Estate, Thane" },
  "Hotel Malvan": { lat: 19.19297, lng: 72.96774, area: "Panchpakhadi, Thane" },
  "Mahabi Cafe Patisserie Gelato": { lat: 19.24029, lng: 72.96929, area: "Manpada, Thane" },
  "Chinese Wok": { lat: 19.20919, lng: 72.97227, area: "Lakeshore Mall, Thane" },
  "Thane station": { lat: 19.18795, lng: 72.9756, area: "Sugarcane juice stall opposite Alok Hotel", veg: true },
  "Manas Jatra": { lat: 17.74793, lng: 73.999, area: "Varye, Satara" },
};
