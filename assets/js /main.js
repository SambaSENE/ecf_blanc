import { FetchDb } from "./mesClasses/FetchDb.js";
import { Students } from "./mesClasses/Students.js";
const file = 'eval.json';
const { createApp } = Vue;

const myApp = {
    data() {
        return {
            students: [],
            grades: [],
            moyenne: [],
            moyenneEliminatoire: 12,
            fullname: '',
            grade: 0,


        }
    }, async mounted() {
        let data = await FetchDb.fetchFile(file);

        for (const item of data) {
            const student = new Students(item);
            this.students.push(student);
        }
        for (const item of this.students) {
            this.grades.push(item.grade)
        }
        for (const item of this.students) {
            if(item.grade > this.moyenneEliminatoire){
                this.moyenne.push(item);
            }
        }
        this.students.sort((a,b) => a.grade - b.grade).reverse();
        console.log(this.students);
    }, computed: {
        getNbStudent() {
            return this.students.length;
        },
        getMoyenne(){
            let sumGrades = this.grades.reduce((a , b) => a + b , 0);
            return (sumGrades / this.getNbStudent).toFixed(2);
        },
        getUnderMoyenne(){
            return this.moyenne.length;
        }

    }, methods:{
        addNewStudent(){
            if(this.fullname >2 && this.grade > 0){
                let temp = {'fullname':this.fullname ,'grade' : this.grade }
                let newStudent = new Students(temp);
                this.students.push(newStudent);
            } else{
                return 'Erreur';
            }
        }
    }
}
createApp(myApp).mount('#app');

