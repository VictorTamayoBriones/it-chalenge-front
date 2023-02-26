import FourOFour from '../../assets/svg/404.svg'

function FourOFourn() {
  return (
    <div className="fourOfour" >
      <p>ERROR 404</p>
      <img src={FourOFour} alt="" />
      <p>Oops, it seems we can't find your link! go back to home.</p>
    </div>
  )
}
export default FourOFourn