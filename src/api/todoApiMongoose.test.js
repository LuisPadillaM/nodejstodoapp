jest.mock('./request');

import * as TodoAPI from './todoApiMongoose';

describe('Todo API calls using mongoose', () => {
  it('#getTodo should load todoList data', () => {
    expect.assertions(1);

    const expected = [
      {
        "id": 23869840,
        "task": "su"
      },
      {
        "id": 51416500,
        "task": "magna dolor"
      },
      {
        "id": 65647855,
        "task": "exercitation"
      }
    ];

    return expect(TodoAPI.getTodo()).resolves.toEqual(expected);
  })

  it('#getById() should load todoItem data', () => {

    expect.assertions(1);

    const expected = [
      {
        "id": 23869840,
        "task": "su"
      },
      {
        "id": 51416500,
        "task": "magna dolor"
      },
      {
        "id": 65647855,
        "task": "exercitation"
      }
    ];

    return expect(TodoAPI.getById(23869840)).resolves.toEqual(expected[0]);
  });

  test('deleteItem() should delete one todoItem data by ID', () => {

    expect.assertions(1);

    const expected = [
      {
        "id": 23869840,
        "task": "su"
      },
      {
        "id": 51416500,
        "task": "magna dolor"
      },
      {
        "id": 65647855,
        "task": "exercitation"
      }
    ];

    return expect(TodoAPI.getById(23869840)).resolves.toEqual(expected[0]);
  });
})

