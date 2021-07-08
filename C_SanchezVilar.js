class Usuario_Class {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros 
        this.mascotas = mascotas
    }

    getFullName() {
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }

    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }

    getMascotas(){
        return this.mascotas.length
    }

    addBook(book, author){
        nuevoLibro = {
            libro: book,
            autor: author
        }
        this.libros.push(nuevoLibro)
    }

    getBook(){
        let getLibros = this.libros.map(libro => libro.libro)
        return getLibros
    }
}

const misOtrosLibros = [
    {
        libro:  'Sandokan',
        autor: 'Emilio Salgari'
    },
    {
        libro: 'El curioso incidente del perro a medianoche',
        autor: 'Mark Haddon'       
    }
]

const misOtrasMascotas = ['Roque','Lola']

let Lucia = new Usuario_Class('Lucia','Sanchez', misOtrosLibros, misOtrasMascotas)

console.log(Lucia.getFullName())

Lucia.addMascota('Apolo')

console.log(Lucia.mascotas)

console.log(Lucia.getMascotas())

Lucia.addBook('El señor de los anillos','J.R.R. Tolkien')

console.log(Lucia.getBook())