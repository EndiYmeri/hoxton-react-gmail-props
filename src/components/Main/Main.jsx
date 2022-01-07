import Email from "./Email/Email"
import "./Emails.css"
function Main(props){

    return (
        <main className="emails">
        <ul>
          {props.filteredEmails.map((email) => (
           <Email email = {email} setEmails = {props.setEmails} />
          ))}
        </ul>
      </main>
    )
}
export default Main