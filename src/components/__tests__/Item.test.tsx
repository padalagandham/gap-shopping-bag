import { shallow } from '../../enzyme';
import { Item } from '../Item';

describe('Item tests', () => {

    it('Should render item with delete CTA', () => {
        const wrapper = shallow(<Item itemName={"Test item name"} id={1} count={2} inBag={true} actions={<div><button className="delete">Delete</button></div>} />);
        expect(wrapper.find('.item-name').text()).toEqual("Test item name");
        expect(wrapper.find('.delete').text()).toEqual("Delete");
        expect(wrapper.find('.input-group').length).toEqual(1);
        expect(wrapper.find('.input-group input').length).toEqual(3);
    });

    it('Should add item on add', () => {
        const updateItemCount = jest.fn();
        const wrapper = shallow(<Item itemName={"Test item name"} id={1} updateItemCount={updateItemCount} count={2} inBag={true}  actions={<div><button className="delete">Delete</button></div>} />);
        wrapper.find(".button-plus").simulate('click');
        expect(updateItemCount).toHaveBeenCalledWith("ADD", 1);
    });

    it('Should add item on REMOVE', () => {
        const updateItemCount = jest.fn();
        const wrapper = shallow(<Item itemName={"Test item name"} id={1} updateItemCount={updateItemCount} count={2} inBag={true}  actions={<div><button className="delete">Delete</button></div>} />);
        wrapper.find(".button-minus").simulate('click');
        expect(updateItemCount).toHaveBeenCalledWith("REMOVE", 1);
    });

});
