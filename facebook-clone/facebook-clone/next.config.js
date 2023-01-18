/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "static.xx.fbcdn.net",
      "www.google.com",
      "platform-lookaside.fbsbx.com",
      "images.pexels.com",
      "estaticos.sport.es",
      "static.dw.com",
      "www.fichajes.com",
      "encrypted-tbn0.gstatic.com",
      "www.ole.com.ar",
      "links.papareact.com"
    ],
  },
};

module.exports = nextConfig;
