const withMDX = require('@next/mdx')()

const CSP =  `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com vitals.vercel-insights.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com; // Add https://fonts.gstatic.com to font-src directive
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
`

module.exports = withMDX({
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Custom webpack configuration goes here
    return config
  },
  images: {
    domains: [
      'images.unsplash.com'
    ],
  },
  headers: async () => {
    return [
      {
        source: '/(.*)?',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Content-Security-Policy',
            value: CSP.replace(/\n/g, '')
          }
        ],
      },
    ]
  },
})
