const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '551c2801ffb04eadcb8c6f8d0fcc8fc4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;