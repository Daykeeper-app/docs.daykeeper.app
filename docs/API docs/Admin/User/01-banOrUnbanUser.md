---
sidebar_position: 1
---

# Ban Or Unban User

### <span style={{color: 'darkorange'}}>POST</span> `/admin/:username`

#### Description

Toggles a user's banned status.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Username of the target user. |

#### BODY

| Name      | Type     | Required | Description |
| --------- | -------- | -------- | ----------- |
| `message` | `string` | No       | Ban or unban reason. |

### Success Response

```json
{
  "message": "johndoe banned successfully"
}
```

or

```json
{
  "message": "johndoe unbanned successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | User is not an admin |
| 403  | Unauthorized action |
| 404  | User not found |
| 413  | Reason too long |
| 500  | Server error |
