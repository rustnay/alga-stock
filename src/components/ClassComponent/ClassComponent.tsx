import React from 'react'

class ClassComponent extends React.Component<{ name: string }> {

    constructor(props: any) {
        super(props)
        console.log('constructor reached')
    }

    state = {
        name: 'Mundo'
    }

    componentDidMount(){
        console.log('didMount reached')
    }

    componentDidUpdate(){
        console.log('didUpdate reached')
    }

    componentWillUnmount(){
        console.log('willUnmount reached')
    }

    render() {
        console.log('render reached')
    return <div><p>name: {this.state.name}</p><button onClick={() => {
        this.setState({name: 'Cristiano'})
    }}>
        Click me</button></div>

    }
}

export default ClassComponent