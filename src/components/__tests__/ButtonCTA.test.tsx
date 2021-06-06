import { shallow } from '../../enzyme';

import { ButtonCTA } from '../ButtonCTA';


describe('Button CTA tests', () => {

    it('Should render item with delete CTA', () => {
        const del = jest.fn();
        const wrapper = shallow(<ButtonCTA callback={del} className="delete" text="delete" itemId={1}/>);
        wrapper.find('.delete').simulate('click')
        expect(del).toHaveBeenCalled()
    });

});
