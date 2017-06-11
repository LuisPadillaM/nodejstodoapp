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
          "id": {
            "type": "integer",
            "minimum": 1
          },
          "task": {
            "type": "string",
            "faker": "random.words"
          },
        },
        "required": ["id", "task"]
      }
    }
  },
  "required": ["todolist"]
}
