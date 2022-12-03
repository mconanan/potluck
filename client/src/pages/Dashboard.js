import CreatePotluckForm from "../components/CreatePotluck";
import RenderPotlucks from "../components/RenderPotlucks";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../utils/queries"; 

export default function UserLogin() {
  //add Query, mutation, typedef resolver for renderingpotlucks 
    //finduser, read potlucks (.populate)

  const {loading, data} = useQuery(QUERY_ME);
  const me = data?.me || {};


  return (
    // ternary here for "if user is logged in display this"
    <div className="user-login">
      <div className="login-forms">
        <CreatePotluckForm />
      </div>
      <div>
        <RenderPotlucks potlucks={me?.potlucks}/>
      </div>
    </div>
  );
}
