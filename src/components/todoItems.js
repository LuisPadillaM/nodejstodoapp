import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListSubHeader, ListDivider } from 'react-toolbox/lib/list';
import FontIcon from 'react-toolbox/lib/font_icon';

const FontIcons = ({onDelete}) => (
  <span>
    <FontIcon value='edit' />
    <FontIcon value='delete' onClick={onDelete}  />
  </span>
);

const TodoItems = ({items = [], deleteItem}) =>
    (
      <List selectable ripple>
        {
          items.map((el, ind) =>
          <span key={el._id}>
            <ListItem caption={el.task} rightIcon={<FontIcons  onDelete={(e) => deleteItem(e, el._id)} />}>
            </ListItem>
            <ListDivider />
          </span>
        )
        }
      </List>
    )

TodoItems.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
}

// TodoItems.defaultProps = {
//   items: []
// }

export default TodoItems;





{/*<ul>
  {
    items.map((el, ind) =>
      <li key={ind} onClick={(e) => deleteItem(e, el._id)} >{el.task}</li>
    )
  }
</ul>*/}
