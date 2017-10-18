# iot-server-aula

## Pré-Requisitos
Para que seja possível utilizar este código-fonte apresntado em sala de aula, será necessrio baixar o [NodeJS](https://nodejs.org/). 
Este código utiliza porta serial, logo, o campo SERIAL_PATH deverá ser configurado conforme este [link](https://github.com/EmergingTechnologyAdvisors/node-serialport#new_module_serialport--SerialPort_new)

## Instalação
Para iniciar o programa, será necessário executar os seguintes comandos na pasta do projeto:

```{r, engine='bash', count_lines}
$npm install .
$node app.js 
```

## Verificação
Para saber se o programa está rodando, verifique se depois de executar o último comando aparece a seguinte mensagem: "Server running at: PORTA IP"
