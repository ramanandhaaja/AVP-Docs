# 🔧 Content Controller Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ContentController.cs
- **Primary Purpose**: Manages content-related operations in the application
- **Key Endpoints**: 
  - 🔄 POST /UpdateContents - Updates content in the system
  - 🗑️ POST /DeleteContent - Deletes content from the system
- **Related Models**: UpdateContentsCommand, DeleteContentsCommand
- **Used By**: Content management functionality in the web application

## DETAILED DOCUMENTATION

### 📝 Overview
The ContentController provides basic functionality for updating and deleting content within the application. It uses a logger for tracking operations and the Mediator pattern to process requests.

### 🏗️ Controller Dependencies
<ul>
<li>**Namespace**: AVP.API.Controllers</li>
<li>**Services Used**: Mediator, ILogger for ContentController</li>
<li>**Other Dependencies**: None</li>
</ul>

### 📋 Endpoints

#### 🔄 UpdateContents
- **HTTP Method**: POST
- **URL Pattern**: /UpdateContents
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Updates content in the system

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateContentsCommand | Yes | Command containing content to be updated |

##### Response Format
Returns a string response indicating the result of the update operation.

#### 🗑️ DeleteContent
- **HTTP Method**: POST
- **URL Pattern**: /DeleteContent
- **Authentication**: 🔒 Required
- **Description**: Deletes content from the system

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteContentsCommand | Yes | Command containing the ID of content to delete |

##### Response Format
Returns an integer indicating the number of content items deleted or the result code.

### 💡 Tips for Content Management
- ℹ️ Content updates are logged for audit purposes
- ⚠️ Content deletion is permanent and cannot be undone
- ✅ Proper validation is performed before any content modifications