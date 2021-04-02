<template>
    <section class="vehicles">
        <div class ="content-title-group">
            <h1>Vehicles</h1>
        </div>
        <h2>{{ message }}</h2>
        <div v-for="vehicle in vehicles"
         :key="vehicle.id">
            <div>
                {{vehicle.make}} {{vehicle.model}} {{vehicle.modelYear}}
            </div>
        </div>
    </section>
</template>

<script>
import { data } from '/shared/data.js';

export default {
    data() {
        return{
            vehicles: [],
            message: ' ',
        };
    },
    async created(){
        await this.loadVehicles();
    },
    methods: {
        async loadVehicles() {
            this.vehicles = [];
            this.message = 'Getting Vehicles, please wait..';

            this.vehicles = await data.loadVehicles();
            this.message =' ';
        }
    }
};
</script>