---
sidebar_position: 16
---

# Get User Calendar

### <span style={{color: 'darkgreen'}}>GET</span> `/:username/calendar`

#### Description

Returns a contribution-style calendar summary for a user's posts, tasks, and events over a date range.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Target username. |

#### QUERY PARAMS

| Name        | Type     | Required | Description |
| ----------- | -------- | -------- | ----------- |
| `days`      | `number` | No       | Rolling range. Defaults to `365`, minimum `7`, maximum `3650`. |
| `startDate` | `string` | No       | Custom range start date in a format accepted by `Date`. |
| `endDate`   | `string` | No       | Range end date in a format accepted by `Date`. Defaults to now. |
| `scope`     | `string` | No       | Use `all` to return from account creation through the end date. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/johndoe/calendar?days=90", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "calendar fetched successfully",
  "data": {
    "userId": "65cbaab84b9d1cce41e98b60",
    "username": "johndoe",
    "timeZone": "America/New_York",
    "days": 90,
    "from": "2026-01-01",
    "to": "2026-03-31",
    "range": {
      "scope": "rolling",
      "startDate": "2026-01-01",
      "endDate": "2026-03-31"
    },
    "totalCount": 12,
    "maxCount": 3,
    "points": [
      {
        "date": "2026-01-01",
        "count": 1,
        "postsCount": 1,
        "tasksCount": 0,
        "eventsCount": 0,
        "level": 2
      }
    ]
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | One of the users is blocked |
| 404  | User not found |
| 409  | Private account route not accessible to the viewer |
| 401  | Invalid `startDate` or `endDate` value handling may return invalid-value style errors |
| 500  | Server error |
