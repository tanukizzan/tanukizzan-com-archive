/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tanukizzan.com',
  exclude: ['/privacy-policy'],
  generateRobotsTxt: true,
  autoLastmod: false,
  priority: false,
  changefreq: false,
  sitemapSize: 7000,
  outDir: './out',
}