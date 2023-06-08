import '../App.css';

const Description = ({description}) => {
    return (
        <div className='description-section'>
            <p  className="description">
                {description}
            </p>

        </div>
    );
};

export default Description;