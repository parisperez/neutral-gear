module.exports = {
  siteName: 'Neutral Gear',
  siteDescription: 'Gender Neutral Apparel',
  siteUrl: 'https://neutralgear.shop',
  plugins: [
    {
      use: 'gridsome-source-shopify',
      options: {
        storeUrl: 'https://geohmetry.myshopify.com',
        storefrontToken: 'd3fc2080bc04457f190bca2613352886',
        typeName: 'Shopify', 
        // types: [ 'Product', 'Collection' ], 
        // perPage: 100 
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-57767134-3'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  templates: {
    ShopifyProduct: '/product/:handle'
  }
}
