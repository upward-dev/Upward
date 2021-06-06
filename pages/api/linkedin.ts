
export const LINKEDIN_STATE = process.env.LINKEDIN_STATE;
const LINKEDIN_SCOPE = process.env.LINKEDIN_SCOPE;
const LINKEDIN_REDIRECT = process.env.LINKEDIN_REDIRECT;
const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;

const getURLWithQueryParams = (base, params) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&")
  return `${base}?${query}`;
};

export const LINKEDIN_URL = getURLWithQueryParams(
  "https://www.linkedin.com/oauth/v2/authorization",
  {
    response_type: "code",
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT,
    state: LINKEDIN_STATE,
    scope: LINKEDIN_SCOPE
  }
)
export const linkedin = async (code) => {
  ('code', code)
    const LINKEDIN_URL = getURLWithQueryParams(
        "https://www.linkedin.com/oauth/v2/accessToken",
        {
          grant_type: "authorization_code",
          code: code,
          client_id: process.env.LINKEDIN_CLIENT_ID,
          client_secret: process.env.LINKEDIN_CLIENT_SECRET,
          redirect_uri: process.env.LINKEDIN_REDIRECT
        }
      )
      let tok;
      let resp = await fetch(LINKEDIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
  tok = await resp.json();   
  let { access_token, expires_in } = tok;
    let u = {};
 let usr = await fetch("https://cors-anywhere.herokuapp.com/https://api.linkedin.com/v2/me", {
 method: "GET",
  headers: {
    "Authorization":  `Bearer ${access_token}`,  
  }
 })
u = await usr.json();
  if (u.localizedFirstName) {
    res.redirect('/me')
  }
};

export default linkedin;