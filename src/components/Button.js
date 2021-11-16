
import { BsPlusLg } from "react-icons/bs";
import propTypes from "prop-types";

const clickFunc = () => {
    console.log("Button clicked");
} 

const Button = () => {
    return (
        <button className="btn btn-round btn-add" onClick={clickFunc}><BsPlusLg /></button>
    )
}

Button.propTypes = {
    onClick: propTypes.func
}

export default Button
