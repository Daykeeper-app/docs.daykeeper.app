---
sidebar_position: 4
---

# Get Task

### <span style={{color: 'darkgreen'}}>GET</span> `/day/task/:taskId`

#### Description

Returns a single task if the authenticated viewer is allowed to access it.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `taskId` | `string` | Yes | MongoDB task ID. |

## Usage Example

```javascript
await axios.get(
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
  "message": "task fetched successfully",
  "data": {
    "_id": "67d9c2b7cc9e4db02fca1028",
    "title": "Read 20 pages",
    "daily": false
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid task ID |
| 401  | Missing or invalid access token |
| 404  | Task not found or not visible to the viewer |
| 500  | Server error |
