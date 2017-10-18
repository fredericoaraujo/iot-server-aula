var Hapi = require('hapi')

var SerialPort = require('serialport');

var states;

var port = new SerialPort('/dev/tty.usbserial-A903VLDT', {
  baudRate: 115200
});

//var read = port.read(4);
port.on('readable', function () {
    var data = port.read();

    if (data[0] == 123) { //123 = { in ASC
        states = JSON.parse(data);
        console.log(states.leds);
    }
});

const server = new Hapi.Server();
server.connection({ port: 8081, host: '0.0.0.0' });

server.route({
    method: 'GET',
    path: '/led/{led}/{action}',
    handler: function (request, reply) {
        var led = request.params.led;
        var action = request.params.action;

        var data = 'w' + led + action;

        port.write(data, function(err) {
            if (err)
                return reply().code(501);

            console.log(`# LED led:  ${led} action: ${action}`);
            return reply();
        });
    }
});

server.route({
    method: 'GET',
    path: '/led',
    handler: function (request, reply) {
        reply(states);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
}); 
