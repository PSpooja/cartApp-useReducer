import {AiFillStar, AiOutlineStar} from "react-icons/ai"

function Ratings({ratings, onClick, style}){
    return <>
       {[...Array(5)].map((_,i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
            {ratings > i ? 
            <AiFillStar fontSize={15}/> :
            <AiOutlineStar fontSize={15}/>
        }</span>
       ))}
    
    </>
}
export default Ratings;