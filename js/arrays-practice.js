//STEP 1
let favMovies = ['Love Jones', 'Love & Basketball', 'The Matrix', 'Ready Player One', 'A Low Down Dirty Shame'];
console.log(favMovies[1]);
//STEP 2
// let movies = new Array(5);
// movies[0] = favMovies[0];
// movies[1] = favMovies[1];
// movies[2] = favMovies[2];
// movies[3] = favMovies[3];
// movies[4] = favMovies[4];
// console.log(movies[0]);
//STEP 3
// movies.splice(2, 0, 'Spiderman');
// console.log(movies.length);
// console.log(movies);
//STEP 4
// let movies = []
// movies[0] = "Total Recall";
// movies[1] = "Ghost in the Shell";
// movies[2] = "House Party";
// movies[3] = "krush Groove";
// movies[4] = "The Godfather";
// movies.shift();
// console.log(movies);
//STEP 5
// let movies = [];
// movies[0] = "Resident Evil";
// movies[1] = "Ali";
// movies[2] = "Sister Act";
// movies[3] = "Rocky";
// movies[4] = "DC Cab";
// movies[5] = "Problem Child";
// movies[6] = "Friday";
// for (let i in movies) {
//    let result = i + ". " + movies[i];
//     console.log(result);
// }
//STEP 6
// let movies = [];
// movies[0] = "Resident Evil";
// movies[1] = "Ali";
// movies[2] = "Sister Act";
// movies[3] = "Rocky";
// movies[4] = "DC Cab";
// movies[5] = "Problem Child";
// movies[6] = "Friday";
// for (let i of movies) {
//    let result = i;
//     console.log(result);
// }
//STEP 7
// let movies = [];
// movies[0] = "Resident Evil";
// movies[1] = "Ali";
// movies[2] = "Sister Act";
// movies[3] = "Rocky";
// movies[4] = "DC Cab";
// movies[5] = "Problem Child";
// movies[6] = "Friday";
// for (let i of movies.sort()) {
//    let result = i;
//     console.log(result);
// }
//STEP 8
// let movies = [];
// let leastFavMovies = []
// movies[0] = "Resident Evil";
// movies[1] = "Ali";
// movies[2] = "Sister Act";
// movies[3] = "Rocky";
// movies[4] = "DC Cab";
// movies[5] = "Problem Child";
// movies[6] = "Friday";
// leastFavMovies[0] = "Jack and Jill";
// leastFavMovies[1] = "The Adventures of Pluto Nash";
// leastFavMovies[2] = "Showtime";
// for (let i in movies && leastFavMovies) {
//    let result = "Movies I like: " + '\n' + '\n' + movies[i] + '\n' + "Movies I regret watching: " + '\n' + '\n' + leastFavMovies[i];
//     console.log(result);
// }
//STEP 9
// let fmovies = [];
// let leastFavMovies = []
// fmovies[0] = "Resident Evil";
// fmovies[1] = "Ali";
// fmovies[2] = "Sister Act";
// fmovies[3] = "Rocky";
// fmovies[4] = "DC Cab";
// fmovies[5] = "Problem Child";
// fmovies[6] = "Friday";
// leastFavMovies[0] = "Jack and Jill";
// leastFavMovies[1] = "The Adventures of Pluto Nash";
// leastFavMovies[2] = "Showtime";
// const movies = fmovies.concat(leastFavMovies);
// movies.sort();
// movies.reverse();
// for (let i in movies) {
//    let result = "Movies I like: " + '\n' + '\n' + fmovies[i] + '\n' + "Movies I regret watching: " + '\n' + '\n' + leastFavMovies[i];
//     console.log(result);
// }
//STEP 10
let fmovies = [];
let leastFavMovies = []
fmovies[0] = "Resident Evil";
fmovies[1] = "Ali";
fmovies[2] = "Sister Act";
fmovies[3] = "Rocky";
fmovies[4] = "DC Cab";
fmovies[5] = "Problem Child";
fmovies[6] = "Friday";
leastFavMovies[0] = "Jack and Jill";
leastFavMovies[1] = "The Adventures of Pluto Nash";
leastFavMovies[2] = "Showtime";
const movies = fmovies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (let i in movies) {
   let result = "Movies I like: " + '\n' + '\n' + fmovies[i] + '\n' + "Movies I regret watching: " + '\n' + '\n' + leastFavMovies[i];
    console.log(result);
}

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17