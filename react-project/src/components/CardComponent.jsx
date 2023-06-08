import ImageComponent from "./ImageComponent.jsx";
import TitleComponent from "./TitleComponent.jsx";
import Description from "./Description.jsx";
import Learn from "./Learn.jsx";
import Share from "./Share.jsx";
import '../App.css';

const CardComponent = ({img,title,description,share,learn}) => {
    return (

        <div>
            <div className="card-container">
                <div>
                    <ImageComponent img={img}/>
                </div>
                <div className="bottom-section">
                <div>
                    <TitleComponent title={title}/>
                </div>
                <div>
                    <Description description={description}/>
                </div>
                <div className='share-learn' >
                    <Share share={share}/>
                    <Learn learn={learn}/>
                </div>
                </div>

            </div>
        </div>
    )
}
export default CardComponent;