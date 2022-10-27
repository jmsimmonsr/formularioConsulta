import { Component, OnInit } from '@angular/core';
import { SERVICIO , data_CATEGORIAS, data_MODALIDADES, data_ESTATUS_CONCURSO, paginas, RESULTADO_BUSQUEDA } from '../../modelos/modelos';
import { ApiService } from "../../servicios/api.service";

@Component({
  selector: 'app-ver-datos',
  templateUrl: './ver-datos.component.html',
  styleUrls: ['./ver-datos.component.css']
})
export class VerDatosComponent implements OnInit {

  constructor(private apiservice: ApiService) {  }

  public paginas : paginas[] = [
    {
      nombre :'verCategoria',
      valor : true
    },
    {
      nombre :'verModalidades',
      valor : false
    },
    {
      nombre :'verEstatusContrato',
      valor : false
    },
    {
      nombre :'verGenerales',
      valor : false
    },
    {
      nombre: 'verResultados',
      valor : false
    }
  ];

  public servicio : SERVICIO = {
    CATEGORIAS : {
      AYUDA: "",
      ES_VISIBLE : true,
      NOMBRE_CAMPO : "",
      ORDER: 0,
      REQUIERE_LOGIN : true,
      Data : [
        {
          CANTIDAD: 0,
          CATEGORIA_CONCURSO: 0,
          NOMBRE: "",
          SELECCIONADO : false
        }
      ]
    },
    MODALIDADES : {
      AYUDA: "",
      ES_VISIBLE : true,
      NOMBRE_CAMPO : "",
      ORDER: 0,
      REQUIERE_LOGIN : true,
      Data : [
        {
          MODALIDAD: 0,
          NOMBRE: "",
          SELECCIONADO : false
        }
      ]
    },
    ESTATUS_CONCURSO : {
      AYUDA: "",
      ES_VISIBLE : true,
      NOMBRE_CAMPO : "",
      ORDER: 0,
      REQUIERE_LOGIN : true,
      Data : [
        {
          ESTATUS_CONCURSO: 0,
          NOMBRE: "",
          SELECCIONADO : false
        }
      ]
    },
    TIPO_ENTIDAD : {
      AYUDA: "",
      ES_VISIBLE : true,
      NOMBRE_CAMPO : "",
      ORDER: 0,
      REQUIERE_LOGIN : true,
      Data : [
        {
          NOMBRE: "",
          TIPO_ENTIDAD : 0
        }
      ]
    }
  };

  public resultado : RESULTADO_BUSQUEDA = {
    Meta: {
      ContadorRespuesta : 0,
      PaginaActual : 0,
      PaginasTotales : 0,
      TotalItems : 0
    },
    Data : [{
      NOG_CONCURSO: 0,
      ESTATUS_CONCURSO: "",
      DESCRIPCION: "",
      MODALIDAD: ""
    }]
  };


  public tipoEntidad : number = 0;

  public fechaInicio = new Date();
  public fechaFin = new Date();
  public nog : string = "";

  ngOnInit(): void {
      this.consumeServicio();
  }


  consumeServicio (): void{
      this.apiservice.GetCatalogoConcurso().
      subscribe((result)=>{
        this.servicio = result;
      });
  }

  selecciarCategorias(seleccionado : data_CATEGORIAS){

      this.servicio.CATEGORIAS.Data.find(x =>
        {
          if (x.CATEGORIA_CONCURSO === seleccionado.CATEGORIA_CONCURSO){
            if (x.SELECCIONADO){
              x.SELECCIONADO = false;
            }else{
              x.SELECCIONADO = true;
            }
          }
        }
      );
  }

  seleccionarModalidades(seleccionado : data_MODALIDADES){

    this.servicio.MODALIDADES.Data.find(x =>
      {
        if (x.MODALIDAD === seleccionado.MODALIDAD){
          if (x.SELECCIONADO){
            x.SELECCIONADO = false;
          }else{
            x.SELECCIONADO = true;
          }
        }
      }
    );
  }

  seleccionarEstatusConcurso(seleccionado : data_ESTATUS_CONCURSO){

    this.servicio.ESTATUS_CONCURSO.Data.find(x =>
      {
        if (x.ESTATUS_CONCURSO === seleccionado.ESTATUS_CONCURSO){
          if (x.SELECCIONADO){
            x.SELECCIONADO = false;
          }else{
            x.SELECCIONADO = true;
          }
        }
      }
    );
  }

  paginaActiva(nombrePagina : string): void{
    this.paginas.filter(x =>{
      if (x.nombre == nombrePagina){
        x.valor = true;
      }else{
        x.valor = false;
      }
    })
  }



  enviarFormulario() : void{
    const categoriasSeleccionadas :number [] = [];

    this.servicio.CATEGORIAS.Data.filter(x =>{
      if (x.SELECCIONADO == true){
          categoriasSeleccionadas.push(x.CATEGORIA_CONCURSO)
      }
    })

    const modalidadesSeleccionadas :number [] = [];

    this.servicio.MODALIDADES.Data.filter(x =>{
      if (x.SELECCIONADO == true){
        modalidadesSeleccionadas.push(x.MODALIDAD)
      }
    })


    const estatusConcursoSeleccionadas :number [] = [];

    this.servicio.ESTATUS_CONCURSO.Data.filter(x =>{
      if (x.SELECCIONADO == true){
        estatusConcursoSeleccionadas.push(x.ESTATUS_CONCURSO)
      }
    })

      const json = {
        "DeviceId" : "",
        "SEGMENTOINFO":{
            "ITEMSPORPAGINA" : 10,
            "NUMEROPAGINA" : 1,
        },
        "FILTROSCONCURSO":{
          "NOGOTEXTO" : this.nog,
          "MODALIDADES": modalidadesSeleccionadas,
          "SUBMODALIDADES" : [],
          "ESTATUSCONCURSO": null,
          "CATEGORIAS" : categoriasSeleccionadas,
          "REQUIRE_SNIP": null,
          "ESPECIALIDADESPOCATEGORIAS" : [],
          "TIPORECEPCIONOFERTA" : null,
          "TIPO_ENTIDAD" : this.tipoEntidad,
          "SUB_TIPO_ENTIDAD" : null,
          "ENTIDAD_COMPRADORA" : null,
          "UNIDAD_COMPRADORA" :  null,
          "FECHA_PUBLICACION_INICIAL" :  null,
          "FECHA_PUBLICACION_FINAL": null,
          "ESTATUS_OFERTA": null,
          "IDCAMPO": null
          }
      }

      this.apiservice.GetBusquedaConcursos(json).
      subscribe((result)=>{
         this.resultado = result;

         this.paginaActiva('verResultados');

      });
  }


  nuevaBusqueda(): void {
    this.paginaActiva('verCategoria');
    this.consumeServicio();
  }
}
