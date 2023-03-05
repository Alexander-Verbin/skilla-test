import React from 'react';
import style from './App.module.scss';
import {Navbar} from "../Navbar/Navbar";
import {Content} from "../Content/Content";

function App() {
  return (
    <div className={style.App}>
			<div className={style.Nav}>
				<Navbar/>
			</div>
			<div className={style.Content}>
				<Content/>
			</div>
    </div>
  );
}

export default App;
