// Registering Component in log-component.js
AFRAME.registerComponent("base" ,{
    schema:{
     //data   (is an object that defines the property name, its types and default values)
    radius:{type:'number',default:150},
    height:{type:"number,default:3"},
    },
      init:function(){

       
            this.el.setAttribute= ("geometry",{
                primitive:"cylinder",
                radius:this.data.radius,
                height:this.data.height
            });
      
        //do something on every scene tick of fram
        
        
        this.el.setAttribute("material",{color:"#1769aa"});
       
    }
})