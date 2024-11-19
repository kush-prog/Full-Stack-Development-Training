
import pic from '../images/Kush.jpg';

const card = () => {
  return (

        <div className='card'>
            <h2>{props.name}</h2>
            <img src={pic} alt="" />
            <h2>{props.roll}</h2>
        </div>
  
    );
};

export default card




