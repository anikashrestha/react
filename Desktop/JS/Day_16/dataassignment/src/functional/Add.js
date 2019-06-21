import React from 'react';
import Table from './Table';

class Add extends React.Component {


    constructor() {
        super();
        this.state = {};
        this.state.filterText = "";
        this.state.lists = [
            {
                id: 1,
                salary: '$49.99',
                name: 'Asim Dahal'
            }, {
                id: 2,
                salary: '$9.99',
                name: 'Subash Shrestha'
            }, {
                id: 3,
                salary: '$29.99',
                name: 'Shrishma'
            }, {
                id: 4,
                salary: '$99.99',
                name: 'Sagun'
            }, {
                id: 5,
                salary: '$399.99',
                name: 'Anika'
            }, {
                id: 6,
                salary: '$199.99',
                name: 'Subash Shrestha2'
            }
        ];

    }

        render(){
            return (
                <div>
                    <Table
                        lists={this.state.lists}
                        filterText={this.state.filterText}
                        onRowAdd={this.handleAddEvent.bind(this)} />

                </div>
            )
        }
    }
    export default Add;