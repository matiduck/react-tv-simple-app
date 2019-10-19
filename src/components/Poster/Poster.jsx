"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.Poster = function (_a) {
    var show = _a.show;
    var imgSrc = show.image
        ? show.image.medium
        : 'https://source.unsplash.com/210x295/?television';
    return (<figure>
      <img className="img-fluid" src={imgSrc} alt={show.name}/>
      <figcaption>{show.name}</figcaption>
    </figure>);
};
