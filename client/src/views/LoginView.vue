<template>
  <div class="main">
    <div class="login__container">
      <form @submit.prevent="handleSubmit" class="login__form">
        <div class="border">
          <div class="form">
            <p class="form__title">Войдите</p>
            <input class="email__input" v-model="email" type="email" placeholder="Электронная почта">
            <input class="password__input" v-model="password" type="password" placeholder="Пароль">
          </div>
          <div class="form__link">
            <a href="#">Не помню пароль</a>
          </div>
          <div class="form__button">
            <button class="btn">Войти</button>
          </div>
        </div>
      </form>
      <div class="login__info">
        <h1>Корпоративная платформа
          обучения сотрудников </h1>
        <img src="../assets/img/login_art.png" alt="login_art">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('auth/login', {
        email: this.email,
        password: this.password
      });

      localStorage.setItem('token', response.data.token);
    }
  }
}
</script>

<style scoped>

.login__container{
  display: flex;
  align-items: center;
}
.login__form{
  width: 432px;
  height: 350px;
  background: rgba(138, 138, 138, 0.03);
  backdrop-filter: blur(7.96603px);
  border-radius: 48px;
}
.border{

  width: 432px;
  height: 350px;


  mix-blend-mode: normal;
  border: 6.75906px solid rgba(223, 223, 223, 0.3);
  box-shadow: inset 0.96558px 0.96558px 1.20697px rgba(0, 0, 0, 0.5), 1px 1px 1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.844882px);
  border-radius: 48px;
}

.form__title{
  padding-top: 40px;
  padding-left: 26px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  color: black;
}

.email__input{
  width: 380px;
  height: 45px;
  margin-left: 20px;
  background: #FFFFFF;
  border: 6.75906px solid rgba(223, 223, 223, 0.3);
  box-shadow: inset 0.96558px 0.96558px 1.20697px rgba(0, 0, 0, 0.5), 1px 1px 1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.844882px);
  border-radius: 10px;
  margin-top: 30px;
}

.password__input{
  width: 380px;
  height: 45px;
  margin-left: 20px;
  background: #FFFFFF;
  border: 6.75906px solid rgba(223, 223, 223, 0.3);
  box-shadow: inset 0.96558px 0.96558px 1.20697px rgba(0, 0, 0, 0.5), 1px 1px 1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(0.844882px);
  border-radius: 10px;
  margin-top: 10px;
}
a{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-decoration: underline;
  color: black;
  margin-left: 25px;
}
.form__link{
  margin-top: 15px;
}

.form__button{
  margin-top: 15px;
  margin-left: 235px;
}

input{
  padding: 0 20px;
  outline: none;
}



input::placeholder{
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: black;
}
input:focus::placeholder{
  opacity: 0;
  transition: opacity 0.3s ease;
}
h1 {
  width: 565px;
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 140%;
}
.login__info{
  margin-left: auto;
  margin-top: 15px;
  width: 935px;
}

/*---------------------------*/

@media (max-width: 1600px) {
  img{
    display: block;
    width: 100%;
  }
  .login__info{
    width: 770px;
  }
}
@media (max-width: 1445px) {
  img{
    display: block;
    width: 100%;
  }
  .login__info{
    width: 600px;
  }
}
@media (max-width: 1250px) {
  img{
    display: block;
    width: 100%;
  }
  .login__info{
    width: 500px;
  }
  .login__info h1{
    width: 420px;
    font-size: 32px;
  }
}
@media (max-width: 1024px) {
  img{
    display: none;
  }
  .login__container{
    flex-direction: column-reverse;
    justify-content: start;
  }
  .login__info{
    display: flex;
    justify-content: center;
    margin-left: 0;
    width: 800px;
    margin-top: 50px;
  }
  .login__form{
    margin-top: 50px;
  }
}
@media (max-width: 625px) {
  .login__info{
    display: flex;
    justify-content: center;
    margin-left: 0;
    width: 400px;
    margin-top: 50px;
  }
  .login__form{
    margin-top: 50px;
  }
  .login__form, .border, .form{
    width: 400px;
  }
  input[type=email],[type=password]{
    width:340px;
  }
  .form__button{
    margin-left: 210px;
  }
  .login__info h1{
    width: 400px;
    font-size: 30px;
  }
  @media (max-width: 500px) {
    .login__info h1{
      width: 350px;
      font-size: 26px;
    }
    .login__form, .border, .form{
      width: 350px;
    }
    input[type=email],[type=password]{
      width:295px;
    }
    .form__button{
      margin-left: 160px;
    }
  }
}
</style>