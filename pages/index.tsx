import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '../lib/prisma'
import { signIn, signOut, useSession } from "next-auth/client";


const IndexPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        Hello, {session.user.email ?? session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        You are not logged in! <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default IndexPage;


// export default function Home({users}) {
//   return (
//     const [session, loading] = useSession();

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (session) {
//       return (
//         <div>
//           Hello, {session.user.email ?? session.user.name} <br />
//           <button onClick={() => signOut()}>Sign out</button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           You are not logged in! <br />
//           <button onClick={() => signIn()}>Sign in</button>
//         </div>
//       );
//     }

//     <div className="container">
//       <Head>
//         <title>Upward</title>
//         <meta name="description" content="Advancing women in tech" />
//         <link rel="icon" href="/upward-logo.png" />
//       </Head>

//       <div className="text-center">

//         <img
//           src="/upward-logo.png"
//           alt="Upward"
//           className="icon-small"></img>
//           <h1 className="title">Upward</h1>

//         <p>
//           Our mission is to advance women in tech. We provide this platform to help you land an awesome role!
//         </p>

//         <form action="http://www.acme.com/register" method="POST">
//           <label for="name">Name</label>
//           <input id="name" type="text" autocomplete="name" required />
//           <button type="submit">Register</button>
//         </form>

//         <div className="container">
//           <div className="row">
//             <div className="col-sm">
              
//                 <h4>Sign Up</h4>
//                 <a
//                 href="https://forms.gle/bXWayRQiW6V5UJxE6"
//                 target="_blank"
//                 >

//                 <p>Request to be part of a study group.</p>
//               </a>
//             </div>

//             <div className="col-sm">
           
//               <h4>Find Your Next Role</h4>
//             <a
//               href="https://docs.google.com/forms/d/e/1FAIpQLSdC-AbV2SNhMS99yhY6r4Gu34UC9DhVWIM7utII6irV1pyaSw/viewform"
//               target="_blank"
//              >
//               <p>
//                 Request to get connected directly with hiring managers at fast
//                 growing, inclusive and diverse startups.
//               </p>
//             </a>
//           </div>
//           </div>



//         </div>
//       </div>
//   )
// }
// Fetch all users (in /pages/index.tsx) - Example calling the database
export async function getStaticProps() {
  const users = await prisma.user.findMany()
  return {
    props : { users }
  }
}
