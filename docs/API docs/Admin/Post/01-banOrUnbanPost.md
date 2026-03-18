---
sidebar_position: 1
---

# Ban Or Unban Post

### <span style={{color: 'darkorange'}}>POST</span> `/admin/post/:postId`

#### Description

Toggles a post's banned status.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### Requires Admin Role: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `postId` | `string` | Yes      | MongoDB post ID. |

#### BODY

| Name     | Type     | Required | Description |
| -------- | -------- | -------- | ----------- |
| `reason` | `string` | No       | Ban or unban reason. |

### Success Response

```json
{
  "message": "johndoe's post from 2026-03-18T00:00:00.000Z banned successfully"
}
```

or

```json
{
  "message": "johndoe's post from 2026-03-18T00:00:00.000Z unbanned successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | User is not an admin |
| 404  | Post not found |
| 413  | Reason too long |
| 500  | Server error |
