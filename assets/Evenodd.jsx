// // //import './App.css';
// // import React from 'react';


// // //import Como1 from './assets/Como1';
// // //import Como2 from './assets/Como2';
// // //import Como3 from './assets/Como3';
// // import Home from './home';
// // import Aboutus from './assets/Aboutus';
// // import { BrowserRouter,Linl,Route,Router } from 'react-router-dom';

// // // function App() {
// // //   return (
// // //     // <div>
// // //     //   <h1 className='text-red-600'>hi this is react project</h1>
// // //     // </div>
// // //   )
// // // }
// // // function App() {
// // //   let show=0;
// // //   var component;
// // //   if(show==1){
// // //     component=<Como1/>;
// // //   }
// // //   else if (show==2){
// // //     component=<Como2/>;
// // //   }
// // //   else if (show==3){
// // //     component=<Como3/>;
// // //   }
// // //   else {
// // //     component=<h1>error</h1>;
// // //   }
// // //     return component;
// // //  }

// // // export default App;



// //  function App() {
// //   return (
// //     <BrowserRouter>
// //     <Router>
// //     <Route path="Home" element={<home />} />
// //     <Route path="Aboutus" element={<aboutus />} />
    
// //     </Router> 
// //     </BrowserRouter>
// //   );
// // }


// // export default App;
// //import './App.css';
// // import React from 'react';


// // //import Como1 from './assets/Como1';
// // //import Como2 from './assets/Como2';
// // //import Como3 from './assets/Como3';
// // import Home from './home';
// // import Aboutus from './assets/Aboutus';
// // import { BrowserRouter,Linl,Route,Router } from 'react-router-dom';

// // // function App() {
// // //   return (
// // //     // <div>
// // //     //   <h1 className='text-red-600'>hi this is react project</h1>
// // //     // </div>
// // //   )
// // // }
// // // function App() {
// // //   let show=0;
// // //   var component;
// // //   if(show==1){
// // //     component=<Como1/>;
// // //   }
// // //   else if (show==2){
// // //     component=<Como2/>;
// // //   }
// // //   else if (show==3){
// // //     component=<Como3/>;
// // //   }
// // //   else {
// // //     component=<h1>error</h1>;
// // //   }
// // //     return component;
// // //  }

// // // export default App;



// //  function App() {
// //   return (
// //     <BrowserRouter>
// //     <Router>
// //     <Route path="Home" element={<home />} />
// //     <Route path="Aboutus" element={<aboutus />} />
    
// //     </Router> 
// //     </BrowserRouter>
// //   );
// // }


// // export default App;
// //import './App.css';
// // import React from 'react';


// // //import Como1 from './assets/Como1';
// // //import Como2 from './assets/Como2';
// // //import Como3 from './assets/Como3';
// // import Home from './home';
// // import Aboutus from './assets/Aboutus';
// // import { BrowserRouter,Linl,Route,Router } from 'react-router-dom';

// // // function App() {
// // //   return (
// // //     // <div>
// // //     //   <h1 className='text-red-600'>hi this is react project</h1>
// // //     // </div>
// // //   )
// // // }
// // // function App() {
// // //   let show=0;
// // //   var component;
// // //   if(show==1){
// // //     component=<Como1/>;
// // //   }
// // //   else if (show==2){
// // //     component=<Como2/>;
// // //   }
// // //   else if (show==3){
// // //     component=<Como3/>;
// // //   }
// // //   else {
// // //     component=<h1>error</h1>;
// // //   }
// // //     return component;
// // //  }

// // // export default App;



// //  function App() {
// //   return (
// //     <BrowserRouter>
// //     <Router>
// //     <Route path="Home" element={<home />} />
// //     <Route path="Aboutus" element={<aboutus />} />
    
// //     </Router> 
// //     </BrowserRouter>
// //   );
// // }


// // export default App;
// import './App.css';
// import React, { useMemo } from 'react';
// //import { BrowserRouter, Route, Routes } from 'react-router-dom';
// //import Home from './home'; 
// //import Aboutus from './assets/Aboutus'; 
// //import Header from './assets/Header.jsx';

// const App= useMemo(()=> {
//   console.log("runing")
//   let i=0;
//   while(i<100000)i++;
//   return (
// <>
// <button onClick={increase}>increment{count} </button>
// {even ?"Even";"odd"  }
// <br />
// <button onClick={increase}>increment{CountONE}</button>
//  </>
// );
//     {/* // <BrowserRouter>
//     //  <Header></Header>
//     //   <Routes>
      
//     //     <Route path="/Home" element={<Home />} /> 
//     //     <Route path="/Aboutus" element={<Aboutus />} /> 
       
//     //   </Routes>

//     // </BrowserRouter> */}

   
// }


// export default App;

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Aboutus from './Aboutus'; 
import Header from './Header'; // Assuming you have a Header component

function App() {
  const [count, setCount] = useState(0);
  const [even, setEven] = useState(true);
  const [CountONE, setCountONE] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setEven((count + 1) % 2 === 0);
  };

  const increaseONE = () => {
    setCountONE(CountONE + 1);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Aboutus" element={<Aboutus />} /> 
      </Routes>
      <div>
        <button onClick={increase}>Increment {count} ({even ? "Even" : "Odd"})</button>
        <br />
        <button onClick={increaseONE}>Increment {CountONE}</button>
      </div>
    </BrowserRouter>
  );
}

export default App;


