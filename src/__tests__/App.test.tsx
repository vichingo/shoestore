import App from '../App';
import { shallow } from 'enzyme';

describe("Testing rendering:", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  
  it('App snapshot', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});


