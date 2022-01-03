function Monterrey(){
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title">
                    Jaareet's Web - Monterrey Academy
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        Estos son los servicios a los que puedes conectarte
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href = "https://discord.gg/CCUcJte5VZ">Discord</a></button>
                    <br>
                    <button><a onClick="Web()">Website</a></button>
                    <br>
                    <button><a onClick="Web()">Servidor</a></button>
                    <!-- <button><a href="fivem://connect/cfx.re/join/{serverConnect}">Servidor</a></button> -->
                    <br>
                    <button><a href = "index.html">Volver</a></button>
                </div>
            </div>
        </div>
        `
    )
}

function Jerarquia() {
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title mobile">
                    Jaareet's Web - La JerarquiaRP
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        <span class="sub">
                            Estos son los servicios a los que puedes conectarte
                        </span>
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href="fivem://connect/cfx.re/join/ozqbxv">Conectarse</a></button>
                    <br>
                    <button><a href="https://servers.fivem.net/servers/detail/ozqbxv">Información</a></button>
                    <br>
                    <button><a href = "index.html">Volver</a></button>
                </div>
            </div>
        </div>

        <style>
            @media only screen and (max-width: 375px) {
                .container .mobile {
                    width: max-content;
                    font-size: 4.5vw;
                    padding: 10vw 0;
                }
                .subtitle {
                    width: 70vw;
                    margin: -5vw 0;
                }
                .sub {
                    font-size: 3.5vw;
                }
            }
        </style>

        `
    )
}

