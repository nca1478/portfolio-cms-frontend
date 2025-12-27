export function createCMSImageConfig() {
  const protocol = process.env.NEXT_PUBLIC_API_PROTOCOL || 'http';
  const hostname = process.env.NEXT_PUBLIC_API_HOSTNAME || 'localhost';
  const port = process.env.NEXT_PUBLIC_API_PORT;
  const pathname = process.env.NEXT_PUBLIC_API_PATHNAME || '/uploads/**';

  const config = {
    protocol,
    hostname,
    pathname,
  };

  // Solo agregar puerto si está definido (desarrollo local)
  if (port) {
    config.port = port;
  }

  return config;
}
