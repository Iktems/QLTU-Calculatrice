import Button from "../styles/Button"



const OneButton = ({number, dispatch}) => {
    
    
    const handleClick = () => {
        dispatch({type:"SET_NUMBER", number:number})
    }
    
    return(
        <Button onClick={handleClick}>{number}</Button>
    )
}

export default OneButton;