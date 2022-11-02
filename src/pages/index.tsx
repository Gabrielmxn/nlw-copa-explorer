import { CardGames } from "../components/CardGames";

const games = [
  {
    dateGame: '2022-11-20T00:00:00.300Z',
    game: [{
      firstCountry: 'qatar',
      secondCountry: 'ecuador',
      time: '2022-11-24T13:00:00.300Z'
    }]
  },
  {
    dateGame: '2022-11-21T00:00:00.300Z',
    game: [{
      firstCountry: 'england',
      secondCountry: 'iran',
      time: '2022-11-21T10:00:00.300Z'
    },
    {
      firstCountry: 'senegal',
      secondCountry: 'netherlands',
      time: '2022-11-21T13:00:00.300Z'
    },
    {
      firstCountry: 'united states',
      secondCountry: 'wales',
      time: '2022-11-21T16:00:00.300Z'
    }]
  },
  {
    dateGame: '2022-11-22T00:00:00.300Z',
    game: [{
      firstCountry: 'argentina',
      secondCountry: 'saudi arabia',
      time: '2022-11-22T07:00:00.300Z'
    },
    {
      firstCountry: 'denmark',
      secondCountry: 'tunisia',
      time: '2022-11-22T10:00:00.300Z'
    },
    {
      firstCountry: 'mexico',
      secondCountry: 'poland',
      time: '2022-11-22T13:00:00.300Z'
    },
    {
      firstCountry: 'france',
      secondCountry: 'australia',
      time: '2022-11-22T16:00:00.300Z'
    }],
    },
    {
      dateGame: '2022-11-23T00:00:00.300Z',
      game: [
        {
          firstCountry: 'morocco',
          secondCountry: 'croatia',
          time: '2022-11-23T07:00:00.300Z'
        },
        {
          firstCountry: 'germany',
          secondCountry: 'japan',
          time: '2022-11-23T10:00:00.300Z'
        },
        {
          firstCountry: 'spain',
          secondCountry: 'costa rica',
          time: '2022-11-23T13:00:00.300Z'
        },
        {
          firstCountry: 'belgium',
          secondCountry: 'canada',
          time: '2022-11-23T16:00:00.300Z'
        }
      ]
    }

  ]


export default function Home() {
  return (
    <main className="max-w-[664px] w-full mx-auto flex flex-col justify-center  pt-14">
      <div className="flex justify-center flex-col gap-2 items-center">
        <img 
        className="w-[100px]"
        src="logonlw.svg" 
        alt="logo nlw copa" />
        <h2 className="text-3xl">CALENDÁRIO</h2>
      </div>

      <div className="grid grid-cols-1 mt-16 gap-8 sm:grid-cols-2">

        {games.map(play => {
          return (
            
            <CardGames 
              dateTime={play.dateGame}
              game={play.game}
            />
          )
        })}
      
      </div>
      
    </main>

  )
}
