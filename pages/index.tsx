// /pages/index.tsx
import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>DealFlow Pro</title>
        <meta name="description" content="Intelligence That Drives Your Auto Group" />
      </Head>
      <main className="min-h-screen bg-white text-black p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">DealFlow Pro</h1>
          <p className="text-lg mb-8">
            Intelligence That Drives Your Auto Group.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="/dealer"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Dealer Demo
            </a>
            <a
              href="/investor"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900"
            >
              Investor Preview
            </a>
          </div>

          {session?.user?.email === 'colewalk77@gmail.com' && (
            <div className="mt-10 border-t pt-6">
              <h2 className="text-xl font-semibold mb-2">Magic Editor</h2>
              <p className="text-sm text-gray-500">You have admin editing access.</p>
              {/* Editor embed will go here next */}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
