<template>
    <section class="section">
        <button class="button is-danger" @click="clicks++">Click me</button>
        <h4 class="heading-4">You have {{displayClicks}} clicks!</h4> 
        <auto-click 
        v-for="(auto,index) in autoClickers"
        :key="index"
        :name="auto.name" 
        :cps="auto.cps"
        :cost="auto.cost" 
        :index="index" 
        :clicks="clicks"
        @clicked="autoClick"
        ></auto-click>  
    </section>    
</template>

<script>
import AutoClick from './AutoClick.vue';
export default {
  components: { AutoClick },
    mounted(){
        setInterval(()=>{
                this.clicks += this.cps;
        },1000);
    },
    data() {
        return {
            clicks: 0,
            cps: 0,
            cost: 10,
            autoClickers: [
                {name: "Auto Click", cost: 10, cps:0.1},
                {name: "Grandma", cost: 100, cps:1},
                {name: "Grandpa", cost: 1000, cps:10},
                {name: "Greatparent", cost: 10000, cps:100},
            ]
        }
    },
    methods: {
        autoClick(index){
            this.clicks -= this.autoClickers[index].cost;
            this.cps += this.autoClickers[index].cps;
            this.this.autoClickers[index].cost += Math.cell(this.this.autoClickers[index].cost/7);
        }
    },
    computed: {
        displayClicks(){
            return this.clicks.toFixed(1)
        }
    }
}
</script>

<style>

</style>