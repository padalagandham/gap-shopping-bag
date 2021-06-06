import { shallow } from '../../enzyme';
import { Item } from '../Item';

describe('Item tests', () => {

    it('Should render item with delete CTA', () => {
        const wrapper = shallow(<Item itemName={"Test item name"} id={1} inBag={true} actions={<div><button className="delete">Delete</button></div>} />);
        expect(wrapper.find('.item-name').text()).toEqual("Test item name");
        expect(wrapper.find('.delete').text()).toEqual("Delete");
        expect(wrapper.find('.input-group').length).toEqual(1);
        expect(wrapper.find('.input-group input').length).toEqual(3);
    });

});
