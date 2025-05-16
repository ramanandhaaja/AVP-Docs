# ApiController

## QUICK DOCUMENTATION
- **File Path**: `/API/Controllers/ApiController.cs`
- **Primary Purpose**: Serves as the base controller class for all API controllers in the APV system
- **Key Features**: 
  - Provides access to MediatR for CQRS pattern implementation
  - Implements common authorization and routing settings
  - Configures request size limits
- **Related Components**: 
  - All other controllers in the API namespace inherit from this class
- **Used By**: 
  - Every API controller in the APV system

## Business Context
The ApiController serves as the foundation for the entire API layer of Asset Valuer Pro. It implements the Command Query Responsibility Segregation (CQRS) pattern referenced in the Technical Audit and Documentation Strategy, providing a consistent approach to handling API requests across the system.

## DETAILED DOCUMENTATION

### Overview
ApiController is an abstract base class that all other API controllers in the Asset Valuer Pro system inherit from. It encapsulates common functionality such as authentication requirements, request size limits, and access to the MediatR mediator for handling commands and queries. This design promotes consistency across the API layer and implements the CQRS pattern for separating command and query responsibilities.

### Controller Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**: 
  - `ISender` (MediatR): For sending commands and queries
  - `IBusRegistry` (Rebus): For message bus operations
- **Other Dependencies**: 
  - `Microsoft.AspNetCore.Authorization`: For authentication requirements
  - `Microsoft.AspNetCore.Mvc`: For API controller functionality

### Class Details

#### Attributes
- 🔒 `[Authorize]`: Requires authentication for all derived controllers
- 🌐 `[ApiController]`: Enables API-specific behavior
- ⚡ `[DisableRequestSizeLimit]`: Removes request size restrictions
- 🔗 `[Route("api/[controller]")]`: Sets up conventional routing based on controller name

#### Properties
- 🔧 `Mediator`: Protected property providing access to the MediatR mediator
- 🔧 `BusRegistry`: Protected property providing access to the Rebus message bus registry

### Implementation Notes
- ℹ️ The controller uses lazy initialization for its dependencies, resolving them from the DI container on first access
- ✅ All request handling is delegated to MediatR, keeping controllers thin and focused on HTTP concerns
- 🔧 The use of `ControllerBase` rather than `Controller` indicates this is an API-only controller without view support
- ⚠️ Setting `DisableRequestSizeLimit` allows for uploads of any size, which may require monitoring in production

### Usage Example
```csharp
// Example of inheriting from ApiController
public class AssetController : ApiController
{
    [HttpGet]
    [Route("Get")]
    public async Task<AssetDto> GetAsset([FromQuery] GetAssetQuery query)
    {
        // Uses the Mediator property from ApiController
        return await Mediator.Send(query);
    }
}
```

### Security Considerations
- The `[Authorize]` attribute ensures that all API endpoints require authentication by default
- Individual controllers or actions can override this behavior if needed
- No specific roles are required at this level, allowing more granular access control in derived controllers