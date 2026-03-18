---
sidebar_position: 10
---

# Request Delete Account Code

### <span style={{color: 'darkorange'}}>POST</span> `/auth/request_delete_code`

#### Description

Sends a six-digit email code used by the account deletion flow.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

Send a valid bearer token in the `Authorization` header.

No request body is required.

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/auth/request_delete_code",
  {},
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
  "message": "Delete account code sent to johndoe@example.com"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 403  | Unauthorized or account has no email |
| 404  | User not found |
| 500  | Server error |
