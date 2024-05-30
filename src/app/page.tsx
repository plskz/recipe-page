import Image from 'next/image'
import { data } from './data'

export default function Home() {
  return (
    <main className='p-28 flex flex-col items-center justify-center min-h-screen'>
      <div className='w-[737px] flex justify-center flex-col gap-6 p-8 rounded-2xl bg-white'>
        <Image
          src={'/images/omelette.jpeg'}
          alt='omelette'
          width={1312}
          height={600}
          className='rounded-2xl'
        />

        <div className='space-y-3'>
          <h1 className='font-young-serif text-4xl'>Simple Omelette Recipe</h1>
          <p className='text-wenge-brown'>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className='bg-rose-white rounded-2xl p-6 space-y-3'>
            <p className='text-dark-raspberry space-y- text-xl font-bold'>
              Preparation time
            </p>
            <ul className='marker:text-dark-raspberry text-wenge-brown ml-5 space-y-1 list-disc'>
              <li className='pl-6'>
                <span className='font-bold'>Total</span>: Approximately 10
                minutes
              </li>
              <li className='pl-6'>
                <span className='font-bold'>Preparation</span>: 5 minutes
              </li>
              <li className='pl-6'>
                <span className='font-bold'>Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>
        </div>

        <div className='divide-y *:py-5 first:*:pt-0 last:*:pb-0'>
          <div className='space-y-3'>
            <h2 className='font-young-serif text-nutmeg text-3xl'>
              Ingredients
            </h2>
            <ul className='spac-yy-1 marker:text-nutmeg text-wenge-brown ml-5 list-disc'>
              {data.ingredients.map((step, index) => (
                <li className='pl-4' key={index}>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-3'>
            <h2 className='font-young-serif text-nutmeg text-3xl'>
              Instructions
            </h2>
            <ul className='marker:text-nutmeg text-wenge-brown ml-5 space-y-1 list-decimal'>
              <li className='marker:font-bold pl-4'>
                <span className='font-bold'>Beat the eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li className='marker:font-bold pl-4'>
                <span className='font-bold'>Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li className='marker:font-bold pl-4'>
                <span className='font-bold'>Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li className='marker:font-bold pl-4'>
                <span className='font-bold'>Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li className='marker:font-bold pl-4'>
                <span className='font-bold'>Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </li>
              <li className='marker:font-bold pl-4'>
                <span className='font-bold'>Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h2 className='font-young-serif text-nutmeg text-3xl'>Nutrition</h2>
            <p className='text-wenge-brown'>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className='divide-y *:py-3 first:*:pt-1 last:*:pb-1'>
              {data.nutrition.map(({ name, value }) => (
                <div key={name} className='flex px-10'>
                  <p className='text-wenge-brown w-1/2'>{name}</p>
                  <p className='text-nutmeg w-1/2 font-semibold'>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
