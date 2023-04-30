import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("this is a constractor from news component");
    this.state = {
      articles: [],
      loading: false
    };
  }
  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ed78c4ae9abf4921a80e3e712c274929";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles
    })

  }
  render() {
    return (
      <div className='container my-4'> 
        <h2>NewsGD - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=> {
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News