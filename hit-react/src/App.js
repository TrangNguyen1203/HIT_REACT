import './App.css';
import './Day1/Header.css';
import './Day1/Banner.css';
import './Day1/Footer.css';

// import Button from "./count/Button";
// import Person from "./count/Person";

// import Counter from "./count/Count";


import Header from './Day1/components/Header';
import Banner from './Day1/components/Banner'
import Footer from './Day1/components/Footer';

function App() {
  return (
    <div className='App'>
      <div id='select'>
        <div className='container'>
          <Header></Header>
          <Banner></Banner>
        </div>
        <div id='footer--css'>
          <div className='container'>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;




// const App = () => {
//   return (
//     <div>
//       {/* <Counter></Counter> */}
//       {/* <Person></Person> */}
//       <Button title="Dang ki"></Button>
//       <Button title="Huy"></Button>
//       <Button title="Sua"></Button>
//       <div></div>
//     </div>
//   )
// }
// export default App;


