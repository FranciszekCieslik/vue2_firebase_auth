<template>
    <div style="display: inline-flex;">
        <div class = "c-boxpic">
            <input type="checkbox" :value="name" />
            <img :src="img"/>
            <label>{{ name }}</label>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        name: String,
        img: String
    }
}
</script>

<style>

.c-boxpic{
    align-items: center;
    margin: 1rem;
    display: flex;
}

.c-boxpic img{
    height: 80px;
    width: auto;
    margin: 0.8rem;
    border-width: 1px;
    border-style: solid;
    border-radius: 8px;
    border-color: transparent;
}
</style>