export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type House = {
  address: string;
  coordinates: Coordinates;
  nodes: { coordinates: Coordinates }[];
};

// Converts from degrees to radians.
export function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Converts from radians to degrees.
export function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

export function bearing(start: Coordinates, end: Coordinates) {
  const startLat = toRadians(start.latitude);
  const startLng = toRadians(start.longitude);
  const endLat = toRadians(end.latitude);
  const endLng = toRadians(end.longitude);

  const y = Math.sin(endLng - startLng) * Math.cos(endLat);
  const x =
    Math.cos(startLat) * Math.sin(endLat) -
    Math.sin(startLat) * Math.cos(endLat) * Math.cos(endLng - startLng);
  let bearing = Math.atan2(y, x);
  bearing = toDegrees(bearing);
  return (bearing + 360) % 360;
}
