// Require in Dependencies
// Require in Dependencies
import React from "react";
// import NavMessage from "../NavMessage";
import "./style.css";

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
        this.state = {
            message: props.message,
            show: false
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({message: nextProps.message})
    }

    closeModal () {
        this.setState({show: false});
    }

    render() {
        return(
            <div id="myModal" className="modal">

            <div className="modal-content">
                <span className="close" onClick={this.closeModal} >&times;</span>
                <p>{this.state.message}</p>
            </div>

            </div>
        )
    }
}

export default Modal;