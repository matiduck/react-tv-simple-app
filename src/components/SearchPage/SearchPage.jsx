"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var axios_1 = require("axios");
var Poster_1 = require("../Poster/Poster");
var Search_1 = require("../Search/Search");
var Badge_1 = require("../Badge/Badge");
exports.SearchPage = function () {
    var _a = react_1.useState(0), searchCount = _a[0], setSearchCount = _a[1];
    var _b = react_1.useState([]), shows = _b[0], setShows = _b[1];
    react_1.useEffect(function () {
        search('batman');
    }, []);
    var search = function (query) {
        setSearchCount(searchCount + 1);
        var url = "https://api.tvmaze.com/search/shows?q=" + query;
        axios_1.default.get(url).then(function (_a) {
            var data = _a.data;
            return setShows(data.map(function (_a) {
                var show = _a.show;
                return show;
            }));
        });
    };
    console.log('render SearchPage');
    return (<div className="row">
      <section className="col-3">
        <h2 className="h4">Bookmarks</h2>
      </section>

      <section className="col">
        <h1 className="h4 d-flex justify-content-between">
          Find shows <Badge_1.Badge value={searchCount}/>
        </h1>

        <Search_1.Search onSubmit={search} initialValue="batman"/>

        <div className="row">
          {shows.map(function (show) { return (<div className="col-4" key={show.id}>
              <Poster_1.Poster show={show}/>
            </div>); })}
        </div>
      </section>
    </div>);
};
