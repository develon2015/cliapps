const { ip } = require('@develon/js/lib/node');

void function main(argv) {
    ip().ipv4.forEach(ip => {
        console.log(ip);
        console.log(`http://${ip}`);
        argv.forEach((it, index) => {
            console.log(`http://${ip}:${it}`);
        });
    });
}(process.argv.slice(2));