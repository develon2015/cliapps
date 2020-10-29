main(process.argv.slice(2));

function main(argv) {
    argv.forEach((it, index) => {
        console.log(index, it);
    });
}