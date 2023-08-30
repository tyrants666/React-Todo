
import { BsPlusLg } from "react-icons/bs";
import propTypes from "prop-types";


const Button = () => {
    return (
        <button className="btn btn-round btn-add"><BsPlusLg /></button>
    )
}

Button.propTypes = {
    onClick: propTypes.func
}

export default Button
