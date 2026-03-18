---
sidebar_position: 6
---

# Forget Password

### <span style={{color: 'darkorange'}}>POST</span> `/auth/forget_password`

#### Description

Requests a password reset code by email. This endpoint intentionally returns the same success message whether the account exists or not.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name    | Type     | Required | Description |
| ------- | -------- | -------- | ----------- |
| `email` | `string` | Yes      | Account email. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/forget_password", {
  email: "johndoe@example.com",
})
```

### Success Response

```json
{
  "message": "If an account with that email exists, a password reset email has been sent."
}
```

### Notes

- The API does not reveal whether the email exists.
- Only verified accounts receive reset codes.

### Error Response

| Code | Description |
| ---- | ----------- |
| 200  | Generic success response, even when the account does not exist |
| 500  | Server error |
