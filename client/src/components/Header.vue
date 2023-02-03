<template>
    <div class="header">
      <div class="header__container">
        <a href="#"><img src="../assets/img/logo.png" alt="Logo" class="header__logo"></a>
        <button class="btn btn__logout">Выйти</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  height: 90px;
  background: rgba(205, 205, 205, 0.1);
  box-shadow: 0 4px 55px rgba(33, 33, 33, 0.15);
}

.header__container{
  display: flex;
  align-items: center;
}

.header__container button{
  margin-left: auto;
}

@media (max-width: 625px) {
  .btn{
    width: 90px;
    height: 30px;
    font-size: 12px;
  }
}
@media (max-width: 500px) {
  img{
    display: block;
    width: 80%;
  }
}
</style>