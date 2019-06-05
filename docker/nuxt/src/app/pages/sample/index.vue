<template>
  <section class="container">
    <div>
      <h1>
        サンプルページです。
      </h1>
      <app-sample/>
      <nuxt-link to="/">トップページへのリンク</nuxt-link>
    </div>
  </section>
</template>

<script>
import AppSample from '~/components/AppSample.vue'

export default {
  components: {
    AppSample
  }
}
</script>