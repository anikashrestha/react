import React from 'react';

class Person extends React.Component{

    componentDidUpdate(pervProps){
        console.log('Component Updated', pervProps)
    }
     componentWillUnmount(){
        console.log('Component unmounted')
    }
    // componentWillReceiveProps(pervProps,nextProps){
    //     console.log({pervProps,nextProps})
    // }

    render(){
        return(
            <div>
               name:{this.props.name}
            </div>
        )
    }
}
export default Person;