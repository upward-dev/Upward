import { magic } from "./magic.config";

export const LoginMagicUser = async(userEmail:string) => {
         
    if(magic) {
        let didToken = await magic.auth.loginWithMagicLink({
            email:userEmail,
            redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
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
    if (res.status === 200) {
        // Set the UserContext to the now logged in user
          let userMetadata = magic && await magic.user.getMetadata();
          if(userMetadata) {
            let userId =  userMetadata.issuer.split(":")[2];
            setUser(userMetadata);
            console.log(userId);
            router.push(`/resumeProfile/${userId}`);
            
            return userMetadata;
          }
      }
    

}