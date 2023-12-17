import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import client from "./graphql/client.js";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <RecoilRoot>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </RecoilRoot>
        </React.StrictMode>
    </ApolloProvider>,
);
