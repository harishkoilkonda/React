(function(){
	'use strict';

	var HelloWorld = React.createClass({
            render: function() {
                return <div>
                    <h1>{this.props.text}</h1>
                    <p>{this.props.children}</p>
                </div>
            }
        });
        React.render(<div>
        				<HelloWorld text="Hi">reply Hello</HelloWorld>
        				<HelloWorld text="my Name">say your name</HelloWorld>
        				<HelloWorld text="is Harish">have a good day</HelloWorld>
        			</div>
        					, document.getElementById("maindiv"));  

	//React.render(React.createElement("div",null,"Hello World"),document.body);
	


})();