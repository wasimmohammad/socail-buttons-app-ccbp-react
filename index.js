const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={className}> {buttonText} </button>;
};

const element = (
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="button like-button" />
        <Button buttonText="Comment" className="comment-button button" />
        <Button buttonText="Share" className="share-button button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
