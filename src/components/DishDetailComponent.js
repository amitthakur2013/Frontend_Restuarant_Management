import React,{ Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


  function render_date(s){
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
  function renderComments(dish_com){
    
      const cmt=dish_com.map((cmnt) =>{
      return(
        <div>
          
          <li key={cmnt.id}>
          <p>{cmnt.comment}</p>
          <p>-- {cmnt.author}, {render_date(cmnt.date.substring(0,10))}</p>
          </li>
          
        </div>
        );

      });
      return(<ul className="list-unstyled">{cmt}</ul>);
  }

  function renderDish(dish) {

        if (dish != null)
          {
            return(
              <div className="container">
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
                  <p>{renderComments(dish.comments)}</p>
                </div>
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
    
    const DishDetail=(props) => {  
      const dish=props.selectedDish;
      return(
        renderDish(dish)
        );
      }
    

 export default DishDetail;
