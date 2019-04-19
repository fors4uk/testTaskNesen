import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import List from './List';


class App extends Component {

    componentDidMount() {
        this.props.fetchList();
    }
    upload(acceptedFiles){
        this.props.onDrop(acceptedFiles).then(
            () => this.props.fetchList()
        );
    }
    render() {
        return (
            <div>
                {this.props.payload ? 'loading....' : <List list={this.props.data}></List>}
                <Dropzone onDrop={acceptedFiles => this.upload(acceptedFiles)}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <button>Click to select file</button>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </div>
        );
    };
}

export default App;