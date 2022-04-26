function SButton(props) {
    const {buttonType, buttonText} = props
    return (
        <button type={buttonType} onClick={props.fetchSupportCode}
            className="s-button px-6 py-3 rounded-xl bg-gray-50"
        >{buttonText}
        </button>
    );
}

export default SButton;
