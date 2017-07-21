"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');

    if(state.screen == null){
        section.append(UserRegister( _ => render(root)));
    }else{
        section.append(state.screen( _ => render(root)));
    };

    root.append(section);
};
const state = {
    screen : null
}
$( _=>{
    const root =$('#root');
    render(root);
});

var config = {
    apiKey: "AIzaSyBDrFEJyWV-J3R8eQWdwKqw_uIgrbCgfC8",
    authDomain: "monyapp-bf79c.firebaseapp.com",
    databaseURL: "https://monyapp-bf79c.firebaseio.com",
    projectId: "monyapp-bf79c",
    storageBucket: "",
    messagingSenderId: "516782594145"
  };

firebase.initializeApp(config);

var db = firebase.database();

const stateUser = {
    name : null,
    email : null,
}

const stateCompany = {
    ruc : null,
    razonsocial : null,
    estado : null,
    tipo : null,
    direction : null    
}

const stateProfile = {
    monto : null,
    description : null,
    image : null,
    rubro :null
}

const stateRecompensa = {
    producto : false,
    acciones : false
}

db.ref('data').push({
    name : stateUser.name,
    email : stateUser.email,
    password : stateUser.pwd,
    company : {
        ruc : stateCompany.ruc,
        razsocial : stateCompany.razonsocial,
        econtribuyente : stateCompany.estado,
        tcontribuyente : stateCompany.tipo,
        direction : stateCompany.direction
    },
    perfil : {
        monto : stateProfile.monto,
        description : stateProfile.description,
        image : stateProfile.image,
        rubro : stateProfile.rubro,
        recompensa : {
            producto :stateRecompensa.producto,
            action : stateRecompensa.acciones
        }
    }
});