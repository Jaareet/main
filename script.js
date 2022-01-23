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

function bandolerosView(){
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title mobile">
                    Jaareet's Web - BandolerosRP
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        <span class="sub">
                            Estos son los servicios a los que puedes conectarte
                        </span>
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href = "https://discord.gg/FTpYPvJmjJ">Discord</a></button>
                    <br>
                    <button><a onClick="Web()">Website</a></button>
                    <br>
                    <button><a onClick="svBandoleros()">Servidor</a></button>
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

function svBandoleros(){
    $("body").html(
        `
        <div class="info">
            <div class="container">
                <div class="title mobile">
                    Jaareet's Web - BandolerosRP
                    <hr>
                    <div class="subtitle" style="position:absolute;left:50%;top:80%;transform:translateX(-50%);font-size: .89vw;">
                        <span class="sub">
                            Estos son los servicios a los que puedes conectarte
                        </span>
                    </div>
                </div>
                <div class="buttons" align = "center">
                    <button><a href="fivem://connect/cfx.re/join/5ajlg7">Conectarse</a></button>
                    <br>
                    <button><a href="https://servers.fivem.net/servers/detail/5ajlg7">Información</a></button>
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