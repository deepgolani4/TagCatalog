export class Configuration {
  databaseUrl: string;
  jwtKey: string;
  jwtAccessExpiry: string;
  jwtRefreshExpiry: string;
  constructor() {
    this.databaseUrl = process.env.DB_BASE_URL;
    this.jwtKey = process.env.JWT_KEY;
    this.jwtAccessExpiry = process.env.JWT_ACCESS_EXPIRY;
    this.jwtRefreshExpiry = process.env.JWT_REFRESH_EXPIRY;
  }
}
