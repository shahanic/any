import { defineStore } from "pinia";

export const carStore = defineStore('test',{
    state: () => {
        return{
            form:{
                brand: '',
                model: '',
                year_bought: '',
                status: ''
            }, 
            test: []
        }
    },
    
    actions: {
        save(){
            let {form} = this;
            axios.post('/save-car', form).then(({data})=>{
                this.$reset();
                this.getter();
            });
        },
        getter(){
            axios.post('/get-cars').then(({data})=>{
                this.Test= data;

            });
        },
        editCar(lugan){
            this.form = {...lugans};
        },

        deleteCar(lugans){
            if(confirm('Are you sure you want to delete this car?')){
                axios.post('/delete-car', lugans).then(({data})=>{
                    this.getter();
                })
            }
        }
    }











})