<template>
    <div>
        <h2>{{ nomeCompleto }}</h2>
    </div>
</template>
<script lang="ts">

export default {
    name: 'Props3FormaComponent',
    props: {
        nomeCompleto: String
    },
    setup(props) {
        console.log(props.nomeCompleto)
    }
}


</script>
<style lang="">
    
</style>