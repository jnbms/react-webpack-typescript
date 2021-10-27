import buttonStyle from "../../styles/buttonStyle";

function Button(props){
    const {children} = props;
    return (
        <button className={buttonStyle}>
            {children}
        </button>
    );
}
export default Button;