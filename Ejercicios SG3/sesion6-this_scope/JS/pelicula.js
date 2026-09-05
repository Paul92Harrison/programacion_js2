class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }
    static listaGeneros = [
        "Acción", "Adultos", "Animación", "Autobiografía", "Aventura",
        "Ciencia ficción", "Cine negro", "Comedia", "Concursos de televisión", "Crimen",
        "Deportes", "Documental", "Drama", "Familiar", "Fantasía",
        "Guerra", "Historia", "Musicales", "Misterio", "Noticias",
        "Películas de vaqueros", "Programa de entrevistas", "Reality shows",
        "Romance", "Suspenso", "Terror"
    ];
    validarCadena(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}"está vacío.`);
            return false;
        }
        if (typeof valor !== "string") {
            console.error(
                `${propiedad} "${valor}"  no es una cadena de texto.`,
            );
            return false;
        }
        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena("IMDB ID", id)) {
            const regex = /^([a-z]{2})([0-9]{7})$/;

            if (!regex.test(id)) {
                console.error(`IMDB ID "${id}" no es válido, debe tener nueve caracteres: los dos primeros letras minúsculas y los siete restantes números.`);
                return false;
            }
        }

        return true;
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) {
            console.error(
                `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`,
            );
            return false;
        }
        return true;
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Título", titulo)) {
            if (this.validarLongitudCadena("Título", titulo, 100)) {
                return true;
            }
        }
        console.error(`Título "${titulo}" no es válido`);
        return false;
    }

    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            if (this.validarLongitudCadena("Director", director, 50)) {
                return true;
            }
        }
        console.error(`Director "${director}" no es válido`);
        return false;
    }

    validarNumero(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}" está vacío`);
            return false;
        }

        if (typeof valor !== "number") {
            console.error(`${propiedad} "${valor}" ingresado no es un número`);
            return false;
        }

        return true;
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de estreno", estreno)) {
            if (!/^\d{4}$/.test(estreno)) {
                console.error(`Año de estreno "${estreno}" no es válido, 
                               debe ser un número de 4 dígitos`);
                return false;
            }
            return true;
        }
        return false;
    }
    validarArreglo(propiedad, valor) {
        if (!valor) {
            console.warn(`${propiedad} "${valor}" está vacío`);
            return false;
        }

        if (!Array.isArray(valor)) {
            console.error(`${propiedad} "${valor}" no es un arreglo`);
            return false;
        }

        if (valor.length === 0) {
            console.error(`${propiedad} "${valor}" no tiene elementos`);
            return false;
        }

        for (let elemento of valor) {
            if (typeof elemento !== "string") {
                console.error(
                    `${propiedad} contiene un elemento no válido: "${elemento}" no es una cadena de texto`,
                );
                return false;
            }
        }
        return true;
    }
    validarPais(pais) {
        return this.validarArreglo("Pais", pais);


    }
    static generosAceptados() {
        console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }
    validarGeneros(generos) {
        if (this.validarArreglo("Géneros", generos)) {
            for (let genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(
                        `Género "${genero}" no es aceptado. 
                         Géneros recibidos: ${generos.join(", ")}`
                    );
                    Pelicula.generosAceptados();
                }
            }
        }
    }
    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificacion", calificacion)) {
            if (calificacion < 0 || calificacion > 10) {
                console.error(`la calificacion "${calificacion}" debe estar en un rango entre 0 y 10.`);

            } else {
                this.calificacion = parseFloat(calificacion.toFixed(1));
            }

        }

    }
    fichaTecnica() {
        console.info(
            `Ficha Tecnica:
        ID: ${this.id}
        Titulo: ${this.titulo}
        Director: ${this.director}
        Año de estreno: ${this.estreno}
        Pais(es): ${this.pais.join(", ")}
        Genero(s): ${this.generos.join(", ")}
        Calificacion: ${this.calificacion}`,

        )


    }


}

Pelicula.generosAceptados();

const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Demon Slayer Castillo Infinito",
    director: "Tanjiro kamado",
    estreno: 2020,
    pais: ["Mexico"],
    generos: ["Drama"],
    calificacion: 9,


});

const peliculasData = [
    {
        id: "tt1234567",
        titulo: "Inception 2",
        director: "Christopher Nolan",
        estreno: 2011,
        pais: ["Estados Unidos", "Reino Unido"],
        generos: ["Acción", "Ciencia ficción", "Suspenso"],
        calificacion: 8.8
    },
    {
        id: "tt2345678",
        titulo: "The Matrix",
        director: "Lana Wachowski",
        estreno: 1999,
        pais: ["Estados Unidos"],
        generos: ["Acción", "Ciencia ficción"],
        calificacion: 8.7
    },
    {
        id: "tt3456789",
        titulo: "Interstellar",
        director: "Christopher Nolan",
        estreno: 2014,
        pais: ["Estados Unidos", "Reino Unido"],
        generos: ["Aventura", "Drama", "Ciencia ficción"],
        calificacion: 8.6
    }
];

peliculasData.forEach(peliculaData => {
    const pelicula = new Pelicula(peliculaData);
    pelicula.fichaTecnica();


});


peli.fichaTecnica();