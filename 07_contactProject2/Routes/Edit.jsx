import { Form, redirect, useLoaderData , useNavigate } from "react-router-dom";
import { getContact, updateContact } from "../src/contact";


export async function loader({params}){
    let contact = await getContact(params.contactId);
    return {contact};
}

export async function action({params , request}){
  //this bellow method is the way to derive all the form data 
  let form = await request.formData(); //this method request the form body and returns all the data as Promise
  let update = Object.fromEntries(form); //Object.fromEntries transforms a list of key value pairs into an object
  let contact = await updateContact(params.contactId , update )
  return redirect(`/contacts/${params.contactId}`) ;
}

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={()=> navigate(-1)}>Cancel</button>
      </p>
    </Form>
  );
}