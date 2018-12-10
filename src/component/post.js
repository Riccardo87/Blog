import React, { Component } from 'react';
import '../App.css';

class Post extends Component {

    render() {
        return (
            <div>

                <div className='container'>

                    <div>
                        ID: {this.props.id}
                    </div>

                    <div>
                        TITLE: {this.props.title}
                    </div>

                    <div>
                        BODY: {this.props.body}
                    </div>

                </div>

            </div>
        );
    }
}

export default Post;