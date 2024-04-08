import { PureComponent } from "react";


class PureComp extends PureComponent {
    render () {
        const {name} = this.props
        //console.log("pure component render")
        return (
            <div>
                I am the pure component {name}
            </div>
        )
    }
}

export default PureComp
