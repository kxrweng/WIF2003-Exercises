movies = [
    {
        title : "In Bruges",
        stars : 5,
        hasWatched : true
    },

    {
        title : "Frozen",
        stars : 4.5,
        hasWatched : false
    },

    {
        title : "Mad Max Fury Road",
        stars : 5,
        hasWatched : true
    },

    {
        title : "Les Miserables",
        stars : 3.5,
        hasWatched : false
    }
]

movies.map((movie) => {
    const watchedStatus = movie.hasWatched ? "You have watched " : "You have not seen";
    console.log(`${watchedStatus} "${movie.title}" - ${movie.stars} stars` )
})