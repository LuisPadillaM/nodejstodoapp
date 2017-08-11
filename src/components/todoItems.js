import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, List, ListDivider } from 'react-toolbox/lib/list';
import FontIcons from './fontIcons';
import Input from 'react-toolbox/lib/input';
import styles from "./../styles/scss/module.scss";

class TodoItems extends React.Component {

  static propTypes = {
      items: PropTypes.array.isRequired,
      deleteItem: PropTypes.func.isRequired,
      editItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItems: this.props.items.map(() => false),
      editInputs: this.props.items.map((el) => el.task),
    }
    this.showEdit = this.showEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  showEdit(index){

    let {activeItems, editInputs} = this.state;

    if(editInputs[index] !== this.props.items[index].task){

      let oldEditInputs = editInputs.slice(0,index)
            .concat(this.props.items[index].task)
            .concat(editInputs.slice(index+1))

      this.setState({
          ...this.state,
          editInputs: oldEditInputs,
          activeItems:
          activeItems.slice(0,index)
          .concat(!activeItems[index])
          .concat(activeItems.slice(index+1))
        });

    } else{

      this.setState({
        ...this.state,
        activeItems:
          activeItems.slice(0,index)
          .concat(!activeItems[index])
          .concat(activeItems.slice(index+1))
      });

    }
  }
  handleInputChange(index, value){

    this.setState({
      ...this.state,
      editInputs:
        this.state.editInputs.slice(0,index)
        .concat(value)
        .concat(this.state.editInputs.slice(index+1))

    })

  }

  render(){
    const {items, deleteItem, editItem} = this.props;


    return (
        <List selectable ripple>
          {

            items.map((el, ind) => {

              const icons = [{value: "edit"}, {value: "delete"}];
              const editIcons = [{value: "done"}, {value: "clear"}]
              let { activeItems, editInputs} = this.state;
              let className = activeItems[ind] ? styles.mainList : styles.hide;
              icons[0].attr = {"onClick": (e) => this.showEdit(ind) };
              console.log(el);
              editIcons[0].attr = {"onClick": (e) => editItem(el._id, ind, editInputs[ind]) };
              {/*editIcons[0].attr = {"onClick": (e) => editItem(el.id, {"task": editInputs[ind]}, this.showEdit(ind)) };*/}

              {/*editIcons[0].attr = {"onClick": (e) => editItem(el.id, ind, editInputs[ind], this.showEdit(ind)) };*/}
              editIcons[1].attr = {"onClick": (e) => this.showEdit(ind) };
              icons[1].attr = {"onClick": (e) => deleteItem(el._id)};
              {/*icons[1].attr = {"onClick": (e) => deleteItem(el.id)};*/}
              // thing about doing toogle component for edit section

              return (
                <span key={ind}>
                  <ListItem legend={el.updated_at} caption={el.task} rightIcon={<FontIcons icons={icons}  />} />
                    <div className={className} >
                      <div className={styles.editInput}>
                        <Input type="text" label="Edit" value={editInputs[ind]} onChange={this.handleInputChange.bind(this, ind)} />
                      </div>
                      <div className={styles.icons}>
                        <FontIcons icons={editIcons}  className="icons"/>
                      </div>
                    </div>
                  <ListDivider />
                </span>
              )
            }
          )
          }
        </List>
    )
  }
}

export default TodoItems;
