import Header from "./header";
import Searchlist from './searchlist';
import Dropdownlist from './dropdownlist';
import CountrysList from './CountrysList';


import "./App.css";

const App = () => {

   return (
      <>
         <Header />
         <main><div className="search-filter-container">
            <Searchlist />
            <Dropdownlist />
         </div>
            <CountrysList />
         </main>
      </>
   )

}
export default App;