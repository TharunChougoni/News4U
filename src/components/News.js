import React, { Component } from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";

import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    category: "general",
    pageSize: 9,
  };

  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `News4U - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async componentDidMount() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=facf91b7181444e1b959db2332f317e5&page=${this.state.page}&pageSize=9`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ totalResults: parsedData.totalResults });
    this.setState({ loading: false });
    this.setState({ articles: parsedData.articles });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apikey=facf91b7181444e1b959db2332f317e5&page=${this.state.page}&pageSize=9`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  };

  render() {
    return (
      <div className=" container mx-auto ">
        <h1 className=" tracking-wider text-center font-mono  text-2xl pt-20 mx-3">
          Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
        >
          <div className=" md:columns-2 lg:columns-3">
            {this.state.articles.map((element) => {
              return (
                <div
                  key={element.url}
                  className="  px-5 py-10 text-gray-600 body-font"
                >
                  <NewsItems
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsExt={element.url}
                    category={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
