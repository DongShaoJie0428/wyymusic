import React, { useEffect, useState } from "react";
import { connect } from "dva";

import style from "./home/css/search.css";

function SearchPage(props) {
  console.log(props, "...search props");

  let [search, setSearch] = useState('');
  let [showSuggest, setShowSuggest] = useState(false)
  let [showHots, setShowHots] = useState(true)
  let [showResult, setShowResult] = useState(false);

  // 热搜
  useEffect(() => {
    props.searchHot();
  }, []);
  // 获取搜索建议
  useEffect(()=>{
    if(search){
      props.searchSuggest(search)
    }
    setShowSuggest(!!search)
  },[search])


  // 处理onChange
  function searchChange(e) {
    // console.log(e.target.value,"....22");
    setSearch(e.target.value);
    setShowHots(false)
  }

  // 键盘事件搜索
  function getSearch(e){
    if(e.keyCode === 13 && search){
      setShowSuggest(false)
      setShowResult(true)
      props.searchResult(search)
    }
  }

  // 跳转详情
  function goDetaile(e){
    if(e.target.tagName.toUpperCase() == 'LI') {
      props.history.push({
        pathname:`/play/${e.target.dataset.id}`
      })
    }
  }

  return (
    <div className={style.search}>
      <header className={style.header}>
        <input type="text" placeholder="知否知否 最近很火哦" autoFocus value={search} onChange={searchChange} onKeyDown={getSearch} />
        <span onClick={()=>window.history.back()}>取消</span>
      </header>
      {/* 热门搜索 */}
      {showHots?<section className={style.section}>
        <p>热门搜索</p>
        <ul className={style.hot_search}>
          {props.search.searchHot.map((item, index) => {
            return <li key={index}>{item.first}</li>;
          })}
        </ul>
      </section>:null}
      {/* 搜索建议 */}
      {showSuggest?<section className={style.search_suggest}>
          <ul className={style.suggeat_ul}>
            {
              props.search.searchSuggest.map((item,ind)=>{
                return <li key={ind}>{item.name}</li>
              })
            }
          </ul>
      </section>:null}
      {/* 搜索 */}
      {showResult?<section className={style.search_suggest} onClick={goDetaile}>
          <ul className={style.suggeat_ul}>
            {
              props.search.searchResult.map((item,ind)=>{
                return <li key={ind} data-id={item.id}>{item.name}</li>
              })
            }
          </ul>
      </section>:null}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state,"...state")
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    // 热搜
    searchHot: () =>
      dispatch({
        type: "search/searchHot"
    }),
    // 搜索建议
    searchSuggest:payload=>{
      dispatch({
        type:"search/searchSuggest",
        payload
      })
    },
    // 搜索数据
    searchResult:payload=>{
      dispatch({
        type:"search/searchData",
        payload
      })
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
