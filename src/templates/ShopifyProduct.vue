<template>
  <Layout>
    <h1>{{ $page.shopifyProduct.title }}</h1>
    <div v-html="$page.shopifyProduct.descriptionHtml" />
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
