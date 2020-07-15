import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    const required=(val) => val && val.length;
    const minLength=(len) => (val) => val && (val.length >= len);
    const maxLength=(len) => (val) => !(val) || (val.length <= len);

    class CommentForm extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isModalOpen: false
            };

            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }

       handleSubmit(values){
          console.log("Current state is "+JSON.stringify(values));
          alert("Current state is "+JSON.stringify(values));
          this.setState({
            isModalOpen:false
          });
       }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

        render() {
            return (
                <div>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil"></span> Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                      <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                      </ModalHeader>
                      <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                          <Row className="form-group">
                          <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" name="rating" id="rating" className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </Control.select>
                          </Col>


                          </Row>
                          <Row className="form-group">
                            <Col>
                              <Label htmlFor="yourname">Your Name</Label>
                              <Control.text model=".yourname" 
                              name="yourname" 
                              id="yourname" 
                              className="form-control"
                              validators={{
                                required,minLength:minLength(2),maxLength:maxLength(15)
                              }}
                              >

                              </Control.text>
                            </Col>

                          </Row>
                          <Errors
                              className="text-danger"
                              model=".yourname"
                              show="touched"
                              messages={{
                                required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less'
                              
                              }}
                            />
                            <Row className="form-group">
                              <Col>
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea className="form-control" rows="6" model=".comment" id="comment" name="comment">
                                </Control.textarea>
                              </Col>
                            </Row>
                            <Row className="form-group">
                              <Col>
                                <Button type="submit" color="primary">
                                           Submit
                                        </Button>
                              </Col>
                            </Row>
                        </LocalForm>
                      </ModalBody>
                    </Modal>
                </div>
            )
        }
    }

    function RenderDate(data) {
        let date = new Date(Date.parse(data));
        return (
            new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(date)
        )
    }

    function RenderDish(dish) {
        if( dish != null ) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    function RenderComments({comments}) {
        if( comments != null ) {
            return(
                <div>
                    <ul className="list-unstyled">
                        {comments.map((cmt) => {
                        return(
                            <li key={cmt.id}>
                                <p>{cmt.comment}</p>
                                <p>-- {cmt.author}, {RenderDate(cmt.date)}</p>
                            </li>
                        )
                        })}
                    </ul>
                    <CommentForm/>
                </div>
            )
        }
        else {
            return(
                <p>
                </p>
            )
        }
    }

    const DishdetailComponent = (props) => {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {RenderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }

export default DishdetailComponent;