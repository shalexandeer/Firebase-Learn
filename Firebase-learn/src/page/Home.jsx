import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            // sign out succesfull,
            console.log("signed out succesfully");
            navigate("/login")
        }).catch((error) => {
            console.log(error);
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                const uid = user.uid
                console.log("uid", uid);
                return;
            }else{
                console.log("user is loggoed out");
            }
        })
    })

    return <>
                <p>
                    Welcome Home
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
    </>
}

export default Home;