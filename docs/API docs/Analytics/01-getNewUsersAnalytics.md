---
sidebar_position: 1
---

# Get New Users Analytics

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/about/users`

#### Description

Returns daily user-creation analytics for a recent time window.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `days` | `number` | No | Number of days to include. The service normalizes invalid values and caps the range internally. |

### Success Response

```json
{
  "message": "New users analytics fetched successfully",
  "range": {
    "days": 30,
    "bucket": "day",
    "timezone": "UTC"
  },
  "totals": {
    "users": 12
  },
  "series": []
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 500  | Server error |
