import userEvent from '../'
import {setup} from './helpers/utils'

test('textarea selection influences typing', () => {
    const {element} = setup('<textarea />');
    userEvent.type(element, "Example Text");
    element.setSelectionRange(0,0);
    userEvent.type(element, "Prefix: ");
    expect(element.value).toBe("Prefix: Example Text");
});
