import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header'
import Portifolio from '../components/Portifolio'
import PortifolioItems from '../components/PortifolioItems'
import Home from '../components/Home'
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () =>(

    <BrowserRouter>
        <div>
            <Header/>
        <Switch>
            <Route path="/"  component={Home} exact={true}/>
            <Route path="/contact"  component={Contact}/>
            <Route path="/portifolio/:id"  component={PortifolioItems}/>
            <Route path="/portifolio"  component={Portifolio} exact={true}/>            
            <Route component={NotFoundPage}/>
        </Switch>       
        </div>        
    </BrowserRouter>
);

export default AppRouter;