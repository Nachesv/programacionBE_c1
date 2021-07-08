function Usuario(nombre, apellido, libros, mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros 
    this.mascotas = mascotas

    this.getFullName =  function() {
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }

    this.addMascota = function(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }

    this.getMascotas = function(){
        return this.mascotas.length
    }

    this.addBook = function(book, author){
        nuevoLibro = {
            libro: book,
            autor: author
        }
        this.libros.push(nuevoLibro)
    }

    this.getBook = function(){
        let getLibros = this.libros.map(libro => libro.libro)
        return getLibros
    }


}

// const miNombre = 'Ignacio'
const misLibros = [
    {
        libro:  'Sandokan',
        autor: 'Emilio Salgari'
    },
    {
        libro: 'El curioso incidente del perro a medianoche',
        autor: 'Mark Haddon'       
    }
]

const misMascotas = ['Roque','Lola']

let Ignacio = new Usuario('Ignacio','Sanchez', misLibros, misMascotas)

console.log(Ignacio.getFullName())

Ignacio.addMascota('Apolo')

console.log(Ignacio.mascotas)

console.log(Ignacio.getMascotas())

Ignacio.addBook('El señor de los anillos','J.R.R. Tolkien')

console.log(Ignacio.getBook())