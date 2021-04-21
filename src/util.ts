export const getSecondsFromInput = (input: string): number => {
  const [str1, str2, str3] = input.split(":")

  const val1 = Number(str1)
  const val2 = Number(str2)
  const val3 = Number(str3)

  if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
    return val1
  }

  if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
    return val1 * 60 + val2
  }

  if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
    return val1 * 3600 + val2 * 60 + val3
  }

  return 0
  
}

export const getHHMMSSFromSeconds = (seconds: any): string => {
  let hrs = Math.floor(seconds / 3600)
  let mins = Math.floor((seconds / 60) % 60)
  let secs = Math.floor(seconds % 60)
  

  return [hrs, mins, secs]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  
}

export const getHHMMSSFromMinutes = (minutes: number): string => {
  let mins = Math.floor(minutes)
  let secs = Math.floor(minutes % 1 * 60)
  

  return [mins, secs]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  
}

export const getDistanceInMeters = (distance: string): number => {
  let meters = 0
  switch (distance) {
    case "5k":
      meters = 5000
      break;
    case "10k":
      meters = 10000
      break;
    case "13.1":
      meters = 21097.5;
      break;
    case "26.2":
      meters = 42195;
      break;
    default:
  }
  return meters
}

export const processTimeValue = (e: any, setValue: React.SetStateAction<any>) => {
  const value = e.target.value;
  const seconds = getSecondsFromInput(value);

  const processedValue = getHHMMSSFromSeconds(seconds);

  setValue(processedValue);
};

export const getNameFromDistance = (distance: number): string => distance <= 10000 ? `${distance/1000}k` : `${(distance / 1609).toPrecision(3)}mi` 


