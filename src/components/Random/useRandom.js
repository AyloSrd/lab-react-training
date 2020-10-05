export default function useRandom(min, max){
	return Math.floor(
		Math.random() * (max - min) + min
	  )
}