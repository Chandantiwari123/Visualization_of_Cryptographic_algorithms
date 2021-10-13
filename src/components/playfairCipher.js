import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Playfair extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            plaintext: '',
            key: '',
            letters: [[],[],[],[],[]],
            blocks : [[],[],[],[],[]],
            ciphertext: '',
            flag: 0,
            currentplainletter: '',
            currentcipherletter: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        //this.resetValue = this.resetValue.bind(this);
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
        event.preventDefault();
        this.setState({flag : 1});
        if(this.state.plaintext.length%2 === 1) {
            this.setState({plaintext : this.state.plaintext+'Z'});
        }
        for(let i=0;i<5;i++) {
            for(let j=0;j<5;j++) {
                this.state.blocks[i].push('rgb(40,40,40)');
            }
        }
        let myArr1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let myArr2 = [];
        for(let i=0;i<this.state.key.length;i++) {
            if(myArr2.indexOf(this.state.key[i]) === -1) {
                myArr2.push(this.state.key[i]);
            }
        }
        for(let i=0;i<26;i++) {
            if(myArr2.indexOf(myArr1[i]) === -1) {
                myArr2.push(myArr1[i]);
            }
        }
        var index = 0;
        for(let i=0;i<5;i++) {
            for(let j=0;j<5;j++) {
                this.state.letters[i].push(myArr2[index++]);
            }
        }
        console.log(this.state.letters);
        this.changeincipher();
    }
    sameRow(row1,col1,flag) {
        setTimeout(() => {
            let myarr = [];
            for(let i=0;i<5;i++) {
                let temp = [];
                for(let j=0;j<5;j++) {
                    if(row1 === i && col1 === j) {
                        temp.push('#330000');
                    } else temp.push('rgb(40,40,40)');
                }
                myarr.push(temp);
            }
            this.setState({blocks: myarr})
            setTimeout(() => {
                let myarr = [];
                for(let i=0;i<5;i++) {
                    let temp = [];
                    for(let j=0;j<5;j++) {
                        if(row1 === i && (col1+1)%5 === j) {
                            temp.push('#00FF00');
                        } else temp.push(this.state.blocks[i][j]);
                    }
                    myarr.push(temp);
                }
                setTimeout(() => {
                    this.setState({ciphertext: this.state.ciphertext + this.state.letters[row1][(col1+1)%5],
                    currentcipherletter: this.state.letters[row1][(col1+1)%5]});
                    if(flag === 1) {
                        this.changeincipher();
                    }
                }, 1000);
                this.setState({blocks: myarr});
            }, 1000);
        }, 1000);
    }
    sameCol(row1,col1,flag) {
        setTimeout(() => {
            let myarr = [];
            for(let i=0;i<5;i++) {
                let temp = [];
                for(let j=0;j<5;j++) {
                    if(row1 === i && col1 === j) {
                        temp.push('#330000');
                    } else temp.push('rgb(40,40,40)');
                }
                myarr.push(temp);
            }
            this.setState({blocks: myarr})
            setTimeout(() => {
                let myarr = [];
                for(let i=0;i<5;i++) {
                    let temp = [];
                    for(let j=0;j<5;j++) {
                        if((row1+1)%5 === i && col1 === j) {
                            temp.push('#00FF00');
                        } else temp.push(this.state.blocks[i][j]);
                    }
                    myarr.push(temp);
                }
                setTimeout(() => {
                    this.setState({ciphertext: this.state.ciphertext + this.state.letters[(row1+1)%5][col1],
                    currentcipherletter: this.state.letters[(row1+1)%5][col1]});
                    if(flag === 1) {
                        this.changeincipher();
                    }
                }, 1000);
                this.setState({blocks: myarr});
            }, 1000);
        }, 1000);
    }
    differentCol(row1,col1,row2,col2,first,second) {
        setTimeout(() => {
            if(col2 < col1) {
                [row1,row2,col1,col2] = [row2,row1,col2,col1];
            }
            let arr1= [],arr2 = [];
            for(let i=col1+1;i<=col2;i++) arr1.push(i);
            for(let i=col2-1;i>=col1;i--) arr2.push(i);
            arr1.forEach((i) => {
                setTimeout(() => {
                    let myarr = [];
                    let color = '#330000';
                    if(i===col2) color = '#00FF00';
                    for(let j=0;j<5;j++) {
                        let temp = [];
                        for(let k=0;k<5;k++) {
                            if(j === row1 && k === i) {
                                temp.push(color);
                            } else temp.push(this.state.blocks[j][k]);
                        }
                        myarr.push(temp);
                    }
                    this.setState({blocks: myarr})
                    if(i===col2) {
                        arr2.forEach((l) => {
                            setTimeout(() => {
                                let myarr = [];
                                color = '#330000';
                                if(l===col1) color = '#00FF00';
                                for(let j=0;j<5;j++) {
                                    let temp = [];
                                    for(let k=0;k<5;k++) {
                                        if(j === row2 && k === l) {
                                            temp.push(color);
                                        } else temp.push(this.state.blocks[j][k]);
                                    }
                                    myarr.push(temp);
                                }
                                this.setState({blocks: myarr})
                                if(l === col1) {
                                    this.setState({ciphertext: this.state.ciphertext+first+second,
                                    currentcipherletter: first+second});
                                    setTimeout(() => {
                                        this.changeincipher();
                                    }, 1000);
                                }
                            }, 500*(col2-l));
                        })
                    }
                }, 500*(i-col1-1));
            })
        }, 500);
        
    }
    differentRow(row1,col1,row2,col2) {
        setTimeout(() => {
            let first = this.state.letters[row1][col2];
            let second = this.state.letters[row2][col1];
            let flag=0;
            if(row2 < row1) {
                [row1,row2,col1,col2] = [row2,row1,col2,col1];
                flag=1;
            }
            let arr1= [],arr2 = [];
            for(let i=row1;i<=row2;i++) arr1.push(i);
            for(let i=row2;i>=row1;i--) arr2.push(i);
                arr1.forEach((i) => {
                    setTimeout(() => {
                        let myarr = [];
                        for(let j=0;j<5;j++) {
                            let temp = [];
                            for(let k=0;k<5;k++) {
                                if(j === i && k === col1) {
                                    temp.push('#330000');
                                } else temp.push(this.state.blocks[j][k]);
                            }
                            myarr.push(temp);
                        }
                        this.setState({blocks: myarr})
                        if(i===row2) {
                            arr2.forEach((l) => {
                                setTimeout(() => {
                                    let myarr = [];
                                    for(let j=0;j<5;j++) {
                                        let temp = [];
                                        for(let k=0;k<5;k++) {
                                            if(j === l && k === col2) {
                                                temp.push('#330000');
                                            } else temp.push(this.state.blocks[j][k]);
                                        }
                                        myarr.push(temp);
                                    }
                                    this.setState({blocks: myarr})
                                    if(l === row1) {
                                        if(flag===1) [row1,row2,col1,col2] = [row2,row1,col2,col1];
                                        this.differentCol(row1,col1,row2,col2,first,second);
                                    }
                                }, 500*(row2-l+1));
                            })
                        }
                    }, 500*(i-row1));
                })
        }, 500);  
    }
    changeincipher() {
        if(this.state.ciphertext.length < this.state.plaintext.length) {
            console.log(this.state.ciphertext.length);
            setTimeout(() => {
                let myarr = [];
                for(let i=0;i<5;i++) {
                    let temp = [];
                    for(let j=0;j<5;j++) {
                        temp.push('rgb(40,40,40)');
                    }
                    myarr.push(temp);
                }
                let index = this.state.flag-1;
                let S = this.state.plaintext[index] + this.state.plaintext[index+1];
                this.setState({currentplainletter : S,
                currentcipherletter: '',
                flag: this.state.flag+2,
                blocks: myarr});
                var row1=0,col1=0,row2=0,col2=0;
                for(let i=0;i<5;i++)
                {
                    for(let j=0;j<5;j++)
                    {
                        if(this.state.letters[i][j] === this.state.plaintext[index]) {
                            row1 = i;
                            col1 = j;
                        }
                        if(this.state.letters[i][j] === this.state.plaintext[index+1]) {
                            row2 = i;
                            col2 = j;
                        }
                    }
                }
                console.log(row1 === row2)
                if(row1 === row2) {
                    for(let i=0;i<2;i++) {
                        setTimeout(() => {
                            if(i===0) {
                                this.sameRow(row1,col1,i);
                            }
                            else {
                                this.sameRow(row2,col2,i);
                                
                            }
                        }, i*3000);
                    }
                }
                else if(col1 === col2) {
                    for(let i=0;i<2;i++) {
                        setTimeout(() => {
                            if(i===0) {
                                this.sameCol(row1,col1,i);
                            }
                            else {
                                this.sameCol(row2,col2,i);
                                
                            }
                        }, i*3000);
                    }
                }
                else {
                    this.differentRow(row1,col1,row2,col2);
                }
            }, 500);

        }
    }
    render() {
        if(this.state.flag === 0) {
            return(
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
                                            <Input type="text" id="key" name="key" 
                                            placeholder="Key"
                                            value={this.state.key}
                                            onChange={this.handleChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 8, offset: 4}}>
                                            <Button type="submit" color="primary" className="button">
                                                Encrypt
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                        <div className="offset-1 margintop">
                            <h3 style={{color: "#00FFFF"}}>The formula of encryption is:</h3>

                            <p>1. If both letters are the same (or only one letter is left), add an "X" after the first letter. Encrypt the new pair and continue.
                                Some variants of Playfair use "Q" instead of "X", but any letter, itself uncommon as a repeated pair, will do.</p>

                            <p>2. If the letters appear on the same row of your table, 
                                replace them with the letters to their immediate right respectively (wrapping around to the left side of the row if a letter in the original pair was on the right side of the row).</p>

                            <p>3. If the letters appear on the same column of your table, 
                                replace them with the letters immediately below respectively (wrapping around to the top side of the column if a letter in the original pair was on the bottom side of the column).</p>

                            <p>4. If the letters are not on the same row or column, replace them with the letters on the same row respectively but at the other pair of corners of the rectangle defined by the original pair. 
                                The order is important – the first letter of the encrypted pair is the one that lies on the same row as the first letter of the plaintext pair.</p>

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
                            <h2 className="marginbottom" style={{color: "#00FFFF"}}>Plain Text to Cipher Text</h2>
                            <div className="row">
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[0][0]}}>{this.state.letters[0][0]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[0][1]}}>{this.state.letters[0][1]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[0][2]}}>{this.state.letters[0][2]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[0][3]}}>{this.state.letters[0][3]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[0][4]}}>{this.state.letters[0][4]}</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[1][0]}}>{this.state.letters[1][0]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[1][1]}}>{this.state.letters[1][1]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[1][2]}}>{this.state.letters[1][2]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[1][3]}}>{this.state.letters[1][3]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[1][4]}}>{this.state.letters[1][4]}</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[2][0]}}>{this.state.letters[2][0]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[2][1]}}>{this.state.letters[2][1]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[2][2]}}>{this.state.letters[2][2]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[2][3]}}>{this.state.letters[2][3]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[2][4]}}>{this.state.letters[2][4]}</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[3][0]}}>{this.state.letters[3][0]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[3][1]}}>{this.state.letters[3][1]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[3][2]}}>{this.state.letters[3][2]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[3][3]}}>{this.state.letters[3][3]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[3][4]}}>{this.state.letters[3][4]}</div>
                            </div>
                            <div className="row margintop">
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[4][0]}}>{this.state.letters[4][0]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[4][1]}}>{this.state.letters[4][1]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[4][2]}}>{this.state.letters[4][2]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[4][3]}}>{this.state.letters[4][3]}</div>
                                <div className="col-1 offset-1 blocks" style={{background : this.state.blocks[4][4]}}>{this.state.letters[4][4]}</div>
                            </div>
                        </div>
                        <div className="col-md-3 offset-1 Card">
                            <h2 className="marginbottom" style={{color: "#00FFFF"}}>Cipher Text</h2>
                            <p className="texts">{this.state.ciphertext}</p>
                            <h1 className="font-size-200">{this.state.currentcipherletter}</h1>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default Playfair;