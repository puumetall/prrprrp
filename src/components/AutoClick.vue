<template>
    <button class="button is-warning" @click="autoClick" :disabled="clicks<cost">{{name}} ({{cps}}) {{cost}}clicks!</button> 
</template>
<script>
    export default {
        props: ['cost', 'cps', 'name', 'clicks'],
        methods: {
            autoClick(){
                this.$emit('clicked', this.index )
            }
        }
    }
</script>