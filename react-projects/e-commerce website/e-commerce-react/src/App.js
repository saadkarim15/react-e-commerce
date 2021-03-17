import "./App.css";
import Header from "./components/Header";
import ProductFilters from "./components/ProductFilters";
import ProductList from "./components/ProductList";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="main__left">
          <ProductFilters />
        </div>
        <div className="main__right">
          <ProductListing />
          <ProductList />
        </div>
      </main>
    </div>
  );
}

export default App;
