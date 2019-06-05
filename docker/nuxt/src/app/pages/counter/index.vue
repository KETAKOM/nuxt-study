<template>
  <section class="container">
    <div>
      <h1>買い物かご</h1>
      <p>リンゴの数:{{apple}}個</p>
      <p>みかんの数:{{orange}}個</p>

      <button @click="addApple">リンゴ+1</button>
      <button @click="removeApple">リンゴ-1</button>
      <button @click="addOrange">みかん+1</button>
      <button @click="removeOrange">みかん-1</button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    apple () { return this.$store.state.counter.apple },
    orange () {return this.$store.state.counter.orange}
  },
  methods: {
    addApple (e) {
      console.log(process.env.test);
      this.$store.commit('counter/addApple')
    },
    removeApple (e) {
      this.$store.commit('counter/removeApple')
    },
    addOrange () {
        this.$store.commit('counter/addOrange')
    },
    removeOrange () {
        this.$store.commit('counter/removeOrange')
    }
  }
}
</script>