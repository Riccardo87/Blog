import React, { Component } from 'react';
import '../App.css';

import {
    Table
} from 'reactstrap';

class Post extends Component {

    render() {
        return (
            <div className="po">

                <Table className='post'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className='idnum'> {this.props.id} </th>
                            <td className='titlec'> {this.props.title} </td>
                            <td className='bodyc'> {this.props.body} </td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default Post;