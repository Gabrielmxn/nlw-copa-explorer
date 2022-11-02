interface GameProps {
  firstCountry: string;
  secondCountry: string;
  time: string;
}
  
export function Game({ firstCountry, secondCountry, time}: GameProps) {
  return (
   <>
    <div className="flex justify-around gap-9 items-center">
      <img
        className="w-[50px] h-[50px]"
        src={`country/icon=${firstCountry}.svg`}
        alt="Bonaire"
      />
      <span className="text-4xl">{time}</span>
      <img
        className="w-[50px] h-[50px]"
        src={`country/icon=${secondCountry}.svg`}
        alt="Brazil"
      />
    </div>
   
   </>

  )
}