import { signInWithGoogle } from "../firebase.js";

const LoginWithGoogle = () => {
    return <div className="google">
        <span onClick={signInWithGoogle}>Sign In with google</span>
    </div>
}

export default LoginWithGoogle