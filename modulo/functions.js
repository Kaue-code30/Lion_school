/*
Nome: Kauê e Monica 
Versão: 1.0
Objetivo: Criar as funções do Back-end
*/

const course = require('./cursos.js')
const student = require('./alunos.js')
const alunos = require('./alunos.js')


const getListCourse = function(){
    let listCourse = []
    let jsonCourse = {}
 
    course.cursos.forEach(function(dataCourse){
        listCourse.push({nome:dataCourse.nome,sigla:dataCourse.sigla,icone:dataCourse.icone,carg:dataCourse.carga})
        jsonCourse.course = listCourse
    })
    return jsonCourse
}

const getListNameStudents = function(){
    let listStudent = []
    let jsonStudent = {}

    student.alunos.forEach(function(dataStudent){
        listStudent.push({
            name:dataStudent.nome,
            registration:dataStudent.matricula,
            sex:dataStudent.sexo,
            course:dataStudent.curso,
            status:dataStudent.status,
            photo:dataStudent.foto})
        jsonStudent.student = listStudent
    })
    return jsonStudent
}

const getStudentInformation = function(registration){
    let listStudent = []
    let jsonStudent = {}

    student.alunos.forEach(function(dataStudent){
        if(registration == dataStudent.matricula){
           listStudent.push({
                nome:dataStudent.nome,
                registration:dataStudent.matricula,
                sex:dataStudent.sexo,
                course:dataStudent.curso,
                status:dataStudent.status,
                photo:dataStudent.foto})
        }
        
        jsonStudent.student = listStudent
    })
    return jsonStudent
}

const getStudentsForCourse = function(course){
    let listStudent = []
    let jsonStudent = {}
    let curso = course.toUpperCase()
    student.alunos.forEach(function(students){

        students.curso.forEach(function(dataCourse){

            if(curso == dataCourse.sigla){
                listStudent.push(
                    {        
                        name:students.nome,
                        registration:students.matricula,
                        sex:students.sexo,
                        course:students.curso,
                        status:students.status,
                        photo:students.foto })
            }
        })
     
    })
   jsonStudent.Student = listStudent
   
    return jsonStudent
}

const getStudentsStatus = function(status){
    
    let listStudent = []
    let jsonStudent = {}


    student.alunos.forEach(function(students){
      if(status == students.status){
          listStudent.push(
              { 
                name:students.nome,
                registration:students.matricula,
                sex:students.sexo,
                course:students.curso,
                status:students.status,
                photo:students.foto,
                date:students.curso.forEach(function(date){
                    date.conclusao
                }),
                diciplinas:students.curso.forEach(function(diciplina){
                    diciplina.disciplinas
                })
            }
            )
          jsonStudent.name = listStudent
      }
    })
    return jsonStudent
}



module.exports = {
    getListCourse,
    getListNameStudents,
    getStudentInformation,
    getStudentsForCourse,
    getStudentsStatus
}