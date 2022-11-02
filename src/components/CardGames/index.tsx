import { Game } from "../Game";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface CardGamesProps {
  dateTime: string;
  game: Games[];
}

interface Games {
  firstCountry: string;
  secondCountry: string;
  time: string;
}
export function CardGames({dateTime, game}: CardGamesProps) {
  return (
    <div className="bg-gray-700 px-6 py-8 rounded border-b border-b-yellow-500 w-[316px] mx-auto">

      <div className="w-[164px] flex gap-4 justify-center items-center mx-auto rounded p-1 border border-yellow-500 mb-14 mt-8">
        <span className="text-2xl text-yellow-500">{format(new Date(dateTime), "ii'/'LL", {locale: ptBR})}</span>
        <span className="text-sm ">{format(new Date(dateTime), "eee", {locale: ptBR}).toUpperCase()}</span>
      </div>

      <div className="flex flex-col gap-6">

        {game.map(play => {
          return(
            <Game 
              firstCountry={play.firstCountry}
              secondCountry={play.secondCountry}
              time={format(new Date(play.time), "k':'ss", {locale: ptBR})}
            />
          )
        })}
        
      </div>

    </div>
  )
}