export const schema = {
  "type": "object",
  "properties": {
    "todolist": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "integer",
            "minimum": 1
          },
          "task": {
            "type": "string",
            "faker": "random.words"
          },
          "time": {
            "type": "string",
            "faker": "faker.date.recent"
          },
        },
        "required": ["id", "task"]
      }
    },
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["todolist"]
}
