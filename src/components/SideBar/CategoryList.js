import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {
    
    render() {
        
        return (
            <div className="aside">
                 <h3 className="aside-title">Category</h3>
                {
                    this.props.categories ? 
                    this.props.categories.map(category => (
                        <Category
                            key={category.id}
                            category={category}
                            getCategoryCheckBox = {this.props.getCategoryCheckBox}
                        />
                    ))
                    :
                    <div>No item</div>
                }
            </div>
        );
    }
}

export default CategoryList;