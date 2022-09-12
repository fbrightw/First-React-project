import React, {Component} from 'react';

export default class Profile extends Component{
    render() {
        return(
            <>
                <button
                    style={{
                        height: 30,
                        width: 100,
                        position: 'absolute',
                        right: 20,
                        top: 8,
                    }}
                >
                    Profile
                </button>
            </>
        );
    }
}
