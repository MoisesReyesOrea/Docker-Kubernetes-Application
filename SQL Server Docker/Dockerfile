# Usar la imagen oficial de SQL Server 2022
FROM mcr.microsoft.com/mssql/server:2022-latest

# Establecer variables de entorno necesarias
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=IngresaElPassDeTuBaseDeDatos

# Exponer el puerto SQL Server
EXPOSE 1433

# Crear un directorio para las copias de seguridad
RUN mkdir -p /var/opt/mssql/backup

# Copiar el archivo .bak en el contenedor
COPY HubEntretenimientoMega.bak /var/opt/mssql/backup/

# Comando para restaurar la base de datos al iniciar el contenedor
CMD /bin/bash -c "/opt/mssql/bin/sqlservr & sleep 30 && \
    /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P TuPasswordSegura123 -Q \"RESTORE DATABASE [HubEntretenimientoMega] FROM DISK = N'/var/opt/mssql/backup/HubEntretenimientoMega.bak' WITH MOVE 'HubEntretenimientoMega' TO '/var/opt/mssql/data/HubEntretenimientoMega.mdf', MOVE 'HubEntretenimientoMega_log' TO '/var/opt/mssql/data/HubEntretenimientoMega_log.ldf'\" && tail -f /dev/null"
