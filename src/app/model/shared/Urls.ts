export enum Urls {
    baseUrl = "http://localhost:8080",
    //baseUrl = "/api",

    /* USUARIO */
    login = "/login",

    /* DINERO */
    dinero = "/dinero/",
    getDineroActual = "get-dinero-actual",

    /* CHARTS */
    charts = "/informacion/",
    getLineChartData = "get-liquidez",
    getGastosPieChartData = "get-gastos",
    getIngresosPieChartData = "get-ingresos",

    /*****************************************************************************************/
    /* COMPARTEN ENDPOINTS */

    /* CLIENTE */
    cliente = "/clientes/",

    /* FACTURA */
    factura = "/facturas/",

    /* TELA */
    tela = "/telas/",
    getByQuery = "search",

    /* MOVIMIENTO */
    movimiento = "/movimientos/",
    getRangeOfTime ="rot",
    getGastos = "gasto/",
    getIngresos = "ingreso/",
    insertMulti = "multiple",

    /* COMUNES */
    getTodos = "get/",
    insert = "insert/",
    updateById = "update/",
    deleteById = "delete/",
    getById = "get/"

    
}