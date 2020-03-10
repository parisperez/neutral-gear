<template>
  <Layout>
    <h1>{{ $page.shopifyProduct.title }}</h1>
    <div v-html="$page.shopifyProduct.descriptionHtml" />
    <div id="my-product"></div>
  </Layout>
</template>


<page-query>
  query Product ($id: ID!) {
    shopifyProduct (id: $id) {
      id
      descriptionHtml
      title
    }
  }
</page-query>

<script>
export default {

}

const pathname = window.location.pathname;
console.log(pathname)
const producthandle = pathname.replace("/product/", "")

import '@shopify/buy-button-js'

const client = ShopifyBuy.buildClient({
  domain: "geohmetry.myshopify.com",
  storefrontAccessToken: "d3fc2080bc04457f190bca2613352886",
})
const ui = ShopifyBuy.UI.init(client)
ui.createComponent('product', {
  handle: producthandle,
  node: document.getElementById('my-product')      
});


</script>