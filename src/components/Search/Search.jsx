"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Search_module_scss_1 = require("./Search.module.scss");
var classnames_1 = require("classnames");
exports.Search = function (_a) {
    var onSubmit = _a.onSubmit, initialValue = _a.initialValue;
    var _b = react_1.useState(initialValue), query = _b[0], setQuery = _b[1];
    return (<form className={classnames_1.default('input-group', 'mb-3', Search_module_scss_1.default.search)}>
      <input value={query} type="search" className="form-control" onChange={function (event) { return setQuery(event.target.value); }}/>
      <div className="input-group-append">
        <button className="btn btn-primary" onClick={function (event) {
        event.preventDefault();
        onSubmit(query);
    }}>
          search
        </button>
      </div>
    </form>);
};
