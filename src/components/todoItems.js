import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';
import FontIcons from './fontIcons';

const TodoItems = ({items = [], deleteItem}) => {

  const icons = [{value: "edit"}, {value: "delete"}]

  return (
      <List selectable ripple>
        {
          items.map((el, ind) => {

            icons[1].attr = {"onClick": (e) => deleteItem(e, el.id)};

            return (
              <span key={ind}>
                <ListItem caption={el.task}
                rightIcon={<FontIcons icons={icons} />}>
                </ListItem>
                <ListDivider />
              </span>
            )
          }
        )
        }
      </List>
    )
}

TodoItems.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default TodoItems;
