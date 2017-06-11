import React from 'react';
import PropTypes from 'prop-types';

const TodoItems = ({items, deleteItem}) =>
  (
    <ul>
      {
        items.map((el, ind) =>
          <li key={ind} onClick={(e) => deleteItem(e, items[ind].id)} >{el.task}</li>
        )
      }
    </ul>
  )

TodoItems.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
}

TodoItems.defaultProps = {
  items: []
}

export default TodoItems;



