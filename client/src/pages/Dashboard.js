import CreatePotluckForm from "../components/CreatePotluck";
import ItemList from "../components/ItemList";

export default function UserLogin() {
  return (

    // ternary here for "if user is logged in display this"
    <div className="user-login">
      <div className="login-forms">
        <CreatePotluckForm />
      </div>
      <div className="potluck-items">
        <ItemList />
      </div>
    </div>
  );
}
