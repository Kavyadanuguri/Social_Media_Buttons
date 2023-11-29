const Button = (props) => {
     const {buttonText, className} = props;
     return <button className = {'${className}'}>{buttonText}</button>;
  //  Write your code here.
};

const element = (
 <div>
    <h1>Social Buttons</h1>
    <div className="container">
        <Button className ="b1" buttonText="Like" />
        <Button className ="b2" buttonText = "Comment"/>
        <Button className = "b3" buttonText = "Share" />
    </div>
  </div>;
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
