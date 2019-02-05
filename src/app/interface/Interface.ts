export interface ComicInterface {
    id: number,
    titulo: string,
    desc: string,
    isbn: string,
    fechapublicacion: Date,
    pagina: number,
    color: boolean,
    existencias: number,
    precio: number,
    descuento: number,
    foto: string,
    id_coleccion: ColeccionInterface
}

export interface ColeccionInterface {
    id: number,
    desc: string
}

export interface TipoUsuarioInterface {
    id: number,
    desc: string
}

export interface UsuarioInterface {
    id: number,
    dni: string,
    nombre: string,
    ape1: string,
    ape2: string,
    login: string,
    pass: string,
    email: string,
    id_tipousuario: TipoUsuarioInterface,
    token: string,
    validacion: boolean
}

export interface FacturaInterface {
    id: number,
    fecha: Date,
    iva: number,
    id_usuario: UsuarioInterface
}

export interface LineaInterface {
    id: number,
    cantidad: number,
    id_comic: ComicInterface,
    id_factura: FacturaInterface
}


export interface GeneroInterface {
    id: number,
    desc: string
}

export interface ComicGeneroInterface {
    id: number,
    id_genero: GeneroInterface,
    id_comic: ComicInterface
}


export interface EspecialidadInterface {
    id: number,
    desc: string
}

export interface EditorialInterface {
    id: number,
    desc: string
}

export interface ComicEditorialInterface {
    id: number,
    id_editorial: EditorialInterface,
    id_comic: ComicInterface
}

export interface AutorInterface {
    id: number,
    nombre: string
}

export interface AutorEspecialidad {
    id: number,
    id_especialidad: EspecialidadInterface,
    id_autor: AutorInterface,
    id_comic: ComicInterface
}

export interface IdiomaInterface {
    id: number,
    desc: string
}

export interface ComicIdiomaInterface {
    id: number,
    id_comic: ComicInterface,
    id_idioma: IdiomaInterface
}