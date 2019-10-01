import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/serch_bar' 



const API_KEY="AIzaSyBhed6skVIL8Rcl3x3YDka2R82Rmra3xsM";


//CREATE a new Component
// 이 컴포넌트는 html을 만들것
const App= function(){ //const =es6
    return (<div>
        <SearchBar/>


    </div>
    ); //jsx (자바스크립트안에 html처럼보이는 소스코드 작성을해줌)
} // <-컴포넌트 클래스 


//만들어진 컴포넌트를 DOM에 집어넣는다는뜻

ReactDom.render(<App/>,document.querySelector('.container'));
//App의 인스턴스를 생성하고 이를 ReatDom.render에 전달함 