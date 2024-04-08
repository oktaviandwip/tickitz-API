const { deleteTable, createTable, saveData } = require("../src/models/movies");

module.exports = async () => {
  try {
    await deleteTable();
    await createTable();
    const movies = [
      {
        image:
          "http://localhost:8000/image/1710689019609-652767300_jhon-wick-3.png",
        movie_name: "Jhon Wick 3",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 26,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710689060066-502451156_lion-king.png",
        movie_name: "Lion King",
        category: ["Drama", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 52,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image: "http://localhost:8000/image/1710689106466-683006708_roblox.jpg",
        movie_name: "Roblox",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 19,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710689019609-652767300_jhon-wick-3.png",
        movie_name: "Jhon Wick 3",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 26,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710689060066-502451156_lion-king.png",
        movie_name: "Lion King",
        category: ["Drama", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 52,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image: "http://localhost:8000/image/1710689106466-683006708_roblox.jpg",
        movie_name: "Roblox",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 19,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710689019609-652767300_jhon-wick-3.png",
        movie_name: "Jhon Wick 3",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 26,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710689060066-502451156_lion-king.png",
        movie_name: "Lion King",
        category: ["Drama", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 52,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image: "http://localhost:8000/image/1710689106466-683006708_roblox.jpg",
        movie_name: "Roblox",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 19,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710689019609-652767300_jhon-wick-3.png",
        movie_name: "Jhon Wick 3",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 26,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710689060066-502451156_lion-king.png",
        movie_name: "Lion King",
        category: ["Drama", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-04-15",
        hours: 2,
        minutes: 52,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image: "http://localhost:8000/image/1710689106466-683006708_roblox.jpg",
        movie_name: "Roblox",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-02-15",
        hours: 2,
        minutes: 19,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710689019609-652767300_jhon-wick-3.png",
        movie_name: "Jhon Wick 3",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-02-15",
        hours: 2,
        minutes: 26,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710689060066-502451156_lion-king.png",
        movie_name: "Lion King",
        category: ["Drama", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 52,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image: "http://localhost:8000/image/1710689106466-683006708_roblox.jpg",
        movie_name: "Roblox",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 19,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710688786495-602317770_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 20,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710688858654-787061586_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 15,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688920857-710093367_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 55,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688961903-934265682_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 42,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710688786495-602317770_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 20,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710688858654-787061586_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 15,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688920857-710093367_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 55,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688961903-934265682_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 42,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710688786495-602317770_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-01-15",
        hours: 2,
        minutes: 20,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710688858654-787061586_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 15,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688920857-710093367_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 55,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688961903-934265682_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 42,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image:
          "http://localhost:8000/image/1710688786495-602317770_spiderman-homecoming.png",
        movie_name: "Spider-Man: Homecoming",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 20,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },

      {
        image: "http://localhost:8000/image/1710688858654-787061586_tenet.svg",
        movie_name: "Tenet",
        category: ["Action", "Sci-Fi"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 15,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688920857-710093367_the-witches.svg",
        movie_name: "The Witches",
        category: ["Comedy", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 55,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: true,
      },

      {
        image:
          "http://localhost:8000/image/1710688961903-934265682_black-widow.svg",
        movie_name: "Black Widow",
        category: ["Action", "Adventure"],
        director: "George Miller",
        casts: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        release_date: "2024-05-15",
        hours: 2,
        minutes: 42,
        synopsis:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        location: "Halim, Jakarta Timur",
        date: "2024-02-15",
        time: ["08:30", "10:30", "13:30"],
        recommended: false,
      },
    ];

    for await (const movie of movies) {
      await saveData(movie);
    }

    console.log(`${movies.length} movies created`);
  } catch (err) {
    throw err;
  }
};
