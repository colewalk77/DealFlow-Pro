import Head from 'next/head'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div>
      <Head>
        <title>DealFlow Pro</title>
        <meta name="description" content="Intelligence That Drives Your Auto Group." />
      </Head>

      <main className="min-h-screen bg-white text-black p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">DealFlow Pro</h1>
          <p className="text-lg mb-8">Intelligence That Drives Your Auto Group.</p>

          <div className="flex justify-center gap-6">
            <a href="/dealer" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">Dealer Demo</a>
            <a href="/investor" className="px-6 py-3 bg-gray-200 text-black rounded-xl hover:bg-gray-300">Investor Preview</a>
          </div>
        </div>
      </main>
    </div>
  )
}
