---
sidebar_position: 2
---

# Get New Content Analytics

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/about/content`

#### Description

Returns content-creation analytics for the recent time window requested.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `days` | `number` | No | Number of days to include. The service normalizes invalid values and caps the range internally. |

### Success Response

```json
{
  "message": "New content analytics fetched successfully",
  "range": {
    "days": 30,
    "bucket": "day",
    "timezone": "UTC"
  },
  "totals": {
    "posts": 40,
    "comments": 75,
    "events": 6,
    "tasks": 18
  },
  "series": []
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 500  | Server error |
