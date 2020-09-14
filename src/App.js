import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import Messagecontainer from './containers/Messagecontainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Header />
                    <main id="mainContainer">
                        <div className="container">
                            <ProductsContainer />
                            <Messagecontainer />
                            <CartContainer />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }

}

export default App;
