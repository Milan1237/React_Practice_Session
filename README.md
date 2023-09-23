Day 1:
I am creating a react project for the first time.

learnings :



Day 2:

session 1:
1: Name the name of the file which returns a component with ".jsx"

2: Always try to name the file with capitalize form means the first letter of the file name should be Capital.

3: Always name the function in capitalize form means give the first letter of the function in Capital letter.

4: If any function is returned with html components then it should be imported with the given syntax : `import Demo  from './Custom.jsx'`. It means custom the function should be imported without curley brakets.

Session 2:
1:I have learned about how html in jsx get converted in React:
    jsx -> reactElement -> render ->HTML

2: We can add evaluated expression from javascript with below syntax:
    `<h1>Hello Milan, I am trying to learn react {username}</h1>`

3: A transphiler named Bubble makes html element to to treelike sturcture like:
    `html -> <a href='https://google.com' target = '_blank'>Click me to visit google <a/>`
    ` ReactElement: React.createElement(
    'a' ,
    {href:'https://google.com' , target:'_blank'},
    'click me to visit google ')  `

Session 3:

1: I have learned about why we should learn about hooks:
    It is not possible to update a variable without hooks in react in realtime. React gives us hooks to propagate changes in hooks. React helps us to change all the variable in ui in a same time using hooks. Hooks helps developer not call the elements conventionally, means by id,tag name , class name etc. Because in a complex ui updating such thing would be difficult . 
    
2: Also created a little learning project using useState hook. UseState is imported from React:
    `import { useState } from 'react'`
useState takes a default value: it could be a string, number , boolean , object , null etc;
useState returns a array, in which the 0th index gives the default value and 1st index gives you the function which is used to update the value of 0th index value as well as all the value which is using the same variable naming in the jsx.


Day 3:

Session 1: Learned about props and component in react how to propagate changes throughout the dom:
    (a): this how we send props to a componets
            <Card username = "Milan" myArray /> or\
            <Card username='Suvo' myArray={myarr}/>
    (b): We should always give variable instead of the main array or object.




