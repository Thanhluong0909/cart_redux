import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import ProductsContainer from './containers/ProductsContainer';
// import CartContainer from './containers/CartContainer';
// import Messagecontainer from './containers/Messagecontainer';

class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a href="/" className="nav-item nav-link ">trang chủ </a>
                                <a href="/about" className="nav-item nav-link">liên hệ</a>
                            </div>
                        </div>
                    </nav>
                    
                    {/* nội dung  */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    {/* <div>
                    <Header />
                    <main id="mainContainer">
                        <div className="container">
                            <ProductsContainer />
                            <Messagecontainer />
                            <CartContainer />
                        </div>
                    </main>
                    <Footer />
                </div> */}
                </div>
            </Router>
        );
    }
}

export default App;
