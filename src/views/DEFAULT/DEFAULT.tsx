import ImageConstruction from '../../assets/svg/construction.svg'

function DEFAULT() {
  
  return (
    <div className='defaultPage' >
      <p>This is a default route for modules that was recently created</p>
      <img src={ImageConstruction} alt="image to default module" />
    </div>
  )

}

export default DEFAULT