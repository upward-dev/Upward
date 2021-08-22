import { useState } from "react";
import styles from "../styles/LinkedInLogin.module.scss";
const LinkedInLogin = ({ onSubmit }) => {
  const provider = "linkedin";
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <div className={styles.orLoginWith}>Or login with</div>
      <div key={provider}>
        <button
          type="submit"
          className={styles.socialBtn}
          onClick={() => {
            setIsRedirecting(true);
            onSubmit(provider);
          }}
          key={provider}
          // style={{ backgroundImage: `url(${provider}.png)` }}
        >
          {/* turns "google" to "Google" */}
          {provider.replace(/^\w/, (c) => c.toUpperCase())}
        </button>
      </div>

      {isRedirecting && <div className={styles.redirecting}>Redirecting...</div>}

    </>
  );
};

export default LinkedInLogin;
