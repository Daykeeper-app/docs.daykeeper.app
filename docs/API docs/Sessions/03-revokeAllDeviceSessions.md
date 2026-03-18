---
sidebar_position: 3
---

# Revoke All Device Sessions

### <span style={{color: 'darkred'}}>DELETE</span> `/sessions`

#### Description

Revokes all non-revoked refresh-token sessions for the authenticated user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

```javascript
await axios.delete("https://api.daykeeper.app/sessions", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "sessions updated successfully",
  "matched": 3,
  "modified": 3
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 500  | Server error |
