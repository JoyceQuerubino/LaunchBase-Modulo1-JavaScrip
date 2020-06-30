const classA = [
    {
        name: 'Joyce',
        grade: 9.5
    },
    {
        name: 'Geisse',
        grade: 10
    },
    {
        name: 'Josicleia',
        grade: 3.5
    }
]

const classB = [
    {
        name: 'Fulano',
        grade: 5
    },
    {
        name: 'Beutrano',
        grade: 4
    },
    {
        name: 'Siclano',
        grade: 3.5
    }
]

function calculateAverege(students) {
    let sum = 0;
    
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[1].grade
    }
    
    const average = sum / students.length
    return average
}

function sendMenssage(average, turma) {
    if (average > 5) {
        console.log(` ${turma} average: ${average}`)
    } else {
        console.log(` ${turma} average. Is not god `)
    }
}

function markAsFlunked(student) {
    student.flunked = false
    
    if (student.grade < 5) {
        student.flunked = true
    }
}

function SendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The  student ${student.name} FLUNKED!`)
    }
}

function studentReprovado(students) { 
    for (let student of students) {
        markAsFlunked(student);
        SendFlunkedMessage(student)

    }
}

const average1 = calculateAverege(classA)
const average2 = calculateAverege(classB)

sendMenssage(average1, 'class A')
sendMenssage(average2, 'class B')

studentReprovado(classA)
studentReprovado(classB)

