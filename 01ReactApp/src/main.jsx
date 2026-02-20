import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shivam from './Shivam.jsx'

const anotherElement = (
    <a href="https://google.com" target='_blank'>ViSit google</a>
)
/*
const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
//react will not parse this because the syntax is not same .this was for cutom we made
*/
const usrnm = "_shivamm"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    usrnm
)

createRoot(document.getElementById('root')).render
(
    /*<>
    <h1>this is by react element</h1>
    {reactElement}
    </> */
    reactElement
    // anotherElement
    // <App />
    // <Shivam />
)
 //App() = <App/>
 //its like custom html tag which returns fn
 