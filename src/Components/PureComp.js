import { PureComponent } from "react";


class PureComp extends PureComponent {
    render () {
        console.log("pure component render")
        return (
            <div>
                I am the pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
