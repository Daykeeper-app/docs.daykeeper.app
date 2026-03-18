---
sidebar_position: 1
---

# Rekognition Webhook

### <span style={{color: 'darkorange'}}>POST</span> `/webhooks/rekognition`

#### Description

Receives AWS SNS messages for media moderation jobs.

This endpoint expects a raw text body and uses the `x-amz-sns-message-type` header to handle subscription confirmations and moderation result notifications.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### HEADERS

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `x-amz-sns-message-type` | `string` | Yes | SNS message type such as `SubscriptionConfirmation` or `Notification`. |

#### BODY

The request body is plain text containing a JSON-encoded SNS payload.

### Success Response

```text
SNS confirmed
```

or

```text
Handled video moderation result
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid SNS message |
| 500  | Webhook processing error |
