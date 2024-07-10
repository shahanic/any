<script setup>
import {studentStore}from '@/stores/student.js';
const student = studentStore()
student.getter();

</script>
<template>
    <div>
         <table>
            <thead>
                <th>#</th>
                <th>Brand</th>
                <th>Model</th>  
                <th>Year Bought</th>
                <th>Status</th>
            </thead>

                <tr v-for="(cars, i) in student.students":key="i">
                <td>{{++i}}</td>
                <td>{{stud.name}}</td>
                <td>{{stud.course}}</td>
                <td>
                    <button @click="student.editStudent(stud)">Edit</button>
                    <button @click="student.deleteStudent(stud)">Delete</button>
                </td>
                   

                </tr>


            <tbody>


            </tbody>
        </table>
    



            
  

    </div>


</template>






