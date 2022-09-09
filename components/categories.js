import Image from 'next/image'

export default function Categories({ categories }) {
  return (
    <div>
    {
      categories.map((category) => (
        <div className="grid grid-cols-3 gap-4" key={category.name}>
          {
            category.photos.map((photo) => (
              <div key={category.name} className="flex-auto">
                <Image
                  className="scale-100 hover:scale-110 ease-in-out duration-1000"
                  key={ photo }
                  src={ '/' + category.name + '/' + photo }
                  layout="responsive"
                  height={1350}
                  width={1080}
                  alt={ photo }
                />
              </div>
            ))
          }
        </div>
      ))
    }
    </div>
  )
}

