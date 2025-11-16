import { basename, dirname } from "path";

let nomeArquivo = basename('./test.txt');
let fileName = basename('/test/something')

let dir = dirname('/test/something');
let diretorio = dirname('/test/something/file.text');

console.log({ nomeArquivo })
console.log({ fileName })
console.log({ dir })
console.log({diretorio})