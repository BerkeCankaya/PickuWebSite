import Hero from '../components/Hero'

const Home = ({data}) => {
  
  return (
    <div className='w-2/3 h-full m-auto max-2xl:w-[90%]'>
      {data ? (
        <Hero 
        categories={data.categories} 
        cards={data.cards}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Home
