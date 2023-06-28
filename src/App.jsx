import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Routes from "./routes/Routes";
import UserContext from "./context/userContext";
import  ProductsContext  from "./context/ProductsContext";

function App() {
  return (
    <>
      <UserContext>
        <ProductsContext>
          <Header />
          <Routes />
        </ProductsContext>
      </UserContext>
    </>
  );
}

export default App;
