<template>
  <header>

    <div class="header">

      <nuxt-link to="/" class="header-title">Minecraft Tech Portal JP</nuxt-link>

      <h2 class="header-description">最新情報をお届けします</h2>
    </div>

  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang = "scss">
  
  .header {
    align-items: center;
    text-align: center;
    background: white;
    bottom: 0;
    left: 0;
    padding: 0;
    width: 100%;
    height: 110px;
    z-index: 1;
    transition: all 10ms;
    background: linear-gradient(100deg, rgba(28,187,237,1) 30%, rgba(17,110,214,1) 79%);

    box-shadow: 0px 5px 3px -3px rgba(0,0,0,0.6);
    -webkit-box-shadow: 0px 5px 3px -3px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 5px 3px -3px rgba(0,0,0,0.6);
  }


  .header-title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-decoration: none !important;
    font-size: 23px;
    text-align: center;
    color: white;
    line-height: 75px;
    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */

    &:hover {
      text-decoration: none !important;
    }
  }

  .header-description {
    vertical-align: top;
    text-decoration: none !important;
    font-size: 13px;
    text-align: center;
    margin-top: 0;
    color: white;
    line-height: 15px;
  }
</style>
