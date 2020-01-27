<template>
  <div class="policy-container">
    <h2 class="policy-heading">
      プライバシーポリシー 個人情報について
    </h2>
    <p class="policy">
      当サイトでは、メールアドレス・パスワードのような個人情報は一切収集していません。
    </p>
    <h2 class="policy-heading">
      当サイトが使用しているアクセス解析ツールについて
    </h2>
    <p class="policy">
     当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
     このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
      <a href = "https://policies.google.com/privacy">ここ</a> をクリックしてください。
    </p>
    <h2 class="policy-heading">
      免責事項
    </h2>
    <p class="policy">
      当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
      当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
    </p>
    <h2 class="policy-heading">
      プライバシーポリシーの変更について
    </h2>
    <p class="policy">
      当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
      修正された最新のプライバシーポリシーは常に本ページにて開示されます。
    </p>
  </div>
</template>

<script>
    export default {
        name: "privacy-policy"
    }
</script>

<style scoped lang = "scss">
  .policy-container {
    max-width: 1200px;
    margin: 20px auto;
    background: white;
    padding: 10px;
    border-radius: 1em;
  }

  .policy-heading {
    font-size: 18px;
    margin: 20px;
    text-align: left;
  }

  .policy {
    text-align: left;
    margin: 20px;
    font-size: 14px;
    margin-bottom: 30px;
  }
</style>
