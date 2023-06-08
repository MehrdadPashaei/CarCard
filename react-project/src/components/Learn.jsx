import '../App.css';

const Learn = ({learn}) => {
    return (
        <div className='learn-button'>
            <a href="#" ><span className="learn">{learn}</span></a>
        </div>
    );
};

export default Learn;