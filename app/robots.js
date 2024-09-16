export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '',
      },
      sitemap: 'https://silverlinelaw.vercel.app/practice-area/sitemap.xml',
    }
  }