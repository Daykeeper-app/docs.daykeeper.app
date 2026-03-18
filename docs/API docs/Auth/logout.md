---
sidebar_position: 11
---

# Logout

### <span style={{color: 'darkorange'}}>POST</span> `/auth/logout`

#### Description

Revokes the provided refresh token. This ends the refresh flow for that device/session.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name           | Type     | Required | Description |
| -------------- | -------- | -------- | ----------- |
| `refreshToken` | `string` | Yes      | Refresh token to revoke. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/logout", {
  refreshToken,
})
```

### Success Response

```json
{
  "message": "Logged Out"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Refresh token missing |
| 500  | Server error |
