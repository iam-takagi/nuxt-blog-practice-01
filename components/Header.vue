<template>
  <header id="header">
    <div class="nav-wrapper">
      <div id="header-trigger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="logo-wrapper">
        <h1 class="brand-name">MC TECH</h1>
      </div>
      <nav id="header-nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Posts</a></li>
          <li><a href="">Categories</a></li>
          <li><a href="">Tags</a></li>
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
    position: relative;
    top: 0;
    left: 0;
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
        margin-top: 10px;

        .brand-logo {
          height: 100%;
          border-radius: 50%;
        }
        .brand-name {
          font-family: 'Varela Round';
          font-size: 1.7em;
          vertical-align: middle;
          font-weight: 700;
          color: rgba(0, 0, 0, .7);
          cursor: pointer;
          &:hover {
            color: rgba(0, 0, 0, .9);
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

  @media screen and (max-width: 768px) {
    #header {
      height: 60px;
      .nav-wrapper {
        #header-trigger {
          display: inline-block;
          &:hover {
            background: rgba(149, 165, 166, 1.0);
          }
        }
        .logo-wrapper {
          height: 50px;
          margin-top: 5px;
          .brand-name {
            font-size: 1.35em;
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

</style>
