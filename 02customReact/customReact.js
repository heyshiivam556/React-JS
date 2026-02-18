
function customRender(reactElement,mainContainer){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    
    mainContainer.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        // if(prop === 'children') continue  //if children was under the props object. bcz in react it generally does belong under the props object.
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
//this kind of thing we get from react. and
// we have to write in this way for any element we want

const mainContainer= document.getElementById('root')

// A fucntioon which injects the elements into the main index
customRender(reactElement,mainContainer)