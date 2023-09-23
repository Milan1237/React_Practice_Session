
let createElement = (container , reactElement)=>{
    let element = document.createElement(reactElement.type);
    for ( let prop in reactElement.props){
        element.setAttribute(prop , reactElement.props[prop]);
    }
    element.innerHTML = reactElement.children ;
    container.appendChild(element);
}

let container = document.getElementById('root');

let reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}

createElement(container , reactElement);

