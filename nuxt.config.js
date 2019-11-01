
export default {
  mode: 'spa',
  router: {
    base: '/ChimShopChai/'
  },
  head: {
    title: 'ลงทะเบียนเข้าร่วมมาตรการ ชิมช้อปใช้',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'og:url', content: 'https://bccvachana.github.io/ChimShopChai/' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”' },
      { name: 'og:description', content: 'ผู้สนใจเข้าร่วมมาตรการฯ สามารถลงทะเบียน ตั้งแต่ วันที่ 23 ก.ย. - 15 พ.ย. 62' },
      { name: 'og:image', content: 'img/Share_Social.png' },
      { name: 'title', content: 'มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”' },
      { name: 'description', content: 'ผู้สนใจเข้าร่วมมาตรการฯ สามารถลงทะเบียน ตั้งแต่ วันที่ 23 ก.ย. - 15 พ.ย. 62' },
      { name: 'image', content: 'img/Share_Social.png' }
    ],
    link: [{ rel: 'icon', href: 'img/logo.png' }]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/fonts/font.css',
    '~/assets/main.css'
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
    extend (config, ctx) {
    }
  }
}
