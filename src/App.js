import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Api from './Api';
import Movie from './components/Movie';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);



  useEffect(() => {
    const loadAll = async () => {
      //busca filmes (all)
      let list = await Api.getHomeList();
      //console.log(list);
      setMovieList(list);
      //pegando o filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let random = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[random];
      //pegando o featured
      let details = await Api.getMovieInfo(chosen.id);
      setFeaturedData(details);
    }
    loadAll();
  }, []);


  return (
    <div className="page">
      <Header /> <br />
      {
        featuredData && <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <Movie key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 &&
        <div className='loading'>
          <img src='https://c.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif' />
        </div>}

    </div>
  );

}

