import { shallow } from '../../enzyme';

import { DeleteCTA } from '../deleteCTA';

const itemsCount = "3";

describe('Item tests', () => {

    it('Should render item with delete CTA', () => {

        const del = jest.fn();
        const wrapper = shallow(<DeleteCTA deleteItem={del} itemId={1}/>);
        wrapper.find('.delete').simulate('click')
        expect(del).toHaveBeenCalled()
       
    });

});