function Informacion() {
    $("body").html(
        `
            <div class="info">
            <div class="container">
                <div class="title">
                    <span class="mobTitle">Jaareet's Web - Updates</span>
                    <hr>
                    <div class="subtitle mobSub">
                        Aquí veras las actualizaciones de la web
                        <br>
                    </div>
                </div>
                <div class="buttons mobile" align = "center">
                    <div class="fontBoard" style="font-size: .9vw">
                        <span class="title-cont">Updates</span>
                        <br>
                        <br>
                        <span class="font-t">
                            - Hemos actualizado la interfaz de la web, hemos implementado este panel de informacion ademas de un responsive para Móviles en la web principal unicamente.
                            <div class="sepair"></div>
                            - Hemos metido nuevos paneles que indican diferentes servicios ejem : Discord, Website, Servidor, etc..
                            <div class="sepair"></div>
                            - Hemos comprimido y mejorado la calidad del html y css de la web principal, poniendole resoluciones moviles y tabletas, (Importante) - la web obviamente todavia no tiene el responsive correcto aplicado, pero se seguira trabajando en ello.
                            <div class="sepair"></div>
                            <span class="title-cont">Tareas</span>
                            <br>
                            <br>
                            - Trabajar en el responsive de las nuevas implementaciones.
                            <div class="sepair"></div>
                            - Añadir servidor de FiveM del apartado de Monterrey Academy.
                        </span>
                    </div>
                </div>
                <div class="hg" align="center">
                    <span class="font-d">
                        No encuentras lo que deseas aqui?
                        <br>
                        Vuelve a la pagina principal clickeado <a class="info-a" href="./index.html">Aquí</a>
                    </span>
                </div>
            </div>
        </div>
        <style>
            .fontBoard {
                text-align: start;
                height: 10vw;
                width: 40vw;
            }
            .title-cont {
                font-size: 1.5vw;
                color: skyblue;
            }
            .font-t {
                font-size: .9vw;
                color: rgba(238, 238, 238, 0.411);
                margin: 0;
            }
            .font-t:hover {
                cursor: pointer;
                transition: .4s;
                color: #fff;
            }
            .sepair {
                margin: .5vw;
            }
            .info-a {
                color: skyblue;
            }
            .info-a:hover {
                transition: .12s;
                text-decoration: underline;
            }
            .hg {
                position: absolute;
                font-size: .9vw;
                left: 50%;
                top: 30%;
                transform: translate(-50%,-50%);
            }
            .font-d {
                color: #fff;
            }
            .font-d:hover {
                cursor: pointer;
                transition: .3s;
                color: rgba(255, 255, 255, .5);
            }

            .subtitle {
                position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;
            }

            @media only screen and (max-width: 375px) {
                .fontBoard {
                    width: 80vw;
                }
                .hg {
                    top: 40%;
                }
                .font-d {
                    font-size: 3vw;
                }
                .hg {
                    position:absolute;
                    width: 80vw;
                    top: 25%;
                }
                .mobile {
                    position: absolute;
                    top: 50%;
                }
                .title {
                    font-size: 1vw;
                }
                .mobSub {
                    width: 80vw;
                    font-size: 3vw;
                }
                .mobTitle {
                    font-size: 5vw;
                }
                .font-t {
                    font-size: 3vw;
                }
                .fontBoard {
                    text-align: start;
                    height: 80%;
                    width: 100%;
                }
                .title-cont {
                    font-size: 5vw;
                }
            }
        </style>
        `
    )
}
function JerarquiaView(){
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title mobile">
                    Jaareet's Web - La JerarquiaRP
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        <span class="sub">
                            Estos son los servicios a los que puedes conectarte
                        </span>
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href = "https://discord.gg/lajerarquiarp">Discord</a></button>
                    <br>
                    <button><a onClick="Web()">Website</a></button>
                    <br>
                    <button><a onClick="Jerarquia()">Servidor</a></button>
                    <br>
                    <button><a href = "index.html">Volver</a></button>
                </div>
            </div>
        </div>
        <style>
            @media only screen and (max-width: 375px) {
                .container .mobile {
                    width: max-content;
                    font-size: 4.5vw;
                    padding: 10vw 0;
                }
                .subtitle {
                    width: 70vw;
                    margin: -5vw 0;
                }
                .sub {
                    font-size: 3.5vw;
                }
            }
        </style>

        `
    )
}

function Web(){
    $("body").html(
        `
            <div class="info">
            <span class="texto-central" style="width: max-content;">
                No hemos encontrado nada de lo que buscas
                <br>
                <span style="font-size: 1vw">
                    O el servicio todavia no esta disponible o esta en desarrollo
                </span>
            </span>
            <svg class="loading-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(20 50)">
                <circle cx="0" cy="0" r="6" fill="#e15b64">
                <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                </circle>
                </g><g transform="translate(40 50)">
                <circle cx="0" cy="0" r="6" fill="#f8b26a">
                <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                </circle>
                </g><g transform="translate(60 50)">
                <circle cx="0" cy="0" r="6" fill="#abbd81">
                <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                </circle>
                </g><g transform="translate(80 50)">
                <circle cx="0" cy="0" r="6" fill="#81a3bd">
                <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                </circle>
                </g>
            </svg>
            <div class="button-back">
                <div class="buttons" align = "center">
                    <button><a href = "index.html">Volver</a></button>
                </div>
            </div>
        </div>
        `
    )
}
function Redirecting(){
    $("body").html(
        `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="assets/media/style.css">
                    <meta http-equiv="refresh" content="5; url =https://mee6.xyz/leaderboard/917918881702633582">
                    <title>Jaareet#0097</title>
                </head>
                <body>
                    <div class="info">
                        <span class="texto-central">Espera mientras le redirigimos al panel</span>
                        <svg class="loading-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                            <g transform="translate(20 50)">
                            <circle cx="0" cy="0" r="6" fill="#e15b64">
                            <animateTransform attributeName="transform" type="scale" begin="-0.375s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            </g><g transform="translate(40 50)">
                            <circle cx="0" cy="0" r="6" fill="#f8b26a">
                            <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            </g><g transform="translate(60 50)">
                            <circle cx="0" cy="0" r="6" fill="#abbd81">
                            <animateTransform attributeName="transform" type="scale" begin="-0.125s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            </g><g transform="translate(80 50)">
                            <circle cx="0" cy="0" r="6" fill="#81a3bd">
                            <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            </g>
                        </svg>
                    </div>
                </body>
            </html>
        `
    )
}

function EastwoodView(){
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title mobile">
                    Jaareet's Web - EastwoodRP
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        <span class="sub">
                            Estos son los servicios a los que puedes conectarte
                        </span>
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href = "https://discord.gg/42c3jBKwGF">Discord</a></button>
                    <br>
                    <button><a onClick="Web()">Website</a></button>
                    <br>
                    <button><a onClick="svEastwood()">Servidor</a></button>
                    <br>
                    <button><a href = "index.html">Volver</a></button>
                </div>
            </div>
        </div>
        <style>
            @media only screen and (max-width: 375px) {
                .container .mobile {
                    width: max-content;
                    font-size: 4.5vw;
                    padding: 10vw 0;
                }
                .subtitle {
                    width: 70vw;
                    margin: -5vw 0;
                }
                .sub {
                    font-size: 3.5vw;
                }
            }
        </style>
        `
    )
}

function svEastwood(){
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title mobile">
                    Jaareet's Web - EastwoodRP
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        <span class="sub">
                            Estos son los servicios a los que puedes conectarte
                        </span>
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href="fivem://connect/cfx.re/join/8e6xy5">Conectarse</a></button>
                    <br>
                    <button><a href="https://servers.fivem.net/servers/detail/8e6xy5">Información</a></button>
                    <br>
                    <button><a href = "index.html">Volver</a></button>
                </div>
            </div>
        </div>

        <style>
            @media only screen and (max-width: 375px) {
                .container .mobile {
                    width: max-content;
                    font-size: 4.5vw;
                    padding: 10vw 0;
                }
                .subtitle {
                    width: 70vw;
                    margin: -5vw 0;
                }
                .sub {
                    font-size: 3.5vw;
                }
            }
        </style>

        `
    )
}