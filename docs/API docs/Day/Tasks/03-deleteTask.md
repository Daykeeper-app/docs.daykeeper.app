---
sidebar_position: 3
---

# Delete Task

### <span style={{color: 'darkred'}}>DELETE</span> `/day/task/:taskId`

#### Description

Soft-deletes a task by ID.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `taskId` | `string` | Yes | MongoDB task ID. |

## Usage Example

```javascript
await axios.delete(
  "https://api.daykeeper.app/day/task/67d9c2b7cc9e4db02fca1028",
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

### Success Response

```json
{
  "message": "Day Task deleted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid task ID |
| 401  | Missing or invalid access token |
| 404  | Task not found |
| 500  | Server error |
