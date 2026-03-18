---
sidebar_position: 5
---

# Refresh Tokens

### <span style={{color: 'darkorange'}}>POST</span> `/auth/refresh`

#### Description

Rotates a refresh token and returns a new access token plus a new refresh token. The old refresh token is revoked.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name           | Type     | Required | Description |
| -------------- | -------- | -------- | ----------- |
| `refreshToken` | `string` | Yes      | Current refresh token. |
| `deviceId`     | `string` | No       | Optional device identifier for the rotated token. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/refresh", {
  refreshToken,
  deviceId: "web-chrome",
})
```

### Success Response

```json
{
  "message": "New tokens generated successfully",
  "accessToken": "<jwt>",
  "refreshToken": "<new_refresh_token>"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Refresh token missing |
| 401  | Invalid, revoked, or expired refresh token |
| 429  | Rate-limited |
| 500  | Server error |
