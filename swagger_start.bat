@echo off
rem On Windows need to be run from Powershell
docker run -p 8080:8080 -e SWAGGER_JSON=/swagger/swagger.json -v %cd%\api\dist:/swagger  swaggerapi/swagger-ui
echo "http://localhost:8080"
