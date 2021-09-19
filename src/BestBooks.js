import axios from 'axios';
import React, { Component } from 'react';
import {
    Carousel,
  
} from 'react-bootstrap';

class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: [],
        }
    }
    componentDidMount = () => {
        axios.get(`http://localhost:3001/controller`).then(Response => {
            this.setState({
              book: Response.data.books,
            })
        })

    }
    render() {
        return (
            <div>
                {this.state.book.length > 0 && <Carousel indicators={false} className="Carousel" >
                    {
                        this.state.book.map((Element, i) => {
                            return <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://colorcasters.com/wp-content/uploads/2014/05/Black-300x300.jpeg"
                                    alt="First slide"
                                />
                                <Carousel.Caption className="color">
                                    <h3 className="ele">Book Title :{Element.title}</h3>
                                    <p className="ele">Description :{Element.description}</p>
                                    <p className="ele">Status :{Element.status}</p>
                                    <p className="ele">E-mail :{Element.email}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })}

                </Carousel>
                }
                {
                    this.state.book.length ===0 && <h3>The book collection is empty.</h3>
                }
            </div>
        )
    }
}
export default BestBooks;
