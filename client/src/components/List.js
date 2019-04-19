import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
                <ol>
                    { this.props.list.map(item => <li key={item['_id']}> {item['﻿user name']}  {item['order name']}  {item['date of creation']}</li>)}
                </ol>
        );
    };
}

export default List;