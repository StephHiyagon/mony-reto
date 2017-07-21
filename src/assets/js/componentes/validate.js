const details = () => {
    const divResponse = $('<div class="response"></div>');
    const message = $('<span></span>');
    const ulData = $(`<ul>
                            <li>Ruc: ${state.dataSunat.ruc}</li>
                            <li>Razon Social: ${state.dataSunat.razon_social}</li>
                            <li>Estado Contribuyente: ${state.dataSunat.estado_contribuyente}</li>
                            <li>Tipo de Contribuyente: ${state.dataSunat.tipo_contribuyente}</li>
                            <li>Dirección: ${state.dataSunat.direccion}</li>
                      </ul>`);
    const messageValidate = $('<span></span>');
    const btnSave = $('<button id="btnSend" type="submit" disabled>Guardar Datos</button>');

    if ((typeof state.dataSunat)=== "string"){
        divResponse.empty();
        divResponse.append(message);
    }else {
        divResponse.empty();
        divResponse.append(ulData);
        divResponse.append(btnSave);

        if (state.dataSunat.tipo_contribuyente == "PERSONA NATURAL SIN NEGOCIO"){
            messageValidate.text('Para poder registrarte debes tener un negocio mayor a 1 año');
            disabledButton(btnSend.attr('id'));
        }else {
            enabledButton(btnSend.attr('id'));
        }
    }
    btnSave.on('click',() => {
        state.screen = PerfilRegister;
        update();
    });

    return divResponse;
};
const ValidateRuc = (update) => {
    const formContainer = $('<form action=""></form>');

    const labelRuc = $('<label for="ruc">RUC</label>');
    const inputRuc = $('<input id="ruc" type="number" placeholder="Ingresa RUC de 12 dígitos">');
    const btnValidate = $('<input id="consultar" type="submit" value="Consultar">');

    formContainer.append(labelRuc);
    formContainer.append(inputRuc);
    formContainer.append(btnValidate);

    btnValidate.on('click', (e) =>{
        e.preventDefault();
        const tecactusApi = new TecactusApi("dTBvBWAG9zNqDaIdYUPaPxirTypgikwWEvUVDJqT");
        tecactusApi.Sunat.getByRuc(inputRuc.val())
            .then(function (response) {
                message.empty();
                console.log("consulta correcta!");
                state.dataSunat = response.data;
                details(update);
            })
            .catch(function (response) {
                console.log("algo ocurrió");
                console.log("código de error: " + response.code);
                console.log("mensaje de respuesta: " + response.status);
                console.log(response.data);
            })
    });
    return formContainer;
};