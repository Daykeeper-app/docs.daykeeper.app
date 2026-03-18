---
sidebar_position: 6
---

# Get Daily Tasks

### <span style={{color: 'darkgreen'}}>GET</span> `/day/dailyTasks`

### <span style={{color: 'darkgreen'}}>GET</span> `/day/:username/dailyTasks`

#### Description

Returns paginated daily task templates.

- `/day/dailyTasks` returns the authenticated user's own daily tasks.
- `/day/:username/dailyTasks` returns daily tasks for a public, verified user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

Only used by `/day/:username/dailyTasks`.

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `username` | `string` | Yes | Target username. |

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `page` | `number` | No | Page number. Defaults to `1`. |
| `maxPageSize` | `number` | No | Page size. The API caps it at the shared max page size. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/day/dailyTasks?page=1", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "code": 200,
  "message": "Daily Tasks fetched successfully",
  "data": [
    {
      "_id": "67d9c359cc9e4db02fca1045",
      "title": "Drink water",
      "daily": true
    }
  ],
  "page": 1,
  "pages": 1
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | User not found when requesting another user's list |
| 500  | Server error |
