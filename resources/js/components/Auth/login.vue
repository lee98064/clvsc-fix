<template>
    <div class="login-form">
        <div class="form-card">
            <h1 class="text-center">登入</h1>
            <h5 class="text-center text-muted">請輸入學校提供的帳號密碼登入！</h5>
            <div class="form-group">
                <label for="account">帳號：</label>
                <input type="text" class="form-control" id="account" v-model="form.account">
                <!-- <small id="emailHelp" class="form-text text-muted">請輸入學校提供的帳號</small> -->
            </div>
            <div class="form-group">
                <label for="password">密碼：</label>
                <input type="password" class="form-control" id="password" v-model="form.password">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">記住我</label>
            </div>
            <button v-on:click="loginUser()" class="d-block btn btn-primary btn-block">登入</button>
        </div>
    </div>
</template>

<script>
import { apiUserLogin } from "../../api";

export default ({
    data() {
        return{
            form:{
                account: '',
                password: '',
            }
        }
    },
    methods:{
        loginUser(){
            apiUserLogin(this.form)
            .then(res=> {
                console.log(res);
            })
            .catch(err=> {
                console.log(err);
            })
        }
    }
})

</script>


<style>
    .login-form {
        /* position: absolute; */
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%,-50%); */
        /* background-color: #fff; */
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        margin-top: 5%;
    }

    .form-card{
        /* display: grid; */
        /* place-items: center; */
        width: 60%;
        height: 100%;
        border-radius: 20px;
        background-color: #fff;
        padding: 30px;
    }
</style>
