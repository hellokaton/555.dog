export default defineAppConfig({
  title: '流泪小狗🐶',
  email: '',
  github: 'https://555.dog/github',
  twitter: 'https://555.dog/x',
  telegram: '',
  mastodon: '',
  blog: 'https://555.dog/me',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
