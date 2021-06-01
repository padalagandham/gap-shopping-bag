import { shallow } from '../../enzyme';

import { Header } from '../Header';


describe('Header tests', () => {
    it('Should show bag items count', () => {
        const itemsCount = "3";
        const wrapper = shallow(<Header itemsCount={itemsCount} />);
        expect(wrapper.find('.bag-count')).toBeDefined();
        expect(wrapper.find('.bag-count').text()).toEqual("3");
    });
});
