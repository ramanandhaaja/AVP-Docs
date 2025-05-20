# ContentController Documentation

## Quick Overview

- **File Location**: `/API/Controllers/ContentController.cs`
- **Purpose**: Handles operations related to updating and deleting content within the application.
- **Primary Endpoints**: 
  - `POST /UpdateContents`: Update existing content
  - `POST /DeleteContent`: Remove existing content
- **Related Models**: `UpdateContentsCommand`, `DeleteContentsCommand`
- **Used In**: Content management features across the web application

## Detailed Documentation

### Overview

The `ContentController` is responsible for managing the content lifecycle within the system. It supports the ability to update and delete content entries through secure, logged operations.

- **Design Pattern Used**: Command Query Responsibility Segregation (CQRS) using Mediator
- **Logging**: Integrated with a logging service to ensure traceability of content changes

### Controller Dependencies

- **Namespace**: `AVP.API.Controllers`
- **Injected Services**:
  - `IMediator`: Handles command dispatching
  - `ILogger<ContentController>`: Logs operations for auditing and debugging
- **Additional Dependencies**: None specified

## API Endpoints

### POST /UpdateContents

- **Description**: Updates content in the system.
- **Authentication**: Required
- **Payload**: 
  - `UpdateContentsCommand` object containing the new content data
- **Response**: A string message confirming the update outcome.

#### Request Example
```json
{
  "id": 101,
  "title": "Updated Content Title",
  "body": "Updated content body text.",
  "category": "News",
  "lastModifiedBy": "admin"
}
```

#### Response Example
```json
"Content updated successfully"
```

---

### POST /DeleteContent

- **Description**: Deletes content from the system.
- **Authentication**: Required
- **Payload**:
  - `DeleteContentsCommand` object with the ID of the content to be removed
- **Response**: An integer representing the number of records deleted or a result status code.

#### Request Example
```json
{
  "id": 101
}
```

#### Response Example
```json
1
```

## Best Practices for Content Management

- **Auditability**: All content update actions are logged for traceability.
- **Validation**: Data is validated before any operation to ensure consistency and correctness.
- **Deletion Policy**: Content deletions are final. Ensure the content is no longer needed before initiating deletion.