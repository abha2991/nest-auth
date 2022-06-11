import React from 'react';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import page11 from '../img/page1 1.png';
import Wedding3 from '../img/girl 1.png';
import img31 from '../img/3 1.png';
import Banner from '../img/c60feb2bfd5c1a10cf164d8eb7b20b9b-247-13536 1.png';



export const HashLinkPage= () => {



    return (

  <>



 <div className="container">
  <h2>Dynamic Tabs</h2>
  <ul className="nav nav-tabs">
    <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
  </ul>

  <div className="tab-content">
    <div id="home" className="tab-pane fade in active">
      <h3>HOME</h3>
      <p>A markup language is a programming language that is used make text more
           interactive and dynamic. It can turn a text into images, tables, links etc.</p>
    </div>
    <div id="menu1" className="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Java is a high level, robust, secured and object-oriented programming language.</p>
    </div>
    <div id="menu2" className="tab-pane fade">
      <h3>Menu 2</h3>
      <p>SQL is just a query language, it is not a database. To perform SQL queries,
     you need to install any database for example Oracle, MySQL, MongoDB, PostGre SQL, SQL Server, DB2 etc.</p>
    </div>
    <div id="menu3" className="tab-pane fade">
      <h3>Menu 3</h3>
      <p>The C Language is developed for creating system applications that direct
      interacts to the hardware devices such as drivers, kernals etc.</p>
    </div>
  </div>
</div>





  </>
    );
};


export default HashLinkPage
