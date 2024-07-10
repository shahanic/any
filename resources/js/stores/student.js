
import { defineStore } from "pinia";

export const studentStore = defineStore('student', {
    state: () =>{
        return{
            form:{
                name: '',
                course: ''
            }
            
        }
    },

    actions: {
        save(){
            let {form} = this;
            axios.post('/save-student', form).then(({data})=>{
                this.$reset();
                this.getter();
            });
        },
        getter(){
            axios.post('/get-students').then(({data})=>{
                this.students = data;
            })
        },
        editStudent(stud){
            this.form = {...stud};
        },
        deleteStudent(stud){
            if(confirm('are you sure you want to delete this student?')){
                axios.post('/delete-students', stud).then(({data})=>{
                    this.getter();
                })
            }
        }
    }
})