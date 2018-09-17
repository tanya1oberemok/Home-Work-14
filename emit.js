var EventEmitter = require('events').EventEmitter;
var evn = new EventEmitter();
var log = [];


evn.on('login', function(login){
    tim = Date.now();
    login.status = 'Active';
    login.time = new Date(tim);
    log.push(login);
    console.log('\tConnected person');
    console.log(login);
});

evn.on('logout', function(logout){
    for (var i = 0; i < log.length; i++) {
        if(log[i].ip === logout.ip || log[i].port === logout.port){
            log[i].status = 'logout';
            var tim = Date.now();
            log[i].endTime = new Date(tim);
            console.log('\tConnected person');
            console.log(log[i]);
            }
    }
})

evn.emit('login', {ip: '192.168.0.1',
                   port: '3000',
                   os: 'windows'
});   

evn.emit('login', {ip: '192.168.0.2',
                   port: '4000',
                   os: 'linux'
});

setTimeout(function(){
    evn.emit('logout', {ip:'192.168.0.1',
                    port: '3000',
                    os:'windows'
    });
}, 3000);