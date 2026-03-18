---
sidebar_position: 3
---

# Get New Interactions Analytics

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/about/interactions`

#### Description

Returns analytics about recent interaction activity.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### QUERY PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `days` | `number` | No | Number of days to include. The service normalizes invalid values and caps the range internally. |

### Success Response

```json
{
  "message": "New interactions analytics fetched successfully",
  "range": {
    "days": 30,
    "bucket": "day",
    "timezone": "UTC"
  },
  "totals": {
    "likes": 95,
    "follows": 11,
    "reports": 2
  },
  "series": []
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 500  | Server error |
