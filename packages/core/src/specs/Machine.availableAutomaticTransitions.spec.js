import assert from 'assert';
import Machine from '../Machine';

// maybe it worth to write integration test
describe('machine: availableAutomaticTransitions', () => {
  it('arguments are correctly pased to machineDefinition.findAvailableTransitions', () => {
    // create object
    const object = {
      status: 'none'
    };

    // context
    const context = {
      sendEmail: () => {}
    };

    const createMachine = ({ context = {} }) => {
      return new Machine(
        {
          machineDefinition: {
            schema: {},
            findAvailableTransitions: (passsedArgument) => {
              assert(passsedArgument)
              assert.equal(passsedArgument.object, object);
              assert.equal(passsedArgument.context, context);
              assert.equal(passsedArgument.isAutomatic, true);
            },
            objectConfiguration: {
              stateFieldName: 'status'
            }
          },
          context: context
        }
      );
    }

    const machine = createMachine({ context });

    return machine.availableAutomaticTransitions({ object });
  });
});
