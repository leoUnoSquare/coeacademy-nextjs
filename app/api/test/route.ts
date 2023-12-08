import { NextResponse } from "next/server"
import { geolocation } from '@vercel/edge';

export const runtime = 'edge';

export function GET (request: Request) {
  const { city, country, countryRegion } = geolocation(request);
  return NextResponse.json({ city, country, countryRegion });
}