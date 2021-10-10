const withMDX = require('@next/mdx')()

const CSP =  `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com vitals.vercel-insights.com;
  child-src *.youtube.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`

module.exports = withMDX({
  reactStrictMode: true,
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
  images: {
    domains: [
      'images.unsplash.com'
    ],
  },
})