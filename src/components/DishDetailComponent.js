import React,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

 class DishDetail extends Component{
  constructor(props){
    super(props);
  }
  render_date(s){
    var a=s.substring(5,7);
    var b="";
    if(a=="01")
    {b="Jan";}
    if(a=="02")
    {b="Feb";}
    if(a=="03")
    {b="Mar";}
    if(a=="04")
    {b="Apr";}
    if(a=="05")
    {b="May";}
    if(a=="06")
    {b="Jun";}
    if(a=="07")
    {b="Jul";}
    if(a=="08")
    {b="Aug";}
    if(a=="09")
    {b="Sep";}
    if(a=="10")
    {b="Oct";}
    if(a=="11")
    {b="Nov";}
    if(a=="12")
    {b="Dec";}
    b=b+", "+s.substring(8,10)+", "+s.substring(0,4);
    return b;

  }
  renderComments(dish_com){
    
      const cmt=dish_com.map((cmnt) =>{
      return(
        <div>
          
          <li key={cmnt.id}>
          <p>{cmnt.comment}</p>
          <p>-- {cmnt.author}, {this.render_date(cmnt.date.substring(0,10))}</p>
          </li>
          
        </div>
        );

      });
      return(<ul className="list-unstyled">{cmt}</ul>);
  }

  renderDish(dish) {

        if (dish != null)
          {
            return(
              <div className="row">
              <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  <p>{this.renderComments(dish.comments)}</p>
                </div>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }
    render(){
      const dish=this.props.selectedDish;
      return(
        this.renderDish(dish)
        );
    }


 }



 export default DishDetail;
