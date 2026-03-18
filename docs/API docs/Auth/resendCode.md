---
sidebar_position: 8
---

# Resend Code

### <span style={{color: 'darkorange'}}>POST</span> `/auth/resend_code`

#### Description

Resends either an email verification code or a password reset code, depending on the `type` field.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name    | Type     | Required | Description |
| ------- | -------- | -------- | ----------- |
| `email` | `string` | Yes      | Target account email. |
| `type`  | `string` | No       | `verify` or `reset`. Default behavior is verification flow. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/resend_code", {
  email: "johndoe@example.com",
  type: "verify",
})
```

### Success Response

```json
{
  "message": "Verification code resent to johndoe@example.com"
}
```

For password resets:

```json
{
  "message": "Password reset code sent to johndoe@example.com"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Email missing |
| 403  | Invalid `type` |
| 404  | User not found |
| 500  | Server error |
