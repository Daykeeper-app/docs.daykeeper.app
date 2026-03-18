---
sidebar_position: 2
---

# Revoke Device Session

### <span style={{color: 'darkred'}}>DELETE</span> `/sessions/:id`

#### Description

Revokes a single refresh-token session owned by the authenticated user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `id` | `string` | Yes | Refresh-token session ID. |

## Usage Example

```javascript
await axios.delete(
  "https://api.daykeeper.app/sessions/67d9d1f6cc9e4db02fca2001",
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
  "message": "session updated successfully",
  "id": "67d9d1f6cc9e4db02fca2001"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Missing session ID |
| 401  | Missing or invalid access token |
| 404  | Session not found |
| 500  | Server error |
