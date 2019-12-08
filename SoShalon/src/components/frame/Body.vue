<template>
    <div id="body">
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default{
    }
</script>
<style>
body {
    background-repeat: no-repeat;
    background-size:cover;
    background-image: url("/bg.jpg");
}
</style>
