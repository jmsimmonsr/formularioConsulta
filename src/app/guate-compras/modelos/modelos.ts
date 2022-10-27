export interface SERVICIO {
  CATEGORIAS: CATEGORIAS,
  MODALIDADES : MODALIDADES,
  ESTATUS_CONCURSO : ESTATUS_CONCURSO,
  TIPO_ENTIDAD : TIPO_ENTIDAD
}

export interface  CATEGORIAS {
  AYUDA: string,
  ES_VISIBLE : boolean,
  NOMBRE_CAMPO : string,
  ORDER: number,
  REQUIERE_LOGIN : boolean,
  Data : data_CATEGORIAS[]
}

export interface data_CATEGORIAS {
  CANTIDAD: number,
  CATEGORIA_CONCURSO: number,
  NOMBRE: string,
  SELECCIONADO: boolean
}

export interface MODALIDADES
{
  AYUDA: string,
  ES_VISIBLE : boolean,
  NOMBRE_CAMPO : string,
  ORDER: number,
  REQUIERE_LOGIN : boolean,
  Data : data_MODALIDADES[]
}

export interface data_MODALIDADES {
  MODALIDAD: number,
  NOMBRE: string,
  SELECCIONADO: boolean
}

export interface ESTATUS_CONCURSO{
  AYUDA: string,
  ES_VISIBLE : boolean,
  NOMBRE_CAMPO : string,
  ORDER: number,
  REQUIERE_LOGIN : boolean,
  Data : data_ESTATUS_CONCURSO[]
}

export interface data_ESTATUS_CONCURSO {
  ESTATUS_CONCURSO: number,
  NOMBRE: string,
  SELECCIONADO: boolean
}

export interface TIPO_ENTIDAD {
  AYUDA: string,
  ES_VISIBLE : boolean,
  NOMBRE_CAMPO : string,
  ORDER: number,
  REQUIERE_LOGIN : boolean,
  Data : data_TIPO_ENTIDAD[]
}

export interface data_TIPO_ENTIDAD {
  NOMBRE: string,
  TIPO_ENTIDAD: number
}

export interface paginas {
  nombre: string,
  valor : boolean
}

export interface RESULTADO_BUSQUEDA {
  Meta: {
    ContadorRespuesta : number
    PaginaActual : number,
    PaginasTotales : number,
    TotalItems : number
  },
  Data : data_RESULTADO_BUSQUEDA[]

}

export interface data_RESULTADO_BUSQUEDA {
  NOG_CONCURSO: number,
  ESTATUS_CONCURSO: string,
  DESCRIPCION: string,
  MODALIDAD: string
}



