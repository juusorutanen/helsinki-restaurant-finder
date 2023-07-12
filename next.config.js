/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        domains: [
          "avatars.githubusercontent.com",
          "lh3.googleusercontent.com",
          "res.cloudinary.com"
        ]
      }
}

module.exports = nextConfig
