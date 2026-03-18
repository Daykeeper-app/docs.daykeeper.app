---
sidebar_position: 1
---

# Create Task

### <span style={{color: 'darkorange'}}>POST</span> `/day/task`

#### Description

Creates either a dated task or a daily task template for the authenticated user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### BODY

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `title` | `string` | Yes | Task title. |
| `date` | `string` | No | Required for normal tasks. Use an ISO string. Do not send it when `daily` is `true`. |
| `completed` | `boolean` | No | Initial completion state for normal tasks. Defaults to `false`. |
| `privacy` | `string` | No | `public`, `private`, or `close friends`. |
| `daily` | `boolean` | No | Set to `true` to create a reusable daily task template. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/day/task",
  {
    title: "Read 20 pages",
    date: "2026-03-18T12:00:00.000Z",
    privacy: "private"
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
  "message": "Day Task created successfully",
  "task": {
    "_id": "67d9c2b7cc9e4db02fca1028",
    "title": "Read 20 pages",
    "daily": false,
    "completed": false
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Missing or invalid fields |
| 401  | Missing or invalid access token |
| 413  | Title too long |
| 500  | Server error |
