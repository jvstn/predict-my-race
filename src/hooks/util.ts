export function findFatigueFactor(timeOne: number, timeTwo: number, distanceOne: number,  distanceTwo: number) {
      let logOfTime = Math.log((timeTwo / timeOne));
      let logOfDistance = Math.log((distanceTwo / distanceOne));

      return logOfTime / logOfDistance
      
    }