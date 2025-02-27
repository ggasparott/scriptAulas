
let cadastroMusicas = [
    ["Bohemian Rhapsody", "Freddie Mercury", "Queen", 1975, "Vinil"],
    ["Billie Jean", "Michael Jackson", "Michael Jackson", 1982, "CD"],
    ["Imagine", "John Lennon", "John Lennon", 1971, "Streaming"]
];

console.log("Cadastro inicial:");
console.table(cadastroMusicas);


cadastroMusicas.push(
    ["Smells Like Teen Spirit", "Kurt Cobain", "Nirvana", 1991, "Streaming"],
    ["Shape of You", "Ed Sheeran", "Ed Sheeran", 2017, "Digital"]
);

console.log("\nCadastro atualizado:");
console.table(cadastroMusicas);

console.log("\nRegistros separados por autor/grupo:");
let separados = {};
cadastroMusicas.forEach(musica => {
    let chave = `${musica[1]} - ${musica[2]}`;
    if (!separados[chave]) separados[chave] = [];
    separados[chave].push(musica);
});
console.log(separados);


let registrosExtraidos = [cadastroMusicas[0], cadastroMusicas[3]];
console.log("\nRegistros extraídos:");
console.table(registrosExtraidos);
