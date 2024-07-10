import { defineStore } from "pinia";

export const carStore = defineStore('car',{
    state: () => {
        return{
            form:{
                Brand: '',
                Model: '',
                Year_Bought: '',
                Status: ''
            }
        }
    },
    actions: {
        create(){
            let {form} = this;
            axios.post('/create-student', form).then(({data})=>{
                this.$reset();
                this.getter();
            });
        },
        getter(){
            axios.post('/get-cars').then(({data})=>{
                
            })
        }

    }











})