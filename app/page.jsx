import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-5">Welcome</h1>
      <p className='mb-5'>
        This is a demo site for the Next.js & Clerk tutorial. Go ahead and sign up or sign in.
      </p>
    </main>
  )
}
