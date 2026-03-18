---
sidebar_position: 4
---

# Get Server Status

### <span style={{color: 'darkgreen'}}>GET</span> `/admin/about/server-status`

#### Description

Returns the current backend health summary exposed by the analytics controller.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

### Success Response

```json
{
  "message": "Server status fetched successfully",
  "status": "ok",
  "uptime": 86400
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 500  | Server error |
