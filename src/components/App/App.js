import { useState } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import s from "./App.module.css";


function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
  };

     const handleClickLoadMore = () => {
        setPage(prevState => prevState + 1);
    };


  return (
    <div className={s.App}>
      <Searchbar onSubmit={handleFormSubmit} />
        
      <ImageGallery query={query} page={page} onClick={handleClickLoadMore} />
    </div>
  );
};

export default App;



