import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Abplive.com" },
      author: "ABP News Bureau",
      title:
        "Next Financial Crisis Will Come From Cryptocurrencies: RBI Governor Maintains Hard Stance - ABP Live",
      description:
        "“There’s no credible argument about what public good [crypto] does, or what public purpose it serves,” Das said.",
      url: "https://news.abplive.com/business/crypto/rbi-shaktikanta-das-cryptocurrency-financial-crisis-no-underlying-value-threat-cbdc-digital-rupee-bfsi-summit-2022-1570946",
      urlToImage:
        "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/21/e329d2774ff4ba007902871fc137ab151671606526014402_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
      publishedAt: "2022-12-21T07:09:25Z",
      content:
        "Reserve Bank of India (RBI) governor Shaktikanta Das has always been a vocal opponent of cryptocurrencies, speaking out in public about the threat it poses to India’s financial stability on several o… [+3344 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=facf91b7181444e1b959db2332f317e5";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container mx-auto text-center">
        <h1 className=" tracking-wider  font-mono  text-2xl pt-20 mx-3">
           Headlines
        </h1>
        <div className="md:columns-3">
          {this.state.articles.map((element) => {
            return (
              <div
                key={element.url}
                className=" container px-5 py-10 text-gray-600 body-font"
              >
                <NewsItems
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsExt={element.url}
                  category="Headlines"
                />
              </div>
            );
          })}
          ;
        
        </div>

        <div className="flex item-center">
        <Spinner />
         
        </div>
      </div>
    );
  }
}

export default News;
