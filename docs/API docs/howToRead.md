---
sidebar_position: 1
---

# How to Read

The DayKeeper API docs use the same structure on most endpoint pages so you can scan them quickly.

## Page structure

Each endpoint page usually contains:

1. The HTTP method and route.
2. A short description of what the endpoint does.
3. Authentication requirements.
4. Path, query, or body parameters.
5. A request example.
6. A success response example.
7. Common error responses.

## Example format

# Title

### METHOD `/endpoint`

#### Description

Short explanation of the endpoint behavior.

### Request Parameters

#### Requires Authentication: `true` or `false`

#### BODY

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `name`     | `string` | Yes      | Example field |
| `email`    | `string` | Yes      | Example field |
| `password` | `string` | Yes      | Example field |

#### QUERY PARAMS

| Name   | Type     | Required | Description |
| ------ | -------- | -------- | ----------- |
| `page` | `number` | No       | Example field |
| `q`    | `string` | No       | Example field |

## Authentication

Most protected endpoints expect a bearer token:

```http
Authorization: Bearer <access_token>
```

If the token is missing, invalid, or expired, the API usually returns `401`.

## Request examples

Examples use `axios`, but any HTTP client works.

```javascript
await axios.post(
  "https://api.daykeeper.app/endpoint",
  { name: "John", email: "john@example.com", password: "secret123" },
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

## Response examples

Examples are representative. Real payloads may include more fields depending on the endpoint and the current API version.

### Success response

```json
{
  "message": "Operation completed successfully"
}
```

### Error response

```json
{
  "message": "Invalid or expired access token"
}
```

## Notes

- Pagination responses usually include `page`, `pageSize`, `maxPageSize`, `totalPages`, and `totalCount`.
- Dates in the existing API are commonly represented as `DD-MM-YYYY` in route params and as ISO timestamps in response payloads.
- Some older docs may still use legacy examples. Prefer the parameter tables and endpoint descriptions when something looks inconsistent.
