class Students
{
    constructor(_student){
        Object.assign(this, _student);
        this.name = this.setName(_student.fullname);
        this.lastName = this.setlastName(_student.fullname);
    }

    setName(_fullName) {
        let fullNameArray = _fullName.split(' ');
        let prenom = fullNameArray[0];
        return prenom;
    }
    setlastName(_fullName){
        let fullNameArray = _fullName.split(' ');
        let nom = fullNameArray[1];
        return nom;
    }
    sortGrade(_grade){
        return _grade.sort((a , b) => a - b);
    }
}
export { Students }