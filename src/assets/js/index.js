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
    screen : null,
    dataSunat : null
}
$( _=>{
    const root =$('#root');
    render(root);
})