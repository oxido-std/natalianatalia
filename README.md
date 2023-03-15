# NataliaNatalia
<div style="text-align: center;">    
    <img src="public/icon-natalianatalia.png" alt="NataliaNatalia" width="128px"><br/>
    OSINT platform<br/>
    _README-SPANISH_
    <br/>
    <br/>
</div>

# ¿Qué es NataliaNatalia?

NataliaNatilia es una plataforma que permite la creación de perfiles para investigar con herramientas abiertas y aplicaciones quese utilicen para esos fines y almacene toda la información en archivos relacionados con esos perfiles.

* El fuerte de la plataforma será poder utilizar herramientas externas (algo así como los plugins de Maltego) y poder volcar esa información en un mismo lugar.

* El otro fuerte será tener todo almacenado en archivos (o en la base de datos) porque sabemos que todos los datos en internet son volátiles. Hoy están, mañana puede que no.

* Una plataforma pensada principalmente en español.

# Instalación:

## Requisitos:

    - Python ([https://www.python.org])

# Ejecutar

    1. Clonar el repo con el comando en una terminal o powershell

    ---
    git clone https://github.com/get-lasch/natalianatalia
    ---

    2. Descargar las dependencias de la applicación:

        Dentro de la carpeta _frontend_ como la carpeta _nnk_ ejecutar el siguiente comando desde la terminal
        
        ---
        yarn
        ---

    3. Ejecutar el archivo init.bat en windows o init.sh en linux
        // Esto ejecutar el _docker compose up_ para levantar la base de datos y la app
    
    4. Abrir el navegador en http://localhost:3007


# Todos:
    1. Realizar el Kernel (NNK)
    2. Seleccionar motor de base de datos (entre maríadb y mongodb) [DONE -> MongoDB]
    3. Crear la estructura de base de datos de la app.
    4. Crear el frontend
    5. Documentación de instalación con niveles: Fácil, intermedio, difícil. [IN PROCESS]
    6. Exploración de perfiles.
    7. Creación de archivos ejecutables para poder manejar mejor las aplicaciones. [IN PROCESS]


# Tecnologías:
Rust, HTML, CSS, JAVASCRIPT, VUE framework