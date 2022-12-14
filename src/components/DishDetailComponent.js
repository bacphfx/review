import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

const RenderDish = function ({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const RenderComments = function ({ comments }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function DishDetail(props) {
  console.log(props.dish);
  if (props.dish != null) {
    return (
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.dish.comments} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DishDetail;
