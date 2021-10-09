import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Additive extends Component {

    constructor(props) {
        super(props);

        this.state = {
            plaintext: '',
            key: null,
            letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            blocks : [],
            ciphertext: '',
            flag: 0,
            currentplainletter: '',
            currentcipherletter: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetValue = this.resetValue.bind(this);
    }
    handleChange(event) {
        //console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        //alert(`Plain text: ${this.state.plaintext} and Key: ${this.state.key}`);
        this.setState({flag : 1});
        event.preventDefault();
        for(let i=0;i<26;i++)
        {
            this.state.blocks.push('rgb(40,40,40)');
        }
        this.changeincipher();
    }

    resetValue() {
        var newarr=[];
        for(let i=0;i<26;i++)
        {
            newarr.push('rgb(40,40,40)');
        }
        this.setState({
            plaintext: '',
            key: null,
            blocks : newarr,
            ciphertext: '',
            flag: 0,
            currentplainletter: '',
            currentcipherletter: ''
        });
    }
    
    changeincipher(){
        if(this.state.ciphertext.length < this.state.plaintext.length) {
        setTimeout(()=>{
            this.setState({currentplainletter:this.state.plaintext[this.state.flag-1]})
            this.setState({currentcipherletter: ""})
            for(var i=0;i<26;i++)
            {
                var newarr = this.state.blocks;
                newarr[i] = 'rgb(40,40,40)';
                this.setState({blocks : newarr});
            }
            var ind = this.state.letters.indexOf(this.state.currentplainletter);
            for(let i=ind;i<=ind + Number(this.state.key);i++) {
                setTimeout(() => {
                    var color='#330000';
                    if(i === ind + Number(this.state.key)) {
                        color = '#00FF00';
                    }
                    var newarr = this.state.blocks;
                    newarr[i%26] = color;
                    this.setState({blocks : newarr});
                    if(color==='#00FF00') {
                        setTimeout(() => {
                            let index = this.state.letters.indexOf(this.state.plaintext[this.state.flag-1]);
                            let newindex = (index + Number(this.state.key))%26;
                            this.setState({ciphertext: this.state.ciphertext + this.state.letters[newindex]});
                            this.setState({currentcipherletter:this.state.letters[newindex]})
                            this.setState({flag: this.state.flag+1})
                            this.changeincipher();
                        },500)
                    }
                },500*(i-ind))
            }

        },500)
        
    }
    }
    render() {
        if(this.state.flag===0) {
        return (
            <div className="container">
                <div className="Card col-md-8 offset-2">
                    <div className="row row-content">
                        <div className="col-12 col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="plaintext" md={4}>Plain Text:</Label>
                                    <Col md={8}>
                                        <Input type="textarea" id="plaintext" name="plaintext" 
                                        placeholder="Plain Text"
                                        value={this.state.plaintext}
                                        onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="key" md={4}>Key:</Label>
                                    <Col md={8}>
                                        <Input type="number" min="1" id="key" name="key" 
                                        placeholder="Key"
                                        value={this.state.key}
                                        onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 8, offset: 4}}>
                                        <Button type="submit" color="primary">
                                            Encrypt
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <div className="offset-1 margintop">
                        <h3 style={{color: "#00FFFF"}}>The formula of encryption is:</h3>

                        <p>En (x) = (x + n) mod 26</p>

                        <p>The formula of decryption is:</p>

                        <p>Dn (x) = (xi - n) mod 26</p>

                        <p>If any case (Dn) value becomes negative (-ve), in this case, we will add 26 in the negative value.</p>

                        <p>Where,</p>

                        <p>E denotes the encryption</p>
                        <p>D denotes the decryption</p>
                        <p>x denotes the letters value</p>
                        <p>n denotes the key value (shift value)</p>
                    </div>
                </div>
            </div>
        )
        }
        else {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 Card">
                            <h2 className="marginbottom" style={{color: "#00FFFF"}}>Plain Text</h2>
                            <p className="texts">{this.state.plaintext}</p>
                            <h1 className="font-size-200">{this.state.currentplainletter}</h1>
                        </div>
                        <div className="col-md-4 offset-1 Card">
                            <h2 className="marginbottom"  style={{color: "#00FFFF"}}>Plain Text to Cipher Text</h2>
                            <div className="row">
                                <div className="col-1 blocks" style={{background : this.state.blocks[0]}}>A</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[1]}}>B</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[2]}}>C</div>
                                <div className="col-1 offset-2 blocks" style={{background : this.state.blocks[3]}}>D</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[4]}}>E</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[5]}}>F</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 blocks" style={{background : this.state.blocks[6]}}>G</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[7]}}>H</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[8]}}>I</div>
                                <div className="col-1 offset-2 blocks" style={{background : this.state.blocks[9]}}>J</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[10]}}>K</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[11]}}>L</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 blocks" style={{background : this.state.blocks[12]}}>M</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[13]}}>N</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[14]}}>O</div>
                                <div className="col-1 offset-2 blocks" style={{background : this.state.blocks[15]}}>P</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[16]}}>Q</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[17]}}>R</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 blocks" style={{background : this.state.blocks[18]}}>S</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[19]}}>T</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[20]}}>U</div>
                                <div className="col-1 offset-2 blocks" style={{background : this.state.blocks[21]}}>V</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[22]}}>W</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[23]}}>X</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 offset-4 blocks" style={{background : this.state.blocks[24]}}>Y</div>
                                <div className="col-1 offset-2 blocks" style={{background : this.state.blocks[25]}}>Z</div>
                            </div>
                        </div>
                        <div className="col-md-3 offset-1 Card">
                            <h2 className="marginbottom"  style={{color: "#00FFFF"}}>Cipher Text</h2>
                            <p className="texts">{this.state.ciphertext}</p>
                            <h1 className="font-size-200">{this.state.currentcipherletter}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-5 col-4 margintop">
                        <Button className="btn-danger btn-lg" onClick={this.resetValue} style={{width:300}}>Reset</Button>
                        </div>
                    </div>
                </div>
            )
        }
    }
      
}
  
export default Additive;