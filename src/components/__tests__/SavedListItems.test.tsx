import { shallow } from '../../enzyme';
import { SavedListItems } from '../SavedListItems';
import { Item } from '../Item';

const itemArr = [{
    itemName: "test item 1",
    id: 1,
    inBag: false
},
{
    itemName: "test item 2",
    id: 2,
    inBag: false
}]
describe('Saved Items tests', () => {

    it('should render Saved Items', () => {
        const del = jest.fn();
        const onClick = () => { return }
        const wrapper = shallow(<SavedListItems items={itemArr} deleteItem={del} addToBag={onClick}/>);
        expect(wrapper.find('.save-section h3').text()).toEqual("Save for later items");
        const item = wrapper.find(Item)
        expect(item.length).toEqual(2);
        expect(item.at(1).prop('itemName')).toEqual("test item 2");
        expect(item.at(1).prop('inBag')).toBeFalsy();
        //expect(item.at(1).prop('actions')).toEqual(<div><ButtonCTA callback={del} className="delete" itemId={2} text="Delete" /><ButtonCTA callback={del} className="move-to-active" itemId={2} text="Move to Active" /></div>);
    });

});
