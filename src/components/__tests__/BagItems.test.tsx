import { shallow } from '../../enzyme';

import { BagItems } from '../BagItems';
import { Item } from '../Item';

const itemArr = [{
    itemName: "test item 1",
    id: 1,
    inBag: true
},
{
    itemName: "test item 2",
    id: 1,
    inBag: true
}]
describe('Bag Items tests', () => {

    it('should render bag Items', () => {
        const wrapper = shallow(<BagItems items={itemArr}/>);
        expect(wrapper.find('.bag-section h3').text()).toEqual("Active items");
        const item = wrapper.find(Item)
        expect(item.length).toEqual(2);
        expect(item.at(1).prop('itemName')).toEqual("test item 2");
        expect(item.at(1).prop('inBag')).toBeTruthy();
        expect(item.at(1).prop('actions')).toEqual(<div><button className="delete">Delete</button><button className="save-for-later">Save for later</button></div>);
    });

});
