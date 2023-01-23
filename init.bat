@echo off
echo Iniciando :: NataliaNatalia
echo Corriendo docker
cd nnk
docker compose up -d
echo ------------------------------------
echo MongoDB corriendo en el puerto 27017
echo ------------------------------------
echo _
echo La ventana permanecera abierta mientras necesites que el programa corra.
echo _
echo ------------------------------------
set /p input= Presiona cualquier tecla para bajar el docker y cerrar la applicación
echo ------------------------------------
echo cerrando docker
echo ------------------------------------
docker compose down
set /p input= Presiona cualquier tecla para cerrar
pause