<template>
    <div id="app">
        <nav class="left-nav">


        </nav>
        <div class="right">
            <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #1172DC">
                <a class="navbar-brand" href="#">{{ $route.name }}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-bind:class="{'active' : $route.path === '/'}">
                             <router-link class="nav-link" to="/">首頁</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item" v-bind:class="{'active' : $route.path === '/login'}">
                            <router-link class="nav-link" to="/login">登入</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="bg"></div>
            <router-view></router-view>
        </div>
    </div>
</template>


<script>

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400&display=swap');

    body {
        background-color: #f3f6fb;
        font-family: 'Noto Sans TC', sans-serif;
    }

    .bg{
        background-color: #1172DC;
        height: 30vh;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }

    .left-nav {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 17rem;
        height: 100vh;
        background: #ffffff;
    }

    .right {
        margin-left: 17rem;
        position: relative;
    }

</style>
