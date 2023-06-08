import '../App.css';

const Share = ({share}) => {
    return (
        <div className='share-button'>
            <a href="#" > <span className="share"> {share} </span> </a>
        </div>
    );
};

export default Share;