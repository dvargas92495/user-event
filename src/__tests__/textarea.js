import userEvent from '../'
import {setup} from './helpers/utils'

test('textarea selection influences typing', async () => {
    const {element} = setup('<textarea />');
    await userEvent.type(element, "Example Text");
    element.setSelectionRange(0,0);
    await userEvent.type(element, "Prefix: ");
    expect(element.value).toBe("Prefix: Example Text");
});
