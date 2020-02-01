<template>

  <div>

    <Header/>

    <nuxt/>

    <Footer/>

  </div>

</template>

<style lang = "scss">

  @import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:700&display=swap');

  * {
    margin: 0px;
    padding: 0px;
  }


  .fade-enter-active, .fade-leave-active {
    will-change: opacity;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }

  html {
    background-color: #edf2f7;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  .contents {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 auto;
    padding: 0 auto;
    max-width: 1200px;
    width: 100%;
  }

  .heading {

    @media screen and (max-width: 768px){
      font-size: 16px;
    }

    font-size: 30px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    margin: 20px;
    text-align: center;

    &:after {
      content: '';
      display: block;
      background: #326d85;
      height: 3px;
      width: 65%;
      align-items: center;
      margin: 0px auto;
      margin-top: 15px;
    }
  }

  /* Design */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .card_image {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    position: relative;
  }

  .headline_card_image {
    margin-top: 20px;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    position: relative;
  }

  .headline_category_btn {
    position: relative;
    display: inline-block;
    text-decoration: none !important;
    padding: 4px 20px;
    border-radius: 25px;
    background: #2d8fdd;
    transition: .4s;
    color: rgba(255, 255, 255, 0.96);

    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */

    &:hover {
      opacity: 0.9;
      text-decoration: none !important;
    }
  }

  .category_btn {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-block;
    text-decoration: none !important;
    padding: 4px 20px;
    border-radius: 25px;
    background: #2d8fdd;
    transition: .4s;
    color: rgba(255, 255, 255, 0.96);

    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */

    &:hover {
      opacity: 0.9;
      text-decoration: none !important;
    }
  }

  .footer_category_btn {
    margin-right: 10px;
    margin-bottom: 10px;
    display: inline-block;
    text-decoration: none !important;
    padding: 4px 20px;
    border-radius: 25px;
    background: #2d8fdd;
    transition: .4s;
    color: rgba(255, 255, 255, 0.96);

    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */

    &:hover {
      opacity: 0.9;
      text-decoration: none !important;
    }
  }

  .footer_tag_btn {
    width: auto;
    display: inline-block;
    padding: 4px 20px;
    border-color: #696868;
    border-style: solid;
    border-width: 1px;
    border-radius: 22px;
    text-decoration: none !important;
    transition: .4s;
    color: #696868;
    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */
    margin-right: 5px;

    &:hover {
      color: #ff5e3a;
      border-color: #ff5e3a;
      transition: all 0.2s linear;
      text-decoration: none !important;
    }
  }

  .latest_posts_title {
    text-align: center;
  }

  .tag_btn {
    width: auto;
    position: relative;
    display: inline-block;
    padding: 4px 20px;
    margin: 4px;
    border-color: #696868;
    border-style: solid;
    border-width: 1px;
    border-radius: 22px;
    text-decoration: none !important;
    transition: .4s;
    color: #696868;
    user-select: none; /* CSS3 */
    -moz-user-select: none; /* Firefox */
    -webkit-user-select: none; /* Safari、Chromeなど */
    -ms-user-select: none; /* IE10かららしい */
    margin-right: 5px;

    &:hover {
      color: #ff5e3a;
      border-color: #ff5e3a;
      transition: all 0.2s linear;
      text-decoration: none !important;
    }
  }

  .card_content {
    padding: 1rem;
    transition: background 0.8s;
    background: white center;
  }

  .read_button {
    text-align: center;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 3;
    background: transparent;
    color: #1f2d7b;
    font-size: 14px;
    border-color: #1f2d7b;
    border-style: solid;
    border-width: 2px;
    border-radius: 22px;
    padding: 5px 20px;
    text-transform: uppercase;
    transition: all 0.2s linear;

    a {
      text-decoration: none !important;
    }

    &:hover {
      color: white;
      background: #1f2d7b;
      border-color: white;
      transition: all 0.2s linear;
      text-decoration: none !important;
    }

    &:active {
      border-radius: 22px;
      text-decoration: none !important;
    }
  }

  .more_button {
    text-align: center;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 3;
    width: 100%;
    background: transparent;
    color: #000000;
    font-size: 14px;
    border-color: #000000;
    border-style: solid;
    border-width: 2px;
    //border-radius: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 5px 20px;
    text-transform: uppercase;
    transition: all 0.2s linear;
    margin: 10px;

    a {
      text-decoration: none !important;
    }

    &:hover {
      color: white;
      background: #000000;
      border-color: white;
      transition: all 0.2s linear;
      text-decoration: none !important;
    }

    &:active {
      border-radius: 22px;
      text-decoration: none !important;
    }
  }


  .btn {
    text-align: center;
    cursor: pointer;
    outline: none;
    position: relative;
    z-index: 3;
    width: 10%;
    background: transparent;
    color: #000000;
    font-size: 14px;
    border-color: #000000;
    border-style: solid;
    border-width: 2px;
    //border-radius: 22px;
    padding: 5px 20px;
    text-transform: uppercase;
    transition: all 0.2s linear;
    text-decoration: none !important;

    a {
      text-decoration: none !important;
    }

    &:hover {
      color: white;
      background: #000000;
      border-color: white;
      transition: all 0.2s linear;
      text-decoration: none !important;
    }

    &:active {
      border-radius: 22px;
      text-decoration: none !important;
    }
  }

  .cards_item {
    display: flex;
    padding: 1rem;
  }

  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }

  .no-decoration {
    text-decoration: none !important;

    &:hover {
      text-decoration: none !important;
    }
  }

  .card {
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all .3s;
    box-shadow: 0 0 3px gray;

    &:hover {
      -webkit-transform: translateY(-3px);
      -ms-transform: translateY(-3px);
      transform: translateY(-3px);
      box-shadow: 0 20px 20px -14px rgba(0, 0, 0, 0.25);
    }

  }

  .card_title {
    color: black;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    color: black;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }


  .profile_card {
    background-color: white;
    border-radius: 0.20rem;
    overflow: hidden;
    transition: all .3s;
    box-shadow: 0 0 3px gray;

    &:hover {
      -webkit-transform: translateY(-3px);
      -ms-transform: translateY(-3px);
      transform: translateY(-3px);
      box-shadow: 0 20px 20px -14px rgba(0, 0, 0, 0.25);
    }
  }


</style>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";
    export default {
        components: {Footer, Header},
        head() {
            return {
                title: "Minecraft Tech Portal JP"
            }
        }
    }
</script>
