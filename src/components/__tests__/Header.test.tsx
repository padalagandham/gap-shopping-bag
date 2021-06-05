import { shallow } from '../../enzyme';

import { Header } from '../Header';

const itemsCount = "3";

describe('Header tests', () => {
    it('Should show header', () => {
        const wrapper = shallow(<Header itemsCount={itemsCount} />);
        expect(wrapper.find('.header-section h4').text()).toEqual("Gap Shopping bag");
    });

    it('Should show bag items count', () => {
        
        const wrapper = shallow(<Header itemsCount={itemsCount} />);
        expect(wrapper.find('.bag-count')).toBeDefined();
        expect(wrapper.find('.bag-count').text()).toEqual("3 Items");
    });
});
