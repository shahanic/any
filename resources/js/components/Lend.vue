<script setup>
import {carStore} from '@/stores/car.js';
import {storeToRefs} from "pinia";

const car = carStore()
const {form} = storeToRefs(car)
</script>
<template>
    <div>
        <table>
            <thead>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Status</th>
                
            </thead>
            <tbody>
                <tr v-for="(lugan, i) in car.Test":key="i">
                    <td>{{ ++i }}</td>
                    <td>{{lugan.brand}}</td>
                    <td>{{lugan.model}}</td>
                    <td>{{lugan.year_bought}}</td>
                    <td>{{lugan.status}}</td>
                    <td>
                        <button @click="car.editCar(lugans)">Edit</button>
                        <button @click="car.deleteCar(lugans)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>