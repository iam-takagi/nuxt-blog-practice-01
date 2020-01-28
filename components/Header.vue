<template>
  <header id="header">

    <div class="logo-wrapper">
      <nuxt-link to="/" class="brand-name">Minecraft Tech Portal JP</nuxt-link>
    </div>

    <div class="hamburger-wrapper">
      <div class="hamburger" id="hamburger-1">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>

    <nav class="slidedown">
      <ul class="menu">
        <li><nuxt-link to="/" class="item no-decoration">Home</nuxt-link></li>
        <li><nuxt-link to="/posts/pages/1" class="item no-decoration">Posts</nuxt-link></li>
      </ul>
    </nav>

  </header>

</template>

<script>

  import $ from 'jquery'

    export default {
        name: "Header"
    }

    if(process.browser){
        $(document).ready(function(){
            $(".hamburger").click(function(){
                $(this).toggleClass("is-active");
                $('.slidedown').slideToggle();
            });
        });
    }

</script>

<style scoped lang = "scss">

  @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:700&display=swap');

  .slidedown {
    display: none;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  ul li {
    list-style: none;
    text-align: center;
  }

  .menu{
    width: 100%;
    display: inline;

    .item{
      font-size: 20px;
      display: block;
      background: #3094b8;
      padding: 10px;
      color: #fff;
      text-decoration: none;
      box-sizsing: border-box;
      width: 100%;
      height: 45px;
      line-height: 40px;
    }
  }
  #header {
    height: 80px;
    width: 100%;
    //max-width: 1200px;
    margin: 0 auto;
    background: #3094b8;
    z-index: 3;
    //border-radius: 0 0 1em 1em;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-flex-flow: row wrap;

    .hamburger-wrapper {

      margin-right: 20%;

      @media screen and (max-width: 768px){
        margin-right: 3%;
      }

      .hamburger .line {
        position: relative;
        overflow: hidden;
        display: block;
        width: 37px;
        height: 5px;
        background-color: white;
        margin: 8px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        right: 0;
        border-radius: 10px;

        &:hover {
          cursor: pointer;
        }
      }

      #hamburger-1.is-active .line:nth-child(2){
        opacity: 0;
      }

      #hamburger-1.is-active .line:nth-child(1){
        -webkit-transform: translateY(13px) rotate(45deg);
        -ms-transform: translateY(13px) rotate(45deg);
        -o-transform: translateY(13px) rotate(45deg);
        transform: translateY(13px) rotate(45deg);
      }

      #hamburger-1.is-active .line:nth-child(3){
        -webkit-transform: translateY(-13px) rotate(-45deg);
        -ms-transform: translateY(-13px) rotate(-45deg);
        -o-transform: translateY(-13px) rotate(-45deg);
        transform: translateY(-13px) rotate(-45deg);
      }
    }


    .logo-wrapper {

      //margin: 0 auto;
      height: 80px;
      line-height: 80px;
      margin-left: 20%;

      @media screen and (max-width: 768px){
        margin-left: 3%;
      }

      .brand-name {
        @media screen and (max-width: 768px){
          font-size: 14px;
        }

        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-size: 26px;
        font-weight: 700;
        color: white;
        cursor: pointer;
        text-decoration: none !important;

        &:hover {
          color: #254c5d;
          text-decoration: none !important;
        }
      }
    }
  }


</style>
