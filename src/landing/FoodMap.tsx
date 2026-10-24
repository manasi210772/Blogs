import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMapEvents } from "react-leaflet";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts, type BlogPost } from "../data/blogPosts";
import { NON_VEG_COLOR, VEG_COLOR, places, type Place } from "../data/places";

// Triangle pin whose bottom edge sits on the spot.
const triangle = (color: string) =>
  L.divIcon({
    className: "",
    html: `<svg width="26" height="24" viewBox="0 0 26 24" aria-hidden="true"><path d="M13 2 24 22H2Z" fill="${color}" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>`,
    iconSize: [26, 24],
    iconAnchor: [13, 22],
    tooltipAnchor: [0, -20],
    popupAnchor: [0, -20],
  });

const vegIcon = triangle(VEG_COLOR);
const nonVegIcon = triangle(NON_VEG_COLOR);

type Spot = Place & { name: string; posts: BlogPost[] };

const spots: Spot[] = Object.entries(places)
  .map(([name, p]) => ({ ...p, name, posts: blogPosts.filter((b) => b.place === name) }))
  .filter((s) => s.posts.length > 0);

// Open on Thane; Satara is far enough away that including it would zoom the map right out.
const thaneBounds = L.latLngBounds(spots.filter((s) => s.lat > 18.5).map((s) => [s.lat, s.lng]));

// The wheel scrolls the page until you click the map; then it zooms, until the mouse leaves.
function WheelZoomOnClick() {
  const map = useMapEvents({
    click: () => map.scrollWheelZoom.enable(),
    mouseout: () => map.scrollWheelZoom.disable(),
  });
  return null;
}

export default function FoodMap() {
  const navigate = useNavigate();

  return (
    <MapContainer
      bounds={thaneBounds}
      boundsOptions={{ padding: [32, 32] }}
      scrollWheelZoom={false}
      className="h-[420px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <WheelZoomOnClick />
      {spots.map((s) => {
        const single = s.posts.length === 1;
        return (
          <Marker
            key={s.name}
            position={[s.lat, s.lng]}
            icon={s.veg ? vegIcon : nonVegIcon}
            title={`${s.name}, ${s.area}`}
            // One post: go straight to it. More than one: the popup below lets you pick.
            eventHandlers={single ? { click: () => navigate(s.posts[0].path) } : undefined}
          >
            <Tooltip direction="top">
              <strong>{s.name}</strong>
              <br />
              {s.area}
            </Tooltip>
            {!single && (
              <Popup>
                <strong>{s.name}</strong>
                <ul className="mt-1 space-y-1">
                  {s.posts.map((p) => (
                    <li key={p.slug}>
                      <Link to={p.path}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </Popup>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
}
