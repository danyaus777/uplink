<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__info-left">
        <p>&#64; Аплинк, 2023</p>
        <p class="footer__p">Данная платформа предназначена только для корпоративного обучения компании «Аплинк». Все  права защищены.  </p>
      </div>
      <div class="footer__info-right">
        <ul class="footer__nav">
          <li class="nav__link"><a href="#">Договор оферты</a></li>
          <li class="nav__link"><a href="#">Политика конфиденциальности</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer__container{
  display: flex;
  height: 90px;
  align-items: center;

}
p{
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
}
p:nth-child(2){
  margin-top: 5px;
}
.footer__nav{
  display: flex;
}
.footer__info-right{
  margin-left: auto;
}
a{
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  text-decoration: underline;
  color: black;
  padding-left: 10px;
  }
@media (max-width: 1024px) {
  .footer__p{
    width: 300px;
  }
}
@media (max-width: 625px) {
  .footer__p{
    width: 200px;
  }
}
@media (max-width: 500px) {
  .footer__p{
    width: 150px;
  }
  .footer__nav{
    display: block;
  }
}
</style>