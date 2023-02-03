<template>
    <Header/>
    <router-view/>
    <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
@import url(./assets/css/reset.css);
/* Обычный */
@font-face {
  font-family: 'Graphik';
  font-style: normal;
  font-weight: 400;
  src: url(./assets/fonts/Graphik-Regular.ttf);
}

/* Средний */
@font-face {
  font-family: 'Graphik Medium';
  src: url(./assets/fonts/Graphik-Medium.ttf);
}

/* Жирный */
@font-face {
  font-family: 'Graphik Bold';
  src: url(./assets/fonts/Graphik-Bold.ttf);
}

.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;

}

/* ---------- */

.main{
  flex: 1 1 auto;
  display: flex;
}

[class*="__container"] {
  width: 1500px;
  margin: 0 auto;
  padding: 0px 15px;
}

/* --------- */
.btn{
  width: 154px;
  height: 45px;
  background: #4254DA;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: 'Graphik', sans-serif;
  font-size: 14px;
  line-height: 15px;
}

.btn:hover{
  cursor: pointer;
}
@media (max-width: 1600px) {
  [class*="__container"] {
    width: 1400px;
  }
}
@media (max-width: 1445px) {
  [class*="__container"] {
    width: 1200px;
  }
}
@media (max-width: 1250px) {
  [class*="__container"] {
    width: 1000px;
  }
}
@media (max-width: 1024px) {
  [class*="__container"] {
    width: 800px;
  }
}
@media (max-width: 840px) {
  [class*="__container"] {
    width: 600px;
  }
}
@media (max-width: 625px) {
  [class*="__container"] {
    width: 500px;
  }
}
@media (max-width: 500px) {
  [class*="__container"] {
    width: 400px;
  }
}
</style>
