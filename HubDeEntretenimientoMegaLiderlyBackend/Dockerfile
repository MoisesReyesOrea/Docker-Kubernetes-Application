# Usar la imagen base de .NET Core
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
#EXPOSE 443 https

# Copiar y publicar la aplicación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "HubDeEntretenimientoMegaLiderlyBackend.csproj"
RUN dotnet publish "HubDeEntretenimientoMegaLiderlyBackend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "HubDeEntretenimientoMegaLiderlyBackend.dll"]
