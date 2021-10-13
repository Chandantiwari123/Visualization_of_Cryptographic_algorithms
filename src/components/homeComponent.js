import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {
    render () {
        return (
            <div className="container">
                <center><h3 style={{color: "#00BFFF"}}>Visualise the Cryptography Algorithm</h3></center>
                <div className="row">
                    <div className="col-md-4">
                        <Link to='/additive_cipher'>
                            <div className="algo-card">
                                <h3 style={{color: "#00FFFF"}}>Additive Cipher</h3>
                                <p>The transformation can be represented by aligning two alphabets;
                                the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
                                <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
                            </div>
                         </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/playfair_cipher'>
                            <div className="algo-card">
                                <h3 style={{color: "#00FFFF"}}>Playfair Cipher</h3>
                                <p>The Playfair cipher uses a 5 by 5 table containing a key word or phrase. 
                                    Memorization of the keyword and 4 simple rules was all that was required to create the 5 by 5 table and use the cipher. 
                                <a href="https://en.wikipedia.org/wiki/Playfair_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
                            </div>
                         </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/additive_cipher'>
                            <div className="algo-card">
                                <h3 style={{color: "#00FFFF"}}>Additive Cipher</h3>
                                <p>The transformation can be represented by aligning two alphabets;
                                the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
                                <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
                            </div>
                         </Link>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                        <Link to='/additive_cipher'>
                            <div className="algo-card">
                                <h3 style={{color: "#00FFFF"}}>Additive Cipher</h3>
                                <p>The transformation can be represented by aligning two alphabets;
                                the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
                                <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
                            </div>
                         </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/additive_cipher'>
                            <div className="algo-card">
                                <h3 style={{color: "#00FFFF"}}>Additive Cipher</h3>
                                <p>The transformation can be represented by aligning two alphabets;
                                the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
                                <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
                            </div>
                         </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to='/additive_cipher'>
                            <div className="algo-card">
                                <h3 style={{color: "#00FFFF"}}>Additive Cipher</h3>
                                <p>The transformation can be represented by aligning two alphabets;
                                the cipher alphabet is the plain alphabet rotated left or right by some number of positions.
                                <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank" rel="noopener noreferrer">more...</a></p>
                            </div>
                         </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;