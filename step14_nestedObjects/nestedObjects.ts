interface Students {
    student_id: number;
    student_name: string
}

interface Teacher {
    teacher_id: number;
    teacher_name: string
}

type intersected_type = Students & Teacher;

let obj1: intersected_type = {
    student_id: 3232,
    student_name: "Hassan",
    teacher_id: 3232,
    teacher_name: "Zia"
};

console.log(obj1.teacher_id)
console.log(obj1.student_name)

