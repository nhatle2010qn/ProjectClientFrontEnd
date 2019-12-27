import React, { Component } from 'react';

class Category extends Component {
    onCheckBox = (e) => {
        let isChecked = e.target.checked;
        let id = e.target.name;       
        this.props.getCategoryCheckBox(id, isChecked);
    }
    render() {
        const { category } = this.props;
        return (
            <div>
                <input type="checkbox" id={"category-"+category.id} onChange={this.onCheckBox} name={category.id} value={category.id}/>
                <label htmlFor={"category-"+category.id}>
                    <span></span>
                    {category.name}     
                    
                </label>
            </div>

        );
    }
}

export default Category;