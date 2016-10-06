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
        				<HelloWorld text="this is a text">This is inside a para</HelloWorld>
        			</div>
        					, document.getElementById("maindiv")); 

})();