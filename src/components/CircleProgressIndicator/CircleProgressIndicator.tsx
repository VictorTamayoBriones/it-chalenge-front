import { AppStore } from "@/redux/store";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
import { useSelector } from 'react-redux';

function CircleProgressIndicator() {

  const isLoading = useSelector((store:AppStore)=>store.isLoading)

  return (
    <div className={`overlay-${isLoading ? 'active' : 'unactive'}`}>
      <CircularProgress isIndeterminate color='green.300' >
        <CircularProgressLabel>Loading...</CircularProgressLabel>
      </CircularProgress>
    </div>
  )
}
export default CircleProgressIndicator