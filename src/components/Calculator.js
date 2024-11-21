import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Calculator.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Calculator() {
    const [numElem, setNumElem] = useState([]); 
    const [currentNumber, setCurrentNumber] = useState(""); 
    
    const clickHandler = (e) => {
        const value = e.target.innerHTML;
        console.log("Clicked:", value);
      

        switch (value) {
            case "AC": 
                setNumElem([]);
                setCurrentNumber("");
                break;

                case "=":
                    if (currentNumber) {
                        setNumElem((prev) => [...prev, currentNumber]);
                       
                    }
                    try {
                        const result = eval([...numElem, currentNumber].join(""));
                        setNumElem([]); 
                        setCurrentNumber(result); 
                    } catch (error) {
                        console.error("Invalid Calculation");
                        setNumElem(["error"]); 
                    }
                    break;

            case ".":
                    if (!currentNumber.includes(".")) {
                    setCurrentNumber((prev) => prev + ".");
                }
                break;

                default:
                    if (["+", "-", "*", "/", "%"].includes(value)) {
                        if (currentNumber) {
                            setCurrentNumber((prev) => prev + value);
                            setNumElem((prev) => [...prev, currentNumber, value]);
                            setCurrentNumber("");
                        } else if (numElem.length > 0) {
                            setCurrentNumber(value);
                            setNumElem((prev) => [...prev.slice(0, -1), value]);
                        }
                    } else {
                        setCurrentNumber((prev) => prev + value); 
                    }
                    }
                
              
        };
        useEffect(()=>{
            console.log("numElem:", numElem);
            console.log("currentNumber:", currentNumber);
           },[numElem,currentNumber])

    return (
        <div>
            <Card style={{ width: "20rem" }} className="bg-primary">
                <Card.Header>Calculator by maryam</Card.Header>
                <Card.Body>
                    <div className="display mb-3">{[...numElem, currentNumber].join(" ")}</div> 
                    <Card>
                        <ButtonGroup vertical>
                            <ButtonGroup size="lg" className="me-2">
                                <Button id="clear" onClick={clickHandler}>AC</Button>
                                <Button id="divide" onClick={clickHandler}>/</Button>
                                <Button id="multiply" onClick={clickHandler}>*</Button>
                            </ButtonGroup>
                            <ButtonGroup size="lg" className="me-2">
                                <Button id="seven" onClick={clickHandler}>7</Button>
                                <Button id="eight" onClick={clickHandler}>8</Button>
                                <Button id="nine" onClick={clickHandler}>9</Button>
                                <Button id="subtract" onClick={clickHandler}>-</Button>
                            </ButtonGroup>
                            <ButtonGroup size="lg" className="me-2">
                                <Button id="four" onClick={clickHandler}>4</Button>
                                <Button id="five" onClick={clickHandler}>5</Button>
                                <Button id="six" onClick={clickHandler}>6</Button>
                                <Button id="add" onClick={clickHandler}>+</Button>
                            </ButtonGroup>
                            <ButtonGroup size="lg" className="me-2">
                                <Button id="one" onClick={clickHandler}>1</Button>
                                <Button id="two" onClick={clickHandler}>2</Button>
                                <Button id="three" onClick={clickHandler}>3</Button>
                                <Button id="percentage" onClick={clickHandler}>%</Button>
                            </ButtonGroup>
                            <ButtonGroup size="lg" className="me-2">
                                <Button id="zero" onClick={clickHandler}>0</Button>
                                <Button id="decimal" onClick={clickHandler}>.</Button>
                                <Button id="equals" onClick={clickHandler}>=</Button>
                            </ButtonGroup>
                        </ButtonGroup>
                    </Card>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Calculator;
