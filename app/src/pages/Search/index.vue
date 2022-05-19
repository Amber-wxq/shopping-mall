<template>
 <div>这是Search
    <h1>params--{{$route.params.keyword}}====={{k}}</h1>
    <h1>query--{{$route.query.k}}</h1>
 </div> 
</template>

<script>
export default {
    name:"",
    props:['keyword','k']
}
</script>

<style>

</style>