import '../App.css';

const ImageComponent = ({img}) => {
    return(
        <div>
            <img className='car-image'  src={img} alt="RedCar"/>
        </div>
    )
}
export default ImageComponent