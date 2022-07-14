import React, { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import s from "./App.module.css"
/* import Button from "components/Button/Button";
import Modal from "components/Modal/Modal"; */



class App extends Component { 
  state = {
    query: "",
    page: 1
  }
  
  handleFormSubmit = (query, page) => {
    this.setState({ query, page});
  }

  handleClickLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  render() { 
    const { query, page } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        
        <ImageGallery query={query} page={page} onClickMore={this.handleClickLoadMore} />

        {/* <Button /> */}
        {/* <Modal /> */}
      </div>
    )
  }
}


export default App;