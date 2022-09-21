import { getProviders, useSession, signIn, signOut, type ClientSafeProvider } from "next-auth/react"
import Navbar from "../components/navbar"

interface LoginProps {
  providers: {
    [s: string]: ClientSafeProvider
  }
}

export default function Login({ providers }: LoginProps) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <Navbar />
      <main className="flex justify-center content-center min-h-screen">
        <div className="flex flex-col content-center justify-center gap-5">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}


export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
