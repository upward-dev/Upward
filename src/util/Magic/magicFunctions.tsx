import { OAuthExtension } from "@magic-ext/oauth";
import { SDKError } from "@magic-sdk/admin";
import { magic } from "./magic.config";

export const LoginMagicUser = async(userEmail:string) => {
         
    if(magic) {
        let didToken = await magic.auth.loginWithMagicLink({
            email:userEmail
        });
        // Validate didToken with server
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + didToken,
            }
        });
        return res;
    }
  

}
export const LoginMagicSuccess = async(res:any,setUser:(user:object) => object,router:any) => {
    try {
        // Set the UserContext to the now logged in user
          let userMetadata = magic && await magic.user.getMetadata();
          if(userMetadata) {
            let userId =  userMetadata.issuer.split(":")[2];
            setUser(userMetadata);
            console.log(userId);
             router.push(`/resumeProfile/${userId}`);
            
            return userMetadata;
          }
      }  catch(err) {
          console.log(err);
      }
}

export const LoginLinkedinWithMagic = async(userEmail:string) => {
    if(magic) {
        let socialDidToken = await magic.oauth.loginWithRedirect({
            provider:"linkedin",
            redirectURI:`/resumeProfile/${userEmail}`
        })
        console.log(socialDidToken);
    }
}

// export const LoginMagicError = (err) => {
//     if(err instanceof SDKError) {
//         console.log(err);
//     }
// }