import { shallow } from '../../enzyme';

import { BagItems } from '../BagItems';
import { ButtonCTA } from '../ButtonCTA';
import { Item } from '../Item';

const itemArr = [{
    itemName: "test item 1",
    id: 1,
    count: 1,
    inBag: true
},
{
    itemName: "test item 2",
    id: 2,
    count: 2,
    inBag: true
}]
describe('Bag Items tests', () => {

    it('should render bag Items', () => {
        const del = jest.fn();
        const wrapper = shallow(<BagItems items={itemArr} updateItemCount={del} deleteItem={del} addToList={del}/>);
        expect(wrapper.find('.bag-section h3').text()).toEqual("Active items");
        const item = wrapper.find(Item)
        expect(item.length).toEqual(2);
        expect(item.at(1).prop('itemName')).toEqual("test item 2");
        expect(item.at(1).prop('inBag')).toBeTruthy();
        expect(item.at(1).prop('actions')).toEqual(<div><ButtonCTA callback={del} className="delete" text="Delete" itemId={2} /><ButtonCTA className="save-for-later" callback={del} itemId={2} text="Save for later" /></div>);
    });

});
