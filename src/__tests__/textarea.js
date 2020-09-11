import userEvent from '../'
import {setup} from './helpers/utils'

test('textarea selection influences typing', async () => {
    const {element} = setup('<textarea />');
    await userEvent.type(element, "Example Text");
    await userEvent.type(element, "Prefix: ", {initialSelectionStart: 0, initialSelectionEnd: 0});
    expect(element.value).toBe("Prefix: Example Text");
});
