
import Image from 'next/image'
import Head from 'next/head'

import Categories from '../components/categories.js'

export default function index({ categories }) {
  const title = 'Little Dark World'

  return (
    <div className="container mx-auto">
      <Head>
        <title>lildarkw</title>
        <meta name="description" content="Little Dark World" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container my-8">
        <div className="flex justify-center content-center text-center">
          <h1 className="font-sans text-2xl">{ title }</h1>
        </div>
      </main>

      <Categories categories={categories} />

      <footer>
      </footer>
    </div>
  )
}

import { promises as fs } from 'fs'
import { join } from 'path'

export async function getStaticProps() {
  let categories = (await fs.readdir(join(process.cwd(), 'public'), { withFileTypes: true }))
    .filter((content) => content.isDirectory())
    .map((content) => content.name)

  categories = await Promise.all(categories.map(async (category) => {
    const photos = (await fs.readdir(join(process.cwd(), 'public', category)))
      .filter((content) => content.includes('.jpg'))

    return { name: category, photos }
  }))

  console.log(categories)

  return { props: { categories } }
}
