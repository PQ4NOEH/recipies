module.exports = {
  fields: [
    { 
      key: "name", 
      type: "input", 
      templateOptions:{
        type:"text",
        label:"Nombre",
        placeholder:"Indica el nombre del plato",
        required:true
      } 
    },
    { 
      key: "ingredients", 
      type: "input", 
      templateOptions:{
        type:"text",
        label:"Ingredientes",
        placeholder:"Indica los ingredientes separados por comas",
        required:true
      } 
    },
    { 
      key: "tags", 
      type: "input", 
      templateOptions:{
        type:"text",
        label:"Etiquetas",
        placeholder:"Indica las etiquetar separadas por comas",
        required:true
      } 
    },
    { 
      key: "recipy", 
      type: "textarea", 
      templateOptions:{
        type:"text",
        label:"Receta",
        placeholder:"Como se hace"
      } 
    },
    { 
      key: "recipyUrl", 
      type: "input", 
      templateOptions:{
        type:"url",
        label:"Url de la receta"
      } 
    },
    { 
      key: "Imagen", 
      type: "input", 
      templateOptions:{
        type:"url",
        label:"Url de imagen"
      } 
    },

  ]
};