<template>
  <header id="header">
    <div class="nav-wrapper">
      <div class="logo-wrapper">
        <nuxt-link to="/" class="brand-name">MC Tech Portal JP</nuxt-link>
      </div>
      <div id="nav-icon4">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav id="header-nav">
        <ul >
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/posts/pages/1">Posts</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang = "scss">

  #header {
    height: 80px;
    width: 100%;
    background: white;
    z-index: 1000;

    .nav-wrapper {
      height: 100%;
      padding: 0 15px;
      line-height: 80px;

      .logo-wrapper {
        float: left;
        height: 62px;

        .brand-logo {
          height: 100%;
          border-radius: 50%;
        }
        .brand-name {
          font-family: 'Varela Round';
          font-size: 1.7em;
          font-weight: 700;
          color: rgba(0, 0, 0, .7);
          cursor: pointer;
          text-decoration: none!important;
          &:hover {
            color: rgba(0, 0, 0, .9);
            text-decoration: none!important;
          }
        }
      }
      #header-trigger {
        display: none;
        float: right;
        height: 50px;
        width: 50px;
        margin-top: 15px;
        line-height: 10px;
        text-align: center;
        background: rgb(167, 172, 175);
        opacity: .7;
        border-radius: 12px;
        padding-top: 6px;
        cursor: pointer;
        span {
          display: inline-block;
          height: 4px;
          width: 25px;
          background: rgba(44, 62, 80, 1.0);
          border-radius: 8px;
        }
      }
      nav {
        float: right;
        height: 100%;
        line-height: 80px;
        ul {
          margin: 0;
          list-style: none;
          padding: 0;
          li {
            display: inline-block;
            padding-left: 0px;
            cursor: pointer;
            a {
              text-decoration: none;
              font-family: 'Open Sans';
              font-size: 18px;
              text-transform: uppercase;
              color: rgba(44, 62, 80, 0.75);
              font-weight: 600;
              &::after,
              &::before {
                content: '';
                display: inline-block;
                height: 16px;
                width: 16px;
                position: relative;
                opacity: 0;
                transition: all 0.3s;
                z-index: 456456;
              }

              &::after {
                top: -2px;
                left: -8px;
                border-right: 5px solid #1955ae;
                border-top: 5px solid #1955ae;
              }
              &::before {
                bottom: -7px;
                left: 10px;
                border-left: 5px solid #1955ae;
                border-bottom: 5px solid #1955ae;
              }
              &:hover::after {
                top: -10px;
                left: 10px;
                opacity: 1;
              }
              &:hover::before {
                bottom: -13px;
                left: -10px;
                opacity: 1;
              }
              &:hover {
                color: rgba(44, 62, 80, .9);
              }
            }
          }
        }
      }
    }
  }
  /*
  @media screen and (max-width: 768px) {
    #header {
      height: 60px;

      .nav-wrapper {

        #closebtn {
          height:25px;
          width:25px;
          text-decoration:none;
          font-size: 36px !important;
          z-index:100;
          color:#fff;
          cursor:pointer;
          trainsition:background-position .3s;
        }

        .line1, .line2, .line3 {
          margin-top:5px;
          background-color: #181818;
          width:25px;
          height:3px;
          display:block;
          position:relative;
          opacity:1.0;
          border-radius:15%;
          transition: all .3s;
        }

        .line1.active {
          transform: rotate(270deg);
          opacity:0.0;
          background-color:yellow;
          top:5px;
        }

        .line2.active {
          transform: rotate(45deg);
          background-color:yellow;
        }

        .line3.active {
          transform: rotate(-45deg);
          background-color:yellow;
          top:-7px;
        }

        .menuitems {
          padding-top:12px;
          padding-bottom:12px;
          text-decoration: none;
          list-style:none;
          font-family: "Lato", sans-serif;
          font-weight: 300;
          font-size: 24px;
          display: inline-block;
          position:relative;
          text-align:center;
          color: #fff;
          opacity:0.0;
          transition: all .5s ease-in-out;
        }

        .menuitems:after {
          content:'';
          display:block;
          width: 0;
          height: 1px;
          background: #fff;
          transition: width .2s;
        }

        .menuitems:hover::after {
          width:100%;
        }

        #header-trigger {
          display: inline-block;
          &:hover {
            background: rgba(149, 165, 166, 1.0);
          }
        }

        .logo-wrapper {
          line-height: 60px;
          .brand-name {
            font-size: 1.4em;
          }
        }
        #header-trigger {
          height: 40px;
          width: 40px;
          margin-top: 10px;
          line-height: 7px;
          border-radius: 12px;
          padding-top: 4px;
        }

        nav {
          display: none;
          float: none;
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          height: auto;
          line-height: 40px;
          background: #ecf0f1;
          border-top: 1px solid rgba(44, 62, 80, .4);
          ul {
            display: block;
            li {
              display: block;
              &:hover {
                background: rgba(149, 165, 166, .7)
              }
              a {
                padding-left: 15px;
                &::after,
                &::before {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }

   */


</style>
