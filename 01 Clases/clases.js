class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.name = nombre
        this.lastname = apellido
        this.books = libros
        this.pets = mascotas
    }

    getFullName () {
        return `${this.name} ${this.lastname}`
    }

    addMascota (nombreMascota) {
        this.pets.push(nombreMascota)
        return this.pets
    }

    countMascotas () {
        return this.pets.length
    }

    addBook (nombre, autor) {
        let newBook = {name: nombre, author: autor}
        this.books.push(newBook)

        return this.books
    }

    getBookNames () {
        let names = this.books.map((book) => {
            return book.name
        })

        return names
    }
}

let alexis = new Usuario('Alexis', 'Olveres', [{name: 'Deja de ser tu', author: 'Joe Dispenza'}, {name: 'Piense y hagase rico', author: 'Napoleon Hill'}], ['Estrella', 'Chiquito'])