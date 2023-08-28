const mapping: Record<string, string> = {
  admins: 'admin',
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  owners: 'owner',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
