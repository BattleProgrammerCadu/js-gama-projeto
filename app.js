const mangas = require('./database');
const readLine = require('readline-sync');


const input = readLine.question('Deseja buscar um mangá? S/N: ');

if(input.toLocaleUpperCase() === 'S'){
    console.log('Esses são os generos disponiveis:');
    console.log('Action', '/Comedy', '/Horror', '/Drama', '/Mistery','/Slice of Life','/Historical','/Romance', '/Thriller', '/Psychological');

    const inputGenre = readLine.question('Qual genero voce deseja buscar: ');
    const returnGenre = mangas.filter(manga => manga.genre.find(genre => genre === inputGenre) );

    console.table(returnGenre);
}else{
    const sortMangas = mangas.sort((a,b)=> a.volumes - b.volumes);
    console.log('Esses são os mangas disponiveis:');
    console.table(sortMangas);
}

