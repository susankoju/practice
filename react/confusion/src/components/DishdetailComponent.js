import React from 'react';

class DishDetail extends React.Component {

    constructor(props){
	super(props);
	this.state = {
	    selectedDish: props.selectedDish
	}
    }
    
    render() {
	return (
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
            </div>
	)
    }
}

export default DishDetail;

