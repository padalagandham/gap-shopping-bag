import React from 'react';
import { shallow, mount } from '../../enzyme';

import { BagItems } from '../BagItems';
import { DeleteCTA } from '../deleteCTA';
import { Item } from '../Item';

const itemArr = [{
    itemName: "test item 1",
    id: 1,
    inBag: true
},
{
    itemName: "test item 2",
    id: 2,
    inBag: true
}]
describe('Bag Items tests', () => {

    it('should render bag Items', () => {
        const del = jest.fn();
        const wrapper = shallow(<BagItems items={itemArr} deleteItem={del}/>);
        expect(wrapper.find('.bag-section h3').text()).toEqual("Active items");
        const item = wrapper.find(Item)
        expect(item.length).toEqual(2);
        expect(item.at(1).prop('itemName')).toEqual("test item 2");
        expect(item.at(1).prop('inBag')).toBeTruthy();
        expect(item.at(1).prop('actions')).toEqual(<div><DeleteCTA deleteItem={del} itemId={2} /><button className="save-for-later">Save for later</button></div>);
    });

});
