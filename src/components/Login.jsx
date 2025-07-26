import { SignIn } from '@clerk/clerk-react';
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome to Foodie</h2>
                <p>Please sign in to continue</p>
                <SignIn 
                    routing="path" 
                    path="/login" 
                    redirectUrl="/"
                    appearance={{
                        elements: {
                            rootBox: "login-form",
                            card: "auth-card",
                            headerTitle: "auth-title",
                            headerSubtitle: "auth-subtitle",
                            socialButtonsBlockButton: "social-button",
                            formButtonPrimary: "primary-button",
                            formField: "input-field",
                            footer: "auth-footer"
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Login;
