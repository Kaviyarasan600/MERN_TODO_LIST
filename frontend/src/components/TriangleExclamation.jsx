import { TbExclamationMark } from "react-icons/tb";
import '../css/AnimateTriangle.css'
import { FiOctagon } from "react-icons/fi";

export const TriangleExclamation = () => {
    return (
        <div className="animated_box">
            <FiOctagon className="triangle_marks" /> 
            <TbExclamationMark className="exclamation_marks" />
        </div>
    )
}
