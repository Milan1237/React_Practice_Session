import { Form, Link,useSubmit, NavLink, Outlet, redirect, useLoaderData , useNavigation } from "react-router-dom";
import {createContact, getContacts} from "../src/contact.js"

export async function loader({request , params}){
    
    let url = new URL(request.url);//making a new url from request.url means the url inside request 
    const q = url.searchParams.get("q");
    let contacts = await getContacts(q);
    return {contacts , q} ;
}
export async function action ({request}){
    let Contact = await createContact();
    return redirect(`/contacts/${Contact.id}/edit`)
    
}

export default function Root() {
    let {contacts , q} = useLoaderData();
    let navigation = useNavigation();
    let submit = useSubmit();

    let searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                className={searching ? "loading" : ""}
                name="q"
                defaultValue={q}
                onChange={(event)=>{
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form ,   {
                    replace: !isFirstSearch
                  })
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post" >
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {
                contacts.length ? (
             <ul>
              {contacts.map((contact)=>(
                <li key={contact.id}>
                <NavLink className={({isActive , isPending})=>(isActive)? "active" : isPending ? "pending" : ""} to={`/contacts/${contact.id}`}>{contact.first || contact.last ? (
                 <>{contact.first} {contact.last} </> )

                 :

                  (<>No Name</>)
                   }
                 </NavLink>
                </li>
              ))}
              
             </ul>)
             : (
                <p>
             <i>No Contacts</i>
             </p>
             )
                
}
          </nav>
        </div>
        <div id="detail" className={ navigation.state === "loading" ? "loading" : "pending"}>
            {/* Outlet will ensure the that all the components stay same and only this part keep changing */}
            <Outlet  />
        </div>
      </>
    );
  }