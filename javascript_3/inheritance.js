class Person {
    constructor(name) {
        this._name = name
    }
    introduceSelf() {
        console.log(`Hola, me llamo ${this._name}`)
    }
}

class Professor extends Person {
    constructor(name, teaches) {
        super(name, name)
        this._teaches = teaches
    }
    grade(paper) {
        console.log('Tu nota es ', paper)
    }
}

class Student extends Person {
    constructor(name, year) {
        super(name, name)
        this._year = year
    }
}

const student = new Student('Elias', '1')
console.log(student.introduceSelf())

const teacher = new Professor('Dev', 'Spanish')
console.log(teacher.introduceSelf())