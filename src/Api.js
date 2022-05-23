const basicFetch = async (endpoint) => {
    const req = await fetch(`${process.env.REACT_APP_API}${endpoint}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais da netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            }
        ]
    },

    getMovieInfo: async (movieId) => {
        let info = {};

        info = await basicFetch(`/tv/${movieId}&language=pt-BR?&api_key=${process.env.REACT_APP_API_KEY}`);

        return info;
    }

}