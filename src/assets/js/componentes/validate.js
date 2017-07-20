const ValidateRuc = (update) => {
    const formContainer = $('<form action=""></form>');
    const div = $('<div class=""></div>');
    const labelRuc = $('<label for="ruc">RUC</label>');
    const inputRuc = $('<input id="ruc" type="number" placeholder="Ingresa RUC de 12 dígitos">');
    const btnValidate = $('<input id="consultar" type="submit" value="Consultar">');
    const message = $('<span></span>');

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
                message.text(response.data);
            })
            .catch(function (response) {
                console.log("algo ocurrió");
                console.log("código de error: " + response.code);
                console.log("mensaje de respuesta: " + response.status);
                console.log(response.data);
            })
        update();
        state.screen = PerfilRegister;
    });
    return formContainer;
};