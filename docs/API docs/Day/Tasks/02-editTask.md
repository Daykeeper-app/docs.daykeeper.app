---
sidebar_position: 2
---

# Edit Task

### <span style={{color: 'goldenrod'}}>PUT</span> `/day/task/:taskId`

#### Description

Updates a task owned by the authenticated user.

Daily task templates cannot be given a date and cannot be marked as completed.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `taskId` | `string` | Yes | MongoDB task ID. |

#### BODY

At least one field must be provided.

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `title` | `string` | No | New title. |
| `date` | `string` | No | New ISO date for normal tasks only. |
| `privacy` | `string` | No | `public`, `private`, or `close friends`. |
| `completed` | `boolean` | No | Completion status for normal tasks only. |

## Usage Example

```javascript
await axios.put(
  "https://api.daykeeper.app/day/task/67d9c2b7cc9e4db02fca1028",
  {
    completed: true
  },
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
  "message": "Task updated successfully",
  "task": {
    "_id": "67d9c2b7cc9e4db02fca1028",
    "completed": true
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid task ID or invalid update data |
| 401  | Missing or invalid access token |
| 404  | Task not found |
| 500  | Server error |
