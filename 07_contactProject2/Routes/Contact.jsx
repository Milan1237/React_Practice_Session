import { Form, redirect, useFetcher, useLoaderData } from "react-router-dom";
import { updateContact, getContact } from "../src/contact";


export async function loader({params}){
    let contact = await getContact(params.contactId);
    return contact;
}

export async function action({request , params}){
  let data = await request.formData();
  return updateContact(params.contactId , {
    favorite: data.get('favorite') === "true",
  })
}

export default function Contact() {
    let contact = {
      first: "Your",
      last: "Name",
      avatar: "https://placekitten.com/g/200/200",
      twitter: "your_handle",
      notes: "Some notes",
      favorite: true,
    };
    contact = useLoaderData();
    return (
      <div id="contact">
        <div>
          <img
            key={contact.avatar}
            src={contact.avatar || null}
          />
        </div>
  
        <div>
          <h1>
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite contact={contact} />
          </h1>
  
          {contact.twitter && (
            <p>
              <a
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
              >
                {contact.twitter}
              </a>
            </p>
          )}
  
          {contact.notes && <p>{contact.notes}</p>}
  
          <div>
            {/* the action edit will make this router to go in edit page */}
            <Form action="edit">
              <button type="submit">Edit</button>
            </Form>
            <Form
              method="post"
              action="destroy"
              onSubmit={(event) => {
                if (
                  !confirm(
                    "Please confirm you want to delete this record."
                  )
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button type="submit">Delete</button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
  
  function Favorite({ contact }) {
    let fetcher = useFetcher();//use fetcher is hook that lets programmer to call loader and action without navigation
  
    // yes, this is a `let` for later
    let favorite = contact.favorite;
    if (fetcher.formData) {
      favorite = fetcher.formData.get("favorite") === "true";
    }
    return (
      // fetcher.Form is same as Form in react-router-dom. The only difference is that is does not do any navigation
      <fetcher.Form method="post" >
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </fetcher.Form>
    );
  }