---
sidebar_position: 7
---

# Reset Password

### <span style={{color: 'darkorange'}}>POST</span> `/auth/reset_password`

#### Description

Resets the password for an account using the verification code sent by the forget-password flow.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name               | Type     | Required | Description |
| ------------------ | -------- | -------- | ----------- |
| `email`            | `string` | Yes      | Account email. |
| `password`         | `string` | Yes      | New password. |
| `verificationCode` | `string` | Yes      | Six-digit reset code. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/reset_password", {
  email: "johndoe@example.com",
  password: "MyNewPassword1234",
  verificationCode: "123456",
})
```

### Success Response

```json
{
  "message": "Password updated successfully"
}
```

### Notes

- If the code is wrong, the stored reset code is cleared.
- If the code is expired, the stored reset code is also cleared.

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Missing required fields |
| 401  | Invalid verification code |
| 403  | Expired reset code |
| 500  | Server error |

#### Example

```json
{
  "message": "Enter a valid Verification code"
}
```
