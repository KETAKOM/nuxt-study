<template>
  <div class="tweet-cell">
    <h2>ツイート一覧</h2>
    <button @click="add">追加</button>
    <div class=post-cell v-for='(post, key) in posts' :key='key'>
      <img src="~/assets/test1_bigger.jpg">
      <div class="post-header">
        <nuxt-link to="/user">
        <strong>{{post.user_name}}</strong>
        @
        <span>{{post.account_name}}</span>
        <span>{{post.created_at}}</span>
        </nuxt-link>
      </div>
      <div class="post-text">
        {{post.message}}
      </div>
      <div class="post-fotter">
        お気に入りボタンを表示する
      </div>
    </div>
  </div>
</template>

<script>

  const DISPLAY_UNIT = 2 // 一度に読み込む記事の単位
  export default {
    data() {
      return {
        posts: [
          { id:1, user_name: 'Aさん', account_name: 'a_sync_san', message: 'Nuxtjsやってみた' },
          { id:2, user_name: 'Bさん', account_name: 'bbbbbb_san', message: 'ハンバーガ食べた' },
          { id:3, user_name: 'Cさん', account_name: 'c_net_san', message: 'APIモックサーバ立てないとwww' },
          { id:4, user_name: '俺', account_name: 'ore', message: 'モスバーガなう' }
        ],
        page: 0, // ページ位置（skipの値）
        loading: false, // ローディングアイコン表示可否のフラグ
        loadEnable: true, // 次のローディングが可能化どうかのフラグ
      }
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password
          })
          this.$router.push("/")
        } catch(e) {
          this.error = e.message
        }
      },
      // 追加読み込み
      add: function () {
        var results = [
          { id:1, user_name: 'Aさん', message: 'Nuxtjsやってみた' },
          { id:2, user_name: 'Bさん', message: 'ハンバーガ食べた' },
          { id:3, user_name: 'Cさん', message: 'APIモックサーバ立てないとwww' },
          { id:4, user_name: '俺', message: 'モスバーガなう' }
        ];

        for(var i =0; i < results.length; i++) {
          this.posts.push(results[i]);
        }
      }
    }
  }
</script>