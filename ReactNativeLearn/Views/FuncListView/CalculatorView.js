import React from "react";
import {Text,View} from 'react-native';
import {ButtonGroup} from "react-native-elements"
//获取屏幕长宽
// var ScreenWidth = Dimensions.get('window').width;
// var ScreenHeight = Dimensions.get('window').height;

class CalculatorView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cnArray : ['(',')','%','C','7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'],
            lastInput:null,
            lastValue:0,
            restultValue:0,
            oper:null,
            displayValue:'0',
        };

        this.clickBtn1 = this.clickBtn1.bind(this)
        this.clickBtn2 = this.clickBtn2.bind(this)
        this.clickBtn3 = this.clickBtn3.bind(this)
        this.clickBtn4 = this.clickBtn4.bind(this)
        this.clickBtn5 = this.clickBtn5.bind(this)
    }
    
    clickBtn1 (selectedIndex) {
        this.setState({selectedIndex})
        this.clickBtn(this.state.cnArray[selectedIndex])
    }
    
    clickBtn2 (selectedIndex) {
        this.setState({selectedIndex})
        this.clickBtn(this.state.cnArray[selectedIndex+4])
    }
    
    clickBtn3 (selectedIndex) {
        this.setState({selectedIndex})
        this.clickBtn(this.state.cnArray[selectedIndex+8])
    }

    clickBtn4 (selectedIndex) {
        this.setState({selectedIndex})
        this.clickBtn(this.state.cnArray[selectedIndex+12])
    }

    clickBtn5 (selectedIndex) {
        this.setState({selectedIndex})
        this.clickBtn(this.state.cnArray[selectedIndex+16])
    }

    clickBtn(cnValue){
        if (Number.isInteger(parseInt(cnValue))){
            if (this.state.lastInput === null && this.state.displayValue === '0'){
                this.showInput(cnValue)
            }else if (['+','-','/','*'].includes(this.state.lastInput)){
                this.showInput(cnValue)
            }else{
                if (this.state.displayValue === '0'){
                    this.showInput(cnValue)                
                }else{
                    val = this.state.displayValue + cnValue
                    this.showInput(val)
                }
            }
        }else if (cnValue === '.'){
            if (Number.isInteger(parseInt(this.state.displayValue))&&!this.state.displayValue.includes('.')){
                val = this.state.displayValue + cnValue
                this.showInput(val)
            }
        }else if (['+','-','/','*'].includes(cnValue)){
            this.getLastValue()
            this.state.oper = cnValue

        }else if (cnValue === '='){
            this.calcu()
        } 

        this.state.lastInput = cnValue

        //重置
        if (cnValue === 'C'){
            this.state.lastValue = 0;
            this.state.displayValue = '0';
            this.state.oper = null;
            this.state.lastInput = null;
        }
        
    }

    getLastValue(){
        this.state.lastValue = parseFloat(this.state.displayValue)

    }

    calcu(){
        if (this.state.oper !== null){
            switch (this.state.oper){
                case '+':
                    this.state.restultValue = Number(this.state.lastValue) + Number(this.state.displayValue)
                    break;
                case '-':
                        this.state.restultValue = Number(this.state.lastValue) - Number(this.state.displayValue)
                    break;
                case '*':
                        this.state.restultValue = Number(this.state.lastValue) * Number(this.state.displayValue)
                    break;
                case '/':
                        this.state.restultValue = Number(this.state.lastValue) / Number(this.state.displayValue)
                    break;
            }
            this.showInput(String(this.state.restultValue))
            this.state.lastValue = this.state.restultValue;
            this.state.oper = null;
            this.state.lastInput = null;
        }
    }

    showInput(val){
        this.setState({
            displayValue:val
        })
    }

    render(){
        return (
            <View>
                <View style={{marginTop:20,alignSelf:"flex-end", height:40}}>
                    <Text style={{fontSize:40}}>{this.state.displayValue}</Text>
                </View>
                <View>
                <ButtonGroup containerStyle={{height:50}}
                        onPress={this.clickBtn1}
                        buttons={this.state.cnArray.slice(0,4)}
                    ></ButtonGroup>
                    <ButtonGroup containerStyle={{marginTop:-11,height:50}}
                        onPress={this.clickBtn2}
                        buttons={this.state.cnArray.slice(4,8)}
                    ></ButtonGroup>
                    <ButtonGroup containerStyle={{marginTop:-11,height:50}}
                        onPress={this.clickBtn3}
                        buttons={this.state.cnArray.slice(8,12)}
                    ></ButtonGroup>
                    <ButtonGroup containerStyle={{marginTop:-11,height:50}}
                        onPress={this.clickBtn4}
                        buttons={this.state.cnArray.slice(12,16)}
                    ></ButtonGroup>
                    <ButtonGroup containerStyle={{marginTop:-11,height:50}}
                        onPress={this.clickBtn5}
                        buttons={this.state.cnArray.slice(16,20)}
                    ></ButtonGroup>
                </View>
            </View>
        )
    };
}

export default CalculatorView



