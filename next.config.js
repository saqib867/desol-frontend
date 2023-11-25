/** @type {import('next').NextConfig} */
const nextConfig = {
    middleware: [
        {
         
          // The options for the middleware
          options: {
            // The host and port of the remote server
            target: "https://desol-backend-kappa.vercel.app",
            // The path on the remote server that will be proxied
            path: "/api",
          },
        },
      ],
}

module.exports = nextConfig
