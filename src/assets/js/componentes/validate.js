const ValidateRuc = (update) => {
    const formContainer = $('<form action=""></form>');
    const labelRuc = $('<label for="ruc">RUC</label>');
    const inputRuc = $('<input id="ruc" type="number">');
    const btnValidate = $('<input id="consultar" type="submit" value="Consultar">');

    formContainer.append(labelRuc);
    formContainer.append(inputRuc);
    formContainer.append(btnValidate);

    inputRuc.on('keydown keyup',(e) =>{

    });

    btnValidate.on('click', (e) =>{
        e.preventDefault();
        const ruc = inputRuc.val();
        const tecactusApi = new TecactusApi("dTBvBWAG9zNqDaIdYUPaPxirTypgikwWEvUVDJqT");
        tecactusApi.Sunat.getByRuc(ruc)
            .then(function (response) {
                console.log("consulta correcta!")
                console.log(response.data)
            })
            .catch(function (response) {
                console.log("algo ocurrió")
                console.log("código de error: " + response.code)
                console.log("mensaje de respuesta: " + response.status)
                console.log(response.data)
            })
    });
    return formContainer;
};