
import './Header.css';
function Header(props) {
	return (
        <div className="header">
            <div className="title">
            <div className="message" style="color: rgb(103, 193, 142)">Message Us</div>
            <button className="close" onClick={props.close}>
                <svg viewBox="0 0 40 40">
                    <path className="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
            </button>
            </div>
        </div>
    );
}

export default Header;