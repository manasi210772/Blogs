/**
 * Where each reviewed place is, for the map on the home page. Keys match `place` in blogPosts.ts.
 * `veg: true` marks pure-veg spots (green pin); everything else gets a brown pin.
 *
 * The six Hiranandani Estate spots are spread a little around the estate centre (19.2549, 72.9821)
 * so their pins don't overlap; swap in exact coordinates from Google Maps when you have them.
 */
// Pin colours, shared by the map and its legend.
export const VEG_COLOR = "#2E7D32";
export const NON_VEG_COLOR = "#7A4A2A";

export interface Place {
  lat: number;
  lng: number;
  area: string;
  veg?: boolean;
}

export const places: Record<string, Place> = {
  Frullato: { lat: 19.2557, lng: 72.9812, area: "Hiranandani Estate, Thane", veg: true },
  "Chimichurri: The Asian Kitchen": { lat: 19.2542, lng: 72.981, area: "Hiranandani Estate, Thane" },
  PizzaExpress: { lat: 19.2561, lng: 72.9829, area: "Hiranandani Estate, Thane" },
  "Blue Tokai Coffee Roasters": { lat: 19.254, lng: 72.9833, area: "Hiranandani Estate, Thane" },
  Maiz: { lat: 19.2551, lng: 72.9842, area: "Hiranandani Estate, Thane" },
  "Ora Kitchen & Bar": { lat: 19.2547, lng: 72.98, area: "Hiranandani Estate, Thane" },
  "Hotel Malvan": { lat: 19.1954, lng: 72.9647, area: "Panchpakhadi, Thane" },
  "Mahabi Cafe Patisserie Gelato": { lat: 19.2314, lng: 72.9738, area: "Manpada, Thane" },
  "Chinese Wok": { lat: 19.2092, lng: 72.9716, area: "Lakeshore Mall, Thane" },
  "Thane station": { lat: 19.1846, lng: 72.971, area: "Sugarcane juice stall opposite Alok Hotel", veg: true },
  "Manas Jatra": { lat: 17.6883, lng: 74.0042, area: "Satara" },
};
