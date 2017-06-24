jest.mock('./request');

import * as TodoAPI from './todoApiMongoose';

describe('#getTodo() using Promises', () => {
  it('should load todoList data', () => {
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
})
