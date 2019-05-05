// Require in Dependencies
import React from "react";
import "./style.css";

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            message: props.message,
            image: props.image,
            show: props.show
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("Modal received props", nextProps)
        this.setState({message: nextProps.message, show: nextProps.show, image: nextProps.image})
    }

    closeModal () {
        this.props.onClose();
    } 

    render() {
        return(
            <div id="myModal" className="modal" style={{display: this.state.show ? "block" : "none"}} >

            <div className="modal-content">
                <span className="close" onClick={this.closeModal} >&times;</span>
                <p>{this.state.message}</p>
                <img src={ this.state.image } alt="character" style={{ height: 170, width: 170 }} />
            </div>

            </div>
        )
    }
}

export default Modal;